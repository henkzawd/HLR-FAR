# HLR i FAR

En enkel nettside for HLR-koordinatorene i Avdeling for farmakologi (FAR)
ved OUS. Appen holder styr på:

- **Hvor Mini-Anne-bagen befinner seg**, og om hjertestarteren følger med
  (med dato/klokkeslett for sist registrering).
- **Hvilke grupper** som skal ha opplæring (RELIS, UL, Farmasøytisk
  institutt, SSE, RH), hvor de holder til, og hvor nærmeste hjertestarter
  er.
- **En logg** over gjennomført opplæring: dato, koordinator, antall
  deltakere og kommentarer.
- **HLR hurtigstart-guiden**, tilgjengelig på norsk og engelsk.

Alle som har lenken til siden kan redigere alt — det er ikke behov for
innlogging med brukernavn/passord.

## Er dette satt opp ennå?

Hvis du åpner appen og ser en gul boks øverst som sier at den «ikke er
koblet til en database ennå», betyr det at noen først må gjøre
engangs-oppsettet. Se **[OPPSETT.md](OPPSETT.md)** — det tar ca. 10–15
minutter, og du trenger ikke kunne kode.

## Slik bruker du appen

Appen har fire faner, enten i menyen til venstre (på PC) eller nederst
(på mobil):

- **Oversikt** — se og oppdater hvor Mini-Anne-bagen er, og om
  hjertestarteren er med. Trykk **«Rediger»** på det du vil endre, gjør
  endringen, og trykk **«Lagre»**. Endringen vises med det samme hos alle
  andre som har appen åpen.
- **Grupper** — trykk på et gruppekort for å redigere lokasjon eller
  informasjon om nærmeste hjertestarter, eller for å slette gruppen. Bruk
  **«Legg til gruppe»** for å legge til en ny.
- **Opplæringslogg** — trykk **«Registrer økt»** hver gang dere har
  gjennomført en opplæring, og fyll inn dato, gruppe, antall deltakere,
  hvem som gjennomførte den, og eventuelle kommentarer. Søppelbøtte-ikonet
  sletter en rad.
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
automatisk hos alle som har siden åpen. Siden er ment publisert med
**GitHub Pages** direkte fra dette repoet.
