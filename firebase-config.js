// ============================================================
// FIREBASE-OPPSETT — dette er den ENESTE filen du trenger å røre
// for å koble appen til en database.
//
// Se OPPSETT.md for en komplett steg-for-steg-guide (ca. 10 min).
//
// Kort fortalt:
//   1. Opprett et gratis prosjekt på https://console.firebase.google.com
//   2. Skru på "Firestore Database" og "Authentication -> Anonymous"
//   3. Gå til Prosjektinnstillinger (tannhjulet) -> "Dine apper" -> Web-app
//   4. Kopier "firebaseConfig"-objektet du får der, og lim det inn under,
//      i stedet for eksempel-verdiene.
//
// Dette er IKKE et passord — Firebase sine web-nøkler er laget for å
// stå i koden slik som dette. Det som faktisk beskytter dataene er
// sikkerhetsreglene du setter opp i Firestore (se OPPSETT.md).
// ============================================================

window.HLR_FIREBASE_CONFIG = {
  apiKey: "SKRIV_INN_DIN_EGEN_HER",
  authDomain: "SKRIV_INN_DIN_EGEN_HER.firebaseapp.com",
  projectId: "SKRIV_INN_DIN_EGEN_HER",
  storageBucket: "SKRIV_INN_DIN_EGEN_HER.appspot.com",
  messagingSenderId: "SKRIV_INN_DIN_EGEN_HER",
  appId: "SKRIV_INN_DIN_EGEN_HER",
};
