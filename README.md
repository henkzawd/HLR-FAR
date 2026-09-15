# HLR i FAR

En enkel nettside for HLR-koordinatorene i Avdeling for farmakologi (FAR)
ved OUS. Appen holder styr på:

- **Hvor Mini-Anne-bagen befinner seg**, og om hjertestarteren følger med
  (med dato/klokkeslett og hvem som sist registrerte det).
- **Hvilke grupper** som skal ha opplæring (RELIS, UL, Farmasøytisk
  institutt, SSE, RH), hvor de holder til, og hvor nærmeste hjertestarter
  er. Hver gruppe har sin egen farge, som går igjen når du registrerer
  opplæring for den.
- **En logg** over gjennomført opplæring: dato, gruppe, koordinator,
  antall deltakere og kommentarer.
- **En oversikt over mangler**: ting som må fikses eller bestilles, som
  en sprukket dukke eller tomt for ansiktsduker/spritservietter.
- **HLR hurtigstart-guiden**, tilgjengelig på norsk og engelsk.

Alle som har lenken til siden kan redigere alt — det er ikke behov for
innlogging med brukernavn/passord.

## Er dette satt opp ennå?

Hvis du åpner appen og ser en gul boks øverst som sier at den «ikke er
koblet til en database ennå», betyr det at noen først må gjøre
engangs-oppsettet. Se **[OPPSETT.md](OPPSETT.md)** — det tar ca. 10–15
minutter, og du trenger ikke kunne kode.

## Slik bruker du appen

Appen har fem faner, enten i menyen til venstre (på PC) eller nederst
(på mobil):

- **Oversikt** — se og oppdater hvor Mini-Anne-bagen er, og om
  hjertestarteren er med. Trykk **«Rediger»** på det du vil endre, skriv
  inn navnet ditt i feltet som dukker opp (så vi vet hvem som sist
  oppdaterte det), gjør selve endringen, og trykk **«Lagre»**. Endringen
  vises med det samme hos alle andre som har appen åpen.
- **Grupper** — trykk på et gruppekort for å redigere lokasjon eller
  informasjon om nærmeste hjertestarter, eller for å slette gruppen. Bruk
  **«Legg til gruppe»** for å legge til en ny. Hver gruppe får automatisk
  en fargeprikk, som du kjenner igjen når du registrerer opplæring.
- **Opplæringslogg** — trykk **«Registrer økt»** hver gang dere har
  gjennomført en opplæring. Velg gruppe fra nedtrekksmenyen (med
  fargeprikkene fra «Grupper»), og fyll inn dato, antall deltakere, hvem
  som gjennomførte den, og eventuelle kommentarer. Søppelbøtte-ikonet
  sletter en rad.
- **Mangler** — registrer ting som må fikses eller bestilles, f.eks. en
  sprukket dukke eller at det må bestilles flere ansiktsduker eller
  spritservietter. Trykk **«Registrer mangel»**, skriv inn hva det gjelder,
  og huk av boksen når det er ordnet. Tallet ved siden av «Mangler» i menyen
  viser hvor mange uløste mangler som står igjen.
- **Hurtigstart** — hele HLR-guiden, delt inn i tre steg (forberedelse,
  selve opplæringen, og opprydding). Trykk på et felt for å folde det ut.

Øverst til høyre kan du:
- Bytte **språk** mellom norsk og engelsk (🇳🇴 NO / 🇬🇧 EN).
- Bytte **tema** mellom lyst og mørkt med sol/måne-knappen.

Begge disse valgene huskes kun på din egen enhet/nettleser — de påvirker
ikke hva andre ser.

## Om innholdet

Grunnleggende informasjon om gruppene, lokasjoner og nærmeste
hjertestarter er hentet fra det opprinnelige koordineringsarket, men uten
navn på kontaktpersoner eller gamle datoer — det er ment som en levende,
oppdatert oversikt fra nå av.

## For den tekniske vedlikeholderen

Dette er en helt vanlig, «ren» nettside (HTML/CSS/JavaScript) uten
byggeverktøy — den kan åpnes og redigeres direkte i en nettleser eller en
enkel tekstredigerer:

- `index.html` — struktur/innhold på siden
- `styles.css` — utseende (farger, fonter, lyst/mørkt tema, mobilvisning)
- `app.js` — all funksjonalitet, inkludert norsk/engelsk-tekster og
  kobling mot databasen
- `firebase-config.js` — kun stedet nøklene til databasen limes inn (se
  OPPSETT.md)

Data lagres i **Firebase Firestore** (sanntidsdatabase) og oppdateres
automatisk hos alle som har siden åpen. Siden publiseres automatisk av
**Vercel**, som allerede er koblet til dette repoet — se OPPSETT.md,
steg 7.
