# Last Light online setup (Version 9.0 starter)

## What is implemented

- Supabase email/password registration and sign-in in `online.js` (Supabase Auth stores password hashes; this project never stores a password).
- Profile stats and a leaderboard view reading `public.profiles`.
- A live leaderboard refresh every 30 seconds while its tab is open.
- `server.js` serves the browser game and provides authenticated WebSocket matchmaking at `/ws`.
- The server verifies every Supabase access token with Supabase Auth and pairs two authenticated accounts.

**Important limitation:** this release pairs players but does not yet implement the battle itself, friends, ranked result writes, or server-authoritative game simulation. The current tower-defense simulation runs in the browser. The WebSocket service deliberately rejects client-submitted results/actions rather than trusting them, so it cannot award wins/ELO securely yet. Do not advertise matchmaking as a playable 1v1 until the battle protocol and authoritative validation are completed.

## Supabase profile schema expected by this frontend

The frontend expects a table named `public.profiles` with exactly these columns:

- `id uuid` (primary key, references `auth.users.id`)
- `username text`
- `wins integer` (default 0)
- `losses integer` (default 0)
- `elo integer` (default 1000)

If your existing schema uses different names, either adjust `PROFILE_TABLE` and the selected/ordered columns in `online.js`, or create a view with the expected shape. The code never inserts or edits ranking statistics from the browser.

The following is a reference schema/policy template—not a command to run blindly. Compare it with your existing schema and RLS first:

```sql
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique,
  wins integer not null default 0,
  losses integer not null default 0,
  elo integer not null default 1000
);

alter table public.profiles enable row level security;

create policy "Profiles are publicly readable"
on public.profiles for select
using (true);

create or replace function public.create_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  chosen_name text;
begin
  chosen_name := left(coalesce(new.raw_user_meta_data ->> 'display_name', split_part(coalesce(new.email, 'Commander'), '@', 1), 'Commander'), 16)
    || '-' || left(new.id::text, 7);
  insert into public.profiles (id, username)
  values (new.id, chosen_name);
  return new;
end;
$$;

create trigger on_auth_user_created_profile
  after insert on auth.users
  for each row execute function public.create_profile_for_new_user();
```

Review and adjust the trigger if your table already has a signup trigger. **Do not add client insert/update policies for `wins`, `losses`, or `elo`.** RLS is not a safe way to trust a client's claimed match result. A future ranked service should update those columns through a server-only function after it independently simulates and verifies the match.

Email confirmation settings are controlled in Supabase Auth. If confirmation is enabled, registration displays a confirmation message and players sign in after confirming their email.

## Render Web Service configuration

1. Put the project files in the same GitHub repository root: `index.html`, `script.js`, `version8.js`, `styles.css`, `styles-v8.css`, `styles-v9.css`, `online.js`, `server.js`, and `package.json`.
2. In Render, create a **Web Service** from that GitHub repository and select the Node runtime. Configure the service to use the `start` script declared in `package.json`; Render needs the package dependency `ws` available during deployment.
3. Add these environment variables in the Render service's Environment settings:
   - `SUPABASE_URL` = `https://yzhjovdrrulkvwzycocq.supabase.co`
   - `SUPABASE_ANON_KEY` = your Supabase publishable/anon key
4. Do **not** add a Supabase `service_role` or secret key to frontend code, GitHub, or these client files. This matchmaking-only service needs only the public key to verify access tokens.
5. After deployment, the game is served by the Render service itself. In the game's Online Account panel, use `wss://YOUR-RENDER-HOST.onrender.com/ws` as the match-server address.
6. Supabase Auth redirect/site URL settings must include the deployed Render HTTPS origin. Keep the leaderboard SELECT policy enabled if you want visitors to see rankings.

## GitHub using the website

1. Sign in to GitHub and create a **private** repository (public is also possible; the Supabase publishable key is public by design).
2. Use **Add file → Upload files** and upload the project files listed above from the editor/workspace. Keep `index.html` and `package.json` at the repository root.
3. Enter a commit message such as `Add online auth and matchmaking starter`, then select **Commit changes**.
4. In Render, choose **New → Web Service**, connect GitHub, select this repository, set the Node service/start script, and add the environment variables above.
5. Future edits can be uploaded as a new commit; Render can automatically deploy commits from the connected branch.

Never commit passwords, Supabase service-role keys, access tokens, or private credentials. The provided publishable key is intended for browser use, but RLS policies are still essential.
