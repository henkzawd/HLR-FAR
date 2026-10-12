# HLR i FAR

Static web app (no build step) for coordinating CPR/AED equipment and
training for the Pharmacology department (FAR) at OUS. Plain
HTML/CSS/JS, backed by Firebase Firestore (anonymous auth) for shared,
realtime-editable data. Served via Vercel, which is already connected
to this GitHub repo (auto-deploys previews on PRs and a fixed URL on
`main`) — see `OPPSETT.md` step 7.

- `index.html` / `styles.css` / `app.js` — the whole app. A role popup
  (Deltaker / Koordinator, coordinator password in `COORDINATOR_PASSWORD`)
  gates the UI: participants only get the week-calendar sign-up view
  (`sessions` / `sessionPrivate` / `sessions/{id}/registrations` in
  Firestore); coordinators get everything. The password is client-side
  only — it is a door-keeper, not real security. `app.js` holds
  the Norwegian/English translation dictionaries and all Firestore
  logic (see the numbered section comments inside it).
- `firebase-config.js` — placeholder Firebase web config; the user fills
  this in themselves, see `OPPSETT.md`.
- `OPPSETT.md` — Norwegian, non-technical, step-by-step setup guide
  (Firebase project setup; deployment is already automatic via Vercel)
  for the person doing the one-time setup.
- `README.md` — Norwegian, day-to-day usage guide for coordinators.

**Audience note:** the project owner has explicitly said they have zero
coding background. Keep `README.md`/`OPPSETT.md` (and any chat
explanations) in plain Norwegian with concrete, step-by-step
instructions — never assume familiarity with git, terminals, or web
dev jargon.
