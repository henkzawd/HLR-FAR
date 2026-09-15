# Oppsett av HLR i FAR (kun én gang)

Denne guiden er for **den ene personen** som setter opp appen første gang.
Når dette er gjort, trenger ikke de andre HLR-koordinatorene å gjøre noe —
de bare åpner lenken og bruker appen.

Du trenger ikke kunne kode. Du skal bare klikke deg gjennom noen gratis
nettsider og lime inn litt tekst to steder. Sett av ca. 10–15 minutter.

Alt du gjør her er **gratis** — ingen kredittkort trengs.

---

## Oversikt over hva vi skal gjøre

1. Opprette en gratis database hos Google (Firebase) — dette er stedet
   dataene lagres, slik at alle koordinatorer ser det samme.
2. Skru på en enkel, usynlig pålogging (så vi vet at det bare er noen som
   åpner appens lenke som kan skrive til databasen — ingen andre på nettet).
3. Lime inn noen få kodelinjer («nøkkelen» til databasen din) i én fil i
   dette prosjektet.
4. Publisere selve nettsiden med GitHub Pages, som allerede følger med
   dette prosjektet.

---

## Steg 1 — Opprett et Firebase-prosjekt

1. Gå til <https://console.firebase.google.com> og logg inn med en
   Google-konto (samme type konto som Gmail).
2. Trykk **«Add project» / «Legg til prosjekt»**.
3. Gi det et navn, f.eks. `hlr-i-far`. Trykk **Continue/Fortsett**.
4. Du blir spurt om Google Analytics — dette trenger du ikke.
   Skru den **av**, og trykk **Create project/Opprett prosjekt**.
5. Vent til Google sier prosjektet er klart, og trykk **Continue/Fortsett**.

## Steg 2 — Opprett databasen (Firestore)

1. I menyen til venstre, finn **Build → Firestore Database**.
2. Trykk **Create database/Opprett database**.
3. Velg **Start in production mode** (dette er tryggest — vi styrer selv
   hvem som får lov til å skrive, i steg 4). Trykk **Next/Neste**.
4. Velg en plassering i nærheten (f.eks. `eur3 (europe-west)`). Trykk
   **Enable/Aktiver**.

## Steg 3 — Skru på anonym pålogging

Dette gjør at appen automatisk «logger inn» alle som åpner lenken, helt
usynlig — ingen brukernavn eller passord. Det er kun for å holde
tilfeldige roboter på internett unna databasen.

1. I menyen til venstre: **Build → Authentication**.
2. Trykk **Get started**.
3. Under fanen **Sign-in method**, trykk på **Anonymous** i listen.
4. Skru bryteren **Enable** på, og trykk **Save**.

## Steg 4 — Sett sikkerhetsregler

1. Gå tilbake til **Firestore Database**, og trykk på fanen **Rules**
   øverst.
2. Slett alt som står der, og lim inn dette i stedet:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

3. Trykk **Publish/Publiser**.

   Dette betyr: «alle som er logget inn (også anonymt, som i steg 3) kan
   lese og skrive — alle andre er stengt ute». Siden appen logger inn
   alle besøkende automatisk, betyr dette i praksis «alle med lenken kan
   redigere», akkurat slik dere ønsket.

## Steg 5 — Hent nøkkelen til databasen din

1. Trykk på **tannhjulet ⚙️** øverst til venstre, ved siden av
   «Project Overview», og velg **Project settings**.
2. Scroll ned til **«Your apps»**.
3. Trykk på det lille web-ikonet **`</>`** for å legge til en web-app.
4. Gi den et kallenavn, f.eks. `hlr-far-web`. Du trenger ikke krysse av
   for «Firebase Hosting». Trykk **Register app/Registrer app**.
5. Du får nå se en kodeboks som ser omtrent slik ut:

   ```js
   const firebaseConfig = {
     apiKey: "AIzaSy...........................",
     authDomain: "hlr-i-far.firebaseapp.com",
     projectId: "hlr-i-far",
     storageBucket: "hlr-i-far.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abc123def456",
   };
   ```

   **Ikke lukk denne siden ennå** — du trenger tallene/tekstene inni
   klammeparentesene `{ }` i neste steg. (Du finner den også senere under
   Project settings → Your apps, om du skulle trenge den igjen.)

## Steg 6 — Lim inn nøkkelen i prosjektet

Du trenger ikke installere noe program for dette — det kan gjøres direkte
i nettleseren, på GitHub sine nettsider:

1. Gå til dette prosjektets side på GitHub (repoet `hlr-far`).
2. Åpne filen **`firebase-config.js`**.
3. Trykk på **blyant-ikonet ✏️ («Edit this file»)** øverst til høyre i
   filvisningen.
4. Bytt ut de seks linjene som starter med `SKRIV_INN_DIN_EGEN_HER` med
   dine egne verdier fra steg 5 — pass på at du beholder anførselstegnene
   `"..."` og kommaene. Det skal se slik ut etterpå:

   ```js
   window.HLR_FIREBASE_CONFIG = {
     apiKey: "AIzaSy...........................",
     authDomain: "hlr-i-far.firebaseapp.com",
     projectId: "hlr-i-far",
     storageBucket: "hlr-i-far.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abc123def456",
   };
   ```

5. Scroll ned og trykk den grønne knappen **«Commit changes...»**, og
   deretter **«Commit changes»** igjen i vinduet som dukker opp. Da lagres
   endringen din direkte i prosjektet.

> Er dette ikke en hemmelighet du røper til hele verden? Nei — Firebase
> sine web-nøkler er laget for å ligge åpent i koden akkurat sånn. Det som
> faktisk beskytter dataene deres er sikkerhetsreglene fra steg 4, ikke
> hvorvidt noen kan se denne teksten.

## Steg 7 — Publiser nettsiden med GitHub Pages

1. Gå til prosjektets side på GitHub, trykk på **«Settings»** (fanen helt
   til høyre i menyen øverst på repoet).
2. Velg **«Pages»** i menyen til venstre.
3. Under **«Build and deployment» → «Source»**, velg **«Deploy from a
   branch»**.
4. Under **«Branch»**, velg branchen som inneholder den ferdige appen
   (vanligvis `main`), og mappen **`/ (root)`**. Trykk **Save**.
5. Vent 1–2 minutter, last siden på nytt — GitHub viser deg da en lenke
   øverst av typen:

   `https://<brukernavn>.github.io/hlr-far/`

   **Dette er lenken du deler med alle HLR-koordinatorene.**

---

## Er noe galt?

Appen selv forteller deg hva som mangler — se etter den gule/oransje
meldingsboksen øverst i appen:

- **«Denne appen er ikke koblet til en database ennå»** → steg 5–6 er
  ikke gjort riktig ennå (sjekk at du limte inn dine egne verdier i
  `firebase-config.js`, uten anførselstegn-feil).
- **«Fikk ikke logget inn mot databasen»** → gå tilbake til steg 3 og
  sjekk at «Anonymous» faktisk er skrudd **på** (grønn bryter) under
  Authentication → Sign-in method.
- **«Databasen avviste forespørselen»** → gå tilbake til steg 4 og sjekk
  at reglene ble limt inn riktig og at du trykket **Publish**.

## Vedlikehold

- Du kan alltid se og redigere rådataene direkte i Firebase-konsollen
  under **Firestore Database → Data**, om noe skulle trenge manuell
  opprydding.
- Det er helt gratis så lenge dere er innenfor Firebase sin gratis
  grense (Spark-planen) — for en liten avdeling som dette skal dere ligge
  langt unna den grensen.
