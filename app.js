(function () {
  "use strict";

  /* ============================================================
     0. OVERSETTELSER (norsk / engelsk)
     ============================================================ */
  var T = {
    no: {
      appTitle: "HLR i FAR",
      appSubtitle: "Koordinering av opplæring og utstyr",
      navOverview: "Oversikt",
      navGroups: "Grupper",
      navLog: "Opplæringslogg",
      navDeficiencies: "Mangler",
      navGuide: "Hurtigstart",
      bannerNoDb: "Denne appen er ikke koblet til en database ennå. Se OPPSETT.md i prosjektet for å komme i gang (tar ca. 10 minutter).",
      bannerAuthFailed: "Fikk ikke logget inn mot databasen. Sjekk at «Anonym innlogging» er skrudd på under Authentication i Firebase-konsollen (se OPPSETT.md, steg 3).",
      bannerPermission: "Databasen avviste forespørselen. Sjekk sikkerhetsreglene i Firestore (se OPPSETT.md, steg 4).",
      overviewTitle: "Utstyrsstatus",
      overviewDesc: "Dette er stedet der vi holder styr på hvor utstyret befinner seg akkurat nå.",
      miniAnneTitle: "Mini-Anne-bagen",
      miniAnneLabel: "Hvor befinner bagen seg nå?",
      miniAnneNotSet: "Ikke registrert ennå",
      edit: "Rediger",
      save: "Lagre",
      cancel: "Avbryt",
      delete: "Slett",
      fieldYourName: "Ditt navn",
      defibTitle: "Hjertestarter",
      defibLabel: "Følger hjertestarteren med bagen?",
      defibYes: "Ja, den er med",
      defibBadgeYes: "Ja, med bagen",
      defibBadgeNo: "Nei, ikke med",
      lastUpdated: "Sist oppdatert",
      neverRegistered: "Ikke registrert ennå",
      statusFinePrint: "Endringer lagres for alle med lenken med det samme du trykker «Lagre».",
      groupsTitle: "Grupper som skal ha opplæring",
      groupsDesc: "Grunnleggende informasjon om hver gruppe: hvor de holder til, og hvor nærmeste hjertestarter er. Trykk på et kort for å redigere.",
      addGroup: "Legg til gruppe",
      rowLocation: "Lokasjon",
      rowDefib: "Nærmeste hjertestarter",
      noDefibInfo: "Ikke registrert ennå",
      logTitle: "Gjennomført opplæring",
      logDesc: "Loggfør hver gjennomførte økt, så vi har oversikt over hva som er gjort.",
      addLog: "Registrer økt",
      colDate: "Dato",
      colGroup: "Gruppe / seksjon",
      colParticipants: "Deltakere",
      colCoordinator: "Koordinator",
      colComment: "Kommentar",
      logEmpty: "Ingen økter registrert ennå. Trykk «Registrer økt» for å legge til den første.",
      fieldGroupOrSectionPlaceholder: "Velg gruppe …",
      deficienciesTitle: "Mangler",
      deficienciesDesc: "Registrer ting som må fikses eller bestilles – f.eks. en sprukket dukke, eller at det må bestilles flere ansiktsduker eller spritservietter.",
      addDeficiency: "Registrer mangel",
      deficiencyModalTitle: "Registrer mangel",
      fieldDeficiencyText: "Hva mangler / må fikses?",
      deficiencyEmpty: "Ingen mangler registrert. Bra jobba! Trykk «Registrer mangel» hvis noe må fikses eller bestilles.",
      deficiencyMarkResolved: "Merk som løst",
      deficiencyMarkUnresolved: "Merk som uløst",
      confirmDeleteDeficiency: "Slette denne mangelen? Dette kan ikke angres.",
      deficiencyReportedLabel: "Registrert",
      deficiencyResolvedLabel: "Løst",
      deficiencyCommentLabel: "Kommentar",
      addDeficiencyComment: "Legg til kommentar",
      editDeficiencyComment: "Rediger kommentar",
      deficiencyCommentModalTitle: "Kommentar til mangel",
      fieldDeficiencyCommentText: "Kommentar",
      removeDeficiencyComment: "Fjern kommentar",
      guideTitle: "HLR hurtigstart-guide",
      guideDesc: "Alt en koordinator trenger å huske på — fra innkalling til opprydding.",
      guideBold: "Fet",
      guideItalic: "Kursiv",
      guideBulletList: "Punktliste",
      guideNumberList: "Nummerert liste",
      guideLink: "Lenke",
      guideUnlink: "Fjern lenke",
      guideClearFormat: "Fjern formatering",
      guideLinkPrompt: "Lim inn lenke (URL):",
      guideNeedsTranslation: "Norsk tekst er endret – engelsk versjon kan være utdatert.",
      guideChangelogSummary: "Endringslogg",
      guideChangelogEmpty: "Ingen endringer registrert ennå.",
      groupModalTitleAdd: "Ny gruppe",
      groupModalTitleEdit: "Rediger gruppe",
      fieldGroupName: "Gruppenavn",
      fieldShortName: "Kort navn (vises i fargeikonet)",
      fieldShortNamePlaceholder: "F.eks. RELIS, UL, F.Inst",
      fieldLocation: "Lokasjon",
      fieldNearestDefib: "Nærmeste hjertestarter",
      fieldDate: "Dato",
      fieldGroupOrSection: "Gruppe / seksjon",
      fieldParticipants: "Antall deltakere",
      fieldCoordinatorName: "Utført ved (koordinator)",
      fieldComment: "Kommentar / forbedring",
      logModalTitle: "Registrer gjennomført opplæring",
      confirmDeleteGroup: "Slette denne gruppen? Dette kan ikke angres.",
      confirmDeleteLog: "Slette denne loggføringen? Dette kan ikke angres.",
      toastSaved: "Lagret",
      toastDeleted: "Slettet",
      toastError: "Noe gikk galt. Prøv igjen.",
      dash: "–",
      close: "Lukk",
      roleParticipant: "Deltaker",
      roleCoordinator: "Koordinator",
      roleSwitch: "Bytt rolle",
      loginTitle: "Velkommen til HLR i FAR",
      loginPrompt: "Hvem er du?",
      loginParticipantDesc: "Se kalenderen og meld deg på HLR-opplæring",
      loginCoordinatorDesc: "Full tilgang – krever passord",
      loginCoordinatorTitle: "Koordinator-innlogging",
      loginPasswordLabel: "Passord",
      loginSubmit: "Logg inn",
      loginBack: "Tilbake",
      loginWrong: "Feil passord. Prøv igjen.",
      navCalendar: "Påmelding",
      calTitle: "Påmelding til HLR-opplæring",
      calDescParticipant: "Velg en ledig økt i kalenderen for å melde deg på. Grønne økter har ledige plasser.",
      calDescCoordinator: "Trykk et tomt felt i kalenderen for å opprette en ny økt, eller trykk på en økt for å redigere den og se hvem som er påmeldt.",
      calAddSession: "Ny økt",
      calPrev: "Forrige uke",
      calNext: "Neste uke",
      calToday: "I dag",
      calWeek: "Uke",
      calNextAvailable: "Neste ledige økt",
      calEmptyWeekParticipant: "Ingen økter denne uken. Prøv neste uke!",
      calEmptyWeekCoordinator: "Ingen økter denne uken. Trykk i kalenderen for å opprette en.",
      legendOpen: "Ledig",
      legendFilling: "Nesten fullt",
      legendFull: "Fullt",
      legendPast: "Passert",
      calSpotsLeft: "{n} ledige plasser",
      calSpotsLeftOne: "1 ledig plass",
      calFull: "Fullt",
      calRegisteredOf: "{n} av {max} påmeldt",
      calRegisteredShort: "{n}/{max} påmeldt",
      lengthMinutes: "30 min",
      lengthHour: "1 time",
      lengthHours: "{n} timer",
      sessionEnds: "Slutter {time}",
      sessionModalTitleAdd: "Ny økt",
      sessionModalTitleEdit: "Rediger økt",
      fieldSessionDate: "Dato",
      fieldStartTime: "Starttidspunkt",
      fieldLength: "Lengde",
      fieldCapacity: "Maks antall påmeldte",
      fieldParticipantNote: "Notat til deltakere (vises i påmeldingen)",
      fieldOrganizerNote: "Notat til organisatorer (skjult for deltakere)",
      deleteSession: "Slett økt",
      sessionErrWeekend: "Velg en ukedag (mandag–fredag).",
      sessionErrDate: "Velg en dato.",
      sessionErrCapacity: "Maks antall kan ikke være lavere enn antall påmeldte ({n}). Meld av noen først.",
      confirmDeleteSession: "Slette denne økten? Alle {n} påmeldinger slettes også. Dette kan ikke angres.",
      confirmDeleteSessionEmpty: "Slette denne økten? Dette kan ikke angres.",
      registrationsHeading: "Påmeldte",
      registrationsEmpty: "Ingen påmeldte ennå.",
      removeRegistration: "Meld av",
      confirmRemoveRegistration: "Melde av {name}?",
      toastUnregistered: "Meldt av",
      signupTitle: "Meld deg på",
      signupNoteLabel: "Informasjon fra arrangør",
      fieldFullName: "Fullt navn",
      fieldEmail: "E-post",
      signupSubmit: "Meld meg på",
      signupDoneTitle: "Du er påmeldt!",
      signupDoneText: "Du er registrert på økten {when}.",
      signupNoReceipt: "Obs: Det sendes ingen bekreftelse på påmelding. Husk selv å notere deg dato og tidspunkt.",
      icsDownload: "Last ned kalenderfil (.ics)",
      outlookWeb: "Åpne i Outlook på nett",
      icsHint: "Kalenderfilen er en vanlig tekstfil, ikke et program: dobbeltklikk den, så legges økten i Outlook. Hvis nedlasting er blokkert på PC-en din, bruk «Outlook på nett»-knappen eller noter tidspunktet selv.",
      icsSummary: "HLR-opplæring (FAR)",
      icsReminder: "Påminnelse: HLR-opplæring i morgen",
      icsSignedUpAs: "Påmeldt som: {name}",
      fieldRoom: "Rom",
      roomPlaceholder: "F.eks. Rom 3.201, Ullevål bygg 6",
      rememberRoom: "Husk dette rommet",
      roomRemembered: "Rommet er husket",
      savedRooms: "Lagrede rom (trykk for å bruke)",
      noSavedRooms: "Ingen lagrede rom ennå. Skriv inn et rom og trykk «Husk dette rommet».",
      removeSavedRoom: "Fjern {room} fra lagrede rom",
      toastRoomSaved: "Rommet er lagret",
      signupRoomLabel: "Rom",
      signupErrName: "Skriv fullt navn (fornavn og etternavn).",
      signupErrEmail: "Skriv en gyldig e-postadresse.",
      signupErrFull: "Beklager, økten ble full før du rakk å melde deg på.",
      signupErrDuplicate: "Denne e-postadressen er allerede påmeldt denne økten.",
      signupErrPast: "Denne økten er ferdig, og påmeldingen er stengt.",
      signupErrGone: "Denne økten finnes ikke lenger.",
      signupClosedPast: "Påmeldingen er stengt – økten er ferdig.",
      signupClosedFull: "Økten er full, så påmeldingen er stengt.",
      cancelToggle: "Må du melde deg av?",
      cancelIntro: "Send en forespørsel til koordinatorene. Du er fortsatt påmeldt til en koordinator har godkjent avmeldingen.",
      fieldCancelEmail: "E-posten du meldte deg på med",
      fieldCancelReason: "Begrunnelse",
      cancelSubmit: "Send forespørsel",
      cancelSent: "Forespørselen er sendt til koordinatorene. Du er fortsatt påmeldt til en koordinator har godkjent avmeldingen.",
      cancelErrReason: "Skriv en kort begrunnelse.",
      cancelErrNotRegistered: "Fant ingen påmelding med denne e-postadressen til denne økten.",
      cancelErrDuplicate: "Du har allerede sendt en avmeldingsforespørsel for denne økten. Koordinatorene har den til behandling.",
      calCancelRequests: "Avmeldingsforespørsler: {n}",
      requestLabel: "Ber om avmelding",
      approveCancel: "Godkjenn",
      declineCancel: "Avslå",
      toastDeclined: "Forespørselen er avslått",
      guideSections: [
        {
          title: "Forberedelse",
          html:
            "<ul>" +
            "<li>Kall inn i god tid – opplæringen tar 1–1,5 time. Hør med avdelingsleder om de kan sende ut påmelding og sette opp puljer på ca. 10 stk.</li>" +
            "<li>Sørg for at alle deltakere har gjennomført den teoretiske delen på Dossier («OUS-KLM – HLR-trening i KLM») før oppmøte.</li>" +
            "<li>Del ut informasjon om hvor hjertestarteren er lokalisert i forkant – se «Grupper»-siden i denne appen.</li>" +
            "<li>Book et egnet rom med god plass (10 stk. som alle skal sitte/ligge på kne).</li>" +
            "<li>Læringsmålet «KLM_Praktisk opplæring – HLR» kan sendes til signering av koordinator(ene) som gjennomførte opplæringen.</li>" +
            "<li>Lokaliser Mini-Anne, pusteduker og øvingshjertestarter. Hjertestarter lånes fra simuleringssenteret etter avtale og må bestilles i forveien: <a href=\"mailto:hlrbestilling@ous-hf.no\">hlrbestilling@ous-hf.no</a></li>" +
            "</ul>",
        },
        {
          title: "Algoritme for selve opplæringen",
          html:
            "<ul>" +
            "<li>Møt opp i god tid før avtalt tid for å sjekke at teknikk fungerer (projektor og lyd fra datamaskin).</li>" +
            "<li>Start med en kort introduksjon: dette er praktisk opplæring i GHLR (grunnleggende HLR), ikke HHLR. Alle ansatte skal læres opp i å gjenkjenne en hjertestans, alarmere umiddelbart, starte HLR raskt (innen ett minutt) og bruke en halvautomatisk defibrillator.</li>" +
            "<li>Del ut ett sett til hver deltaker: 1× Mini-Anne-dukke, 1× pusteduk. Blås opp Mini-Anne med posen som følger med (hygiene), og bruk alltid pusteduk ved innblåsninger.</li>" +
            "<li>Praktisk gjennomføring følger instruksjonsfilmene fra Hjertevakten® («Virtuell HLR-trening»). Sett på projektor med lyd — full gjennomgang tar ca. 45 minutter, sett av 1–1,5 time i tilfelle tekniske problemer eller spørsmål. Filmene er «follow along», så praktisk trening inngår i totaltiden.</li>" +
            "<li>Eneste avvik fra filmene er hjertestarteren: her bruker vi vår egen semiautomatiske øvingsdefibrillator, som vises frem etter fotball-filmen (nr. 8 fra toppen). Vis hvordan den skrus på, hvordan elektrodene festes, og hvordan man ber tilstedeværende trekke seg unna før støt avgis.</li>" +
            "<li>Fra 2026: tempoet er noe økt (nærmere 120 kompresjoner/minutt), og stabilt sideleie gjøres ved å trekke opp begge bein og legge personen i fosterstilling (hodet stabiliseres ikke lenger manuelt — pass på frie luftveier). Deltakerne øver på dette i par.</li>" +
            "</ul>",
        },
        {
          title: "Opprydding og logistikk",
          html:
            "<ul>" +
            "<li>Rengjør Mini-Anne med engangsklutene i bagen. Vask ansikt, munn og brystoverflate grundig. Si ifra til gruppen dersom det er få kluter igjen.</li>" +
            "<li>Bytt lunge FØR sammenrulling dersom den er sprukket, slik at dukken er klar til neste gang.</li>" +
            "<li>Slipp ut luften og legg dukken tilbake i posen. Kast pusteduken i søppelet.</li>" +
            "<li>Fyll inn gjennomført opplæring under «Opplæringslogg» i denne appen, med antall deltakere og eventuelle kommentarer. Oppdater også «Oversikt» med hvor Mini-Anne-bagen befinner seg, og om hjertestarteren følger med eller er levert tilbake.</li>" +
            "</ul>",
        },
      ],
    },
    en: {
      appTitle: "CPR in FAR",
      appSubtitle: "Coordinating training and equipment",
      navOverview: "Overview",
      navGroups: "Groups",
      navLog: "Training log",
      navDeficiencies: "Issues",
      navGuide: "Quickstart",
      bannerNoDb: "This app isn't connected to a database yet. See OPPSETT.md in the project to get started (about 10 minutes).",
      bannerAuthFailed: "Could not sign in to the database. Check that \"Anonymous sign-in\" is enabled under Authentication in the Firebase console (see OPPSETT.md, step 3).",
      bannerPermission: "The database rejected the request. Check the Firestore security rules (see OPPSETT.md, step 4).",
      overviewTitle: "Equipment status",
      overviewDesc: "This is where we keep track of where the equipment is right now.",
      miniAnneTitle: "Mini-Anne bag",
      miniAnneLabel: "Where is the bag right now?",
      miniAnneNotSet: "Not registered yet",
      edit: "Edit",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      fieldYourName: "Your name",
      defibTitle: "Defibrillator",
      defibLabel: "Is the defibrillator with the bag?",
      defibYes: "Yes, it's with the bag",
      defibBadgeYes: "Yes, with the bag",
      defibBadgeNo: "No, not with it",
      lastUpdated: "Last updated",
      neverRegistered: "Not registered yet",
      statusFinePrint: "Changes are saved for everyone with the link as soon as you press “Save”.",
      groupsTitle: "Groups receiving training",
      groupsDesc: "Basic information about each group: where they're located, and where the nearest defibrillator is. Tap a card to edit it.",
      addGroup: "Add group",
      rowLocation: "Location",
      rowDefib: "Nearest defibrillator",
      noDefibInfo: "Not registered yet",
      logTitle: "Completed training",
      logDesc: "Log every session so we keep track of what's been done.",
      addLog: "Log a session",
      colDate: "Date",
      colGroup: "Group / section",
      colParticipants: "Participants",
      colCoordinator: "Coordinator",
      colComment: "Comment",
      logEmpty: "No sessions logged yet. Press “Log a session” to add the first one.",
      fieldGroupOrSectionPlaceholder: "Select group …",
      deficienciesTitle: "Issues",
      deficienciesDesc: "Log things that need fixing or ordering – e.g. a torn doll, or that you need to order more face shields or disinfectant wipes.",
      addDeficiency: "Log an issue",
      deficiencyModalTitle: "Log an issue",
      fieldDeficiencyText: "What's missing / needs fixing?",
      deficiencyEmpty: "No issues logged. Nice! Press “Log an issue” if something needs fixing or ordering.",
      deficiencyMarkResolved: "Mark as resolved",
      deficiencyMarkUnresolved: "Mark as unresolved",
      confirmDeleteDeficiency: "Delete this issue? This cannot be undone.",
      deficiencyReportedLabel: "Reported",
      deficiencyResolvedLabel: "Resolved",
      deficiencyCommentLabel: "Comment",
      addDeficiencyComment: "Add a comment",
      editDeficiencyComment: "Edit comment",
      deficiencyCommentModalTitle: "Comment on issue",
      fieldDeficiencyCommentText: "Comment",
      removeDeficiencyComment: "Remove comment",
      guideTitle: "CPR quickstart guide",
      guideDesc: "Everything a coordinator needs to remember — from booking to cleanup.",
      guideBold: "Bold",
      guideItalic: "Italic",
      guideBulletList: "Bullet list",
      guideNumberList: "Numbered list",
      guideLink: "Link",
      guideUnlink: "Remove link",
      guideClearFormat: "Clear formatting",
      guideLinkPrompt: "Paste link (URL):",
      guideNeedsTranslation: "The Norwegian text has changed – the English version may be out of date.",
      guideChangelogSummary: "Change log",
      guideChangelogEmpty: "No changes logged yet.",
      groupModalTitleAdd: "New group",
      groupModalTitleEdit: "Edit group",
      fieldGroupName: "Group name",
      fieldShortName: "Short name (shown in the color icon)",
      fieldShortNamePlaceholder: "E.g. RELIS, UL, F.Inst",
      fieldLocation: "Location",
      fieldNearestDefib: "Nearest defibrillator",
      fieldDate: "Date",
      fieldGroupOrSection: "Group / section",
      fieldParticipants: "Number of participants",
      fieldCoordinatorName: "Conducted by (coordinator)",
      fieldComment: "Comment / improvement",
      logModalTitle: "Log completed training",
      confirmDeleteGroup: "Delete this group? This cannot be undone.",
      confirmDeleteLog: "Delete this log entry? This cannot be undone.",
      toastSaved: "Saved",
      toastDeleted: "Deleted",
      toastError: "Something went wrong. Please try again.",
      dash: "–",
      close: "Close",
      roleParticipant: "Participant",
      roleCoordinator: "Coordinator",
      roleSwitch: "Switch role",
      loginTitle: "Welcome to CPR in FAR",
      loginPrompt: "Who are you?",
      loginParticipantDesc: "View the calendar and sign up for CPR training",
      loginCoordinatorDesc: "Full access – password required",
      loginCoordinatorTitle: "Coordinator sign-in",
      loginPasswordLabel: "Password",
      loginSubmit: "Sign in",
      loginBack: "Back",
      loginWrong: "Wrong password. Please try again.",
      navCalendar: "Sign-up",
      calTitle: "Sign up for CPR training",
      calDescParticipant: "Pick an available session in the calendar to sign up. Green sessions have spots left.",
      calDescCoordinator: "Click an empty spot in the calendar to create a new session, or click a session to edit it and see who has signed up.",
      calAddSession: "New session",
      calPrev: "Previous week",
      calNext: "Next week",
      calToday: "Today",
      calWeek: "Week",
      calNextAvailable: "Next available session",
      calEmptyWeekParticipant: "No sessions this week. Try next week!",
      calEmptyWeekCoordinator: "No sessions this week. Click in the calendar to create one.",
      legendOpen: "Available",
      legendFilling: "Almost full",
      legendFull: "Full",
      legendPast: "Past",
      calSpotsLeft: "{n} spots left",
      calSpotsLeftOne: "1 spot left",
      calFull: "Full",
      calRegisteredOf: "{n} of {max} signed up",
      calRegisteredShort: "{n}/{max} signed up",
      lengthMinutes: "30 min",
      lengthHour: "1 hour",
      lengthHours: "{n} hours",
      sessionEnds: "Ends {time}",
      sessionModalTitleAdd: "New session",
      sessionModalTitleEdit: "Edit session",
      fieldSessionDate: "Date",
      fieldStartTime: "Start time",
      fieldLength: "Length",
      fieldCapacity: "Max number of participants",
      fieldParticipantNote: "Note for participants (shown when signing up)",
      fieldOrganizerNote: "Note for organisers (hidden from participants)",
      deleteSession: "Delete session",
      sessionErrWeekend: "Pick a weekday (Monday–Friday).",
      sessionErrDate: "Pick a date.",
      sessionErrCapacity: "Max cannot be lower than the number already signed up ({n}). Remove someone first.",
      confirmDeleteSession: "Delete this session? All {n} sign-ups will be deleted too. This cannot be undone.",
      confirmDeleteSessionEmpty: "Delete this session? This cannot be undone.",
      registrationsHeading: "Signed up",
      registrationsEmpty: "Nobody has signed up yet.",
      removeRegistration: "Remove",
      confirmRemoveRegistration: "Remove {name} from this session?",
      toastUnregistered: "Removed",
      signupTitle: "Sign up",
      signupNoteLabel: "Information from the organiser",
      fieldFullName: "Full name",
      fieldEmail: "Email",
      signupSubmit: "Sign me up",
      signupDoneTitle: "You're signed up!",
      signupDoneText: "You're registered for the session {when}.",
      signupNoReceipt: "Note: No confirmation of your sign-up is sent. Please make a note of the date and time yourself.",
      icsDownload: "Download calendar file (.ics)",
      outlookWeb: "Open in Outlook on the web",
      icsHint: "The calendar file is a plain text file, not a program: double-click it to add the session to Outlook. If downloads are blocked on your PC, use the “Outlook on the web” button or make a note of the time yourself.",
      icsSummary: "CPR training (FAR)",
      icsReminder: "Reminder: CPR training tomorrow",
      icsSignedUpAs: "Signed up as: {name}",
      fieldRoom: "Room",
      roomPlaceholder: "E.g. Room 3.201, Ullevål building 6",
      rememberRoom: "Remember this room",
      roomRemembered: "Room remembered",
      savedRooms: "Saved rooms (tap to use)",
      noSavedRooms: "No saved rooms yet. Type a room and press “Remember this room”.",
      removeSavedRoom: "Remove {room} from saved rooms",
      toastRoomSaved: "Room saved",
      signupRoomLabel: "Room",
      signupErrName: "Enter your full name (first and last name).",
      signupErrEmail: "Enter a valid email address.",
      signupErrFull: "Sorry, the session filled up before you could sign up.",
      signupErrDuplicate: "This email address is already signed up for this session.",
      signupErrPast: "This session has ended and sign-up is closed.",
      signupErrGone: "This session no longer exists.",
      signupClosedPast: "Sign-up is closed – the session has ended.",
      signupClosedFull: "The session is full, so sign-up is closed.",
      cancelToggle: "Need to cancel?",
      cancelIntro: "Send a request to the coordinators. You stay signed up until a coordinator has approved the cancellation.",
      fieldCancelEmail: "The email you signed up with",
      fieldCancelReason: "Reason",
      cancelSubmit: "Send request",
      cancelSent: "The request has been sent to the coordinators. You stay signed up until a coordinator has approved the cancellation.",
      cancelErrReason: "Please write a short reason.",
      cancelErrNotRegistered: "No sign-up found for this email address in this session.",
      cancelErrDuplicate: "You have already sent a cancellation request for this session. The coordinators are reviewing it.",
      calCancelRequests: "Cancellation requests: {n}",
      requestLabel: "Requests cancellation",
      approveCancel: "Approve",
      declineCancel: "Decline",
      toastDeclined: "Request declined",
      guideSections: [
        {
          title: "Preparation",
          html:
            "<ul>" +
            "<li>Plan well in advance – the training takes 1–1.5 hours. Check with the department head about sending out sign-up and organising groups of about 10 people.</li>" +
            "<li>Make sure all participants have completed the theoretical part on Dossier (“OUS-KLM – CPR training in KLM”) before the session.</li>" +
            "<li>Share information about the defibrillator's location in advance – see the “Groups” page in this app.</li>" +
            "<li>Book a suitable room with enough space (10 people, all kneeling on the floor).</li>" +
            "<li>The learning objective “KLM_Practical training – CPR” can be sent for signing by the coordinator(s) who conducted the training.</li>" +
            "<li>Locate Mini-Anne, resuscitation masks and the training defibrillator. The defibrillator is borrowed from the simulation centre by arrangement and must be booked in advance: <a href=\"mailto:hlrbestilling@ous-hf.no\">hlrbestilling@ous-hf.no</a></li>" +
            "</ul>",
        },
        {
          title: "Algorithm for the training itself",
          html:
            "<ul>" +
            "<li>Arrive well before the scheduled time to check that the equipment works (projector and sound from the computer).</li>" +
            "<li>Start with a short introduction: this is practical training in Basic Life Support (BLS), not Advanced Life Support. All employees should be trained to recognise cardiac arrest, call for help immediately, start CPR quickly (within one minute), and use a semi-automatic defibrillator.</li>" +
            "<li>Hand out one set to each participant: 1x Mini-Anne doll, 1x resuscitation mask. Inflate Mini-Anne using the bag provided (for hygiene), and always use the resuscitation mask for breaths.</li>" +
            "<li>The practical part follows the instructional videos from Hjertevakten® (“Virtual CPR training”). Turn on the projector with sound — a full walkthrough takes about 45 minutes, so allow 1–1.5 hours for technical issues or questions. The videos are “follow-along”, so practical training is included in the total time.</li>" +
            "<li>The only deviation from the videos is the defibrillator: here we use our own semi-automatic training defibrillator, shown after the football-scene film (no. 8 from the top). Demonstrate how to turn it on, attach the electrodes, and ask bystanders to stand clear before delivering a shock.</li>" +
            "<li>From 2026: the tempo has increased slightly (closer to 120 compressions/minute), and the recovery position is done by pulling both legs up and placing the person in a foetal position (the head is no longer stabilised manually — make sure the airway stays clear). Participants practise this in pairs.</li>" +
            "</ul>",
        },
        {
          title: "Cleanup and logistics",
          html:
            "<ul>" +
            "<li>Clean Mini-Anne with the disposable wipes in the bag. Wash the face, mouth and chest surface thoroughly. Let the group know if only a few wipes are left.</li>" +
            "<li>Replace the lung BEFORE rolling the doll up if it has torn, so it's ready for next time.</li>" +
            "<li>Let the air out and put the doll back in the bag. Throw the resuscitation mask away.</li>" +
            "<li>Log the completed training under “Training log” in this app, with the number of participants and any comments. Also update “Overview” with where the Mini-Anne bag is, and whether the defibrillator is with it or has been returned.</li>" +
            "</ul>",
        },
      ],
    },
  };

  var DEFAULT_GROUPS = [
    { id: "relis", name: "RELIS", shortName: "RELIS", location: "Ullevål, bygg 50", defib: "1. etasje hos HABIO (bak dør som er låst for oss).", order: 1 },
    { id: "ul", name: "UL", shortName: "UL", location: "Ullevål, bygg 6", defib: "4. etasje – venstre for midtre trappegang, og 3. etasje – høyre for midtre trappegang.", order: 2 },
    { id: "farmasoytisk-institutt", name: "Farmasøytisk institutt", shortName: "F.Inst", location: "Rikshospitalet", defib: "2. etasje, i hallen utenfor Patologi.", order: 3 },
    { id: "sse", name: "SSE", shortName: "SSE", location: "Spesialsykehuset for epilepsi (SSE)", defib: "Telemetri kontaktes på tlf. 675 01 244 og kommer med hjertestarter, jf. prosedyre.", order: 4 },
    { id: "rh", name: "RH", shortName: "RH", location: "Rikshospitalet", defib: "", order: 5 },
  ];

  var GROUP_PALETTE = ["#4C7CE0", "#2FA6A0", "#8B6FD1", "#3FA65C", "#4FA8D8", "#6C6FCF", "#4CA6C7", "#7C9A3F"];
  function groupColor(g) {
    var str = (g && (g.id || g.name)) || "";
    var hash = 0;
    for (var i = 0; i < str.length; i++) { hash = (hash * 31 + str.charCodeAt(i)) >>> 0; }
    return GROUP_PALETTE[hash % GROUP_PALETTE.length];
  }
  function groupShortLabel(g) {
    var custom = g && g.shortName && String(g.shortName).trim();
    if (custom) return custom;
    var name = (g && g.name) || "";
    var words = name.trim().split(/\s+/).filter(Boolean);
    if (words.length > 1) {
      return words.map(function (w) { return w.charAt(0).toUpperCase(); }).slice(0, 4).join("");
    }
    return name.slice(0, 6).toUpperCase();
  }

  var GUIDE_SEED = T.no.guideSections.map(function (sec, i) {
    var en = (T.en.guideSections && T.en.guideSections[i]) || {};
    return {
      id: "section-" + (i + 1),
      title: sec.title,
      html: sec.html,
      titleEn: en.title || sec.title,
      htmlEn: en.html || sec.html,
    };
  });

  var GUIDE_ALLOWED_TAGS = { P: 1, UL: 1, OL: 1, LI: 1, B: 1, STRONG: 1, I: 1, EM: 1, BR: 1, A: 1 };
  function sanitizeGuideHtml(html) {
    var doc = document.implementation.createHTMLDocument("");
    doc.body.innerHTML = String(html || "");
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 1) {
          if (!GUIDE_ALLOWED_TAGS[child.tagName]) {
            node.replaceChild(document.createTextNode(child.textContent), child);
            return;
          }
          Array.prototype.slice.call(child.attributes).forEach(function (attr) {
            if (child.tagName === "A" && attr.name === "href") {
              if (!/^(https?:|mailto:)/i.test(attr.value.trim())) child.removeAttribute("href");
            } else {
              child.removeAttribute(attr.name);
            }
          });
          walk(child);
        } else if (child.nodeType !== 3) {
          node.removeChild(child);
        }
      });
    })(doc.body);
    return doc.body.innerHTML;
  }

  /* ============================================================
     1. TILSTAND
     ============================================================ */
  var state = {
    lang: localStorage.getItem("hlrLang") || "no",
    view: "oversikt",
    db: null,
    dbReady: false,
    status: null,
    groups: [],
    log: [],
    deficiencies: [],
    guideSections: [],
    guideChangelog: [],
    editingGuideId: null,
    editingMiniAnne: false,
    editingDefib: false,
    openGroupId: null, // null = ny gruppe, ellers id for redigering
    openDeficiencyCommentId: null,
    bannerKey: null,
    role: null, // "participant" | "coordinator" – satt når man har valgt i popupen
    sessions: [],
    rooms: [], // lagrede rom (kun koordinatorer)
    calWeekStart: null, // ISO-dato for mandagen i uken som vises
    calDayIdx: 0, // valgt ukedag (0 = mandag) – brukes i mobilvisning
    calAnimate: false,
    openSessionId: null, // null = ny økt, ellers id for redigering
    openSessionDraft: null, // {date, start} når en ny økt opprettes ved å trykke i kalenderen
    openSignupId: null,
    signupDoneSession: null, // økten og navnet fra siste vellykkede påmelding (til kalenderfilen)
    registrationsUnsub: null,
    requestsUnsub: null,
    modalRegs: [],
    modalReqs: [],
    organizerNoteLoaded: false,
    coordinatorSubsStarted: false,
  };

  function t(key, vars) {
    var dict = T[state.lang] || T.no;
    var str = Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
    if (vars) {
      str = str.replace(/\{(\w+)\}/g, function (m, name) { return vars[name] != null ? vars[name] : m; });
    }
    return str;
  }

  function locale() {
    return state.lang === "en" ? "en-GB" : "nb-NO";
  }

  /* ============================================================
     2. SMÅ VERKTØY
     ============================================================ */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(str) {
    var d = document.createElement("div");
    d.textContent = str == null ? "" : String(str);
    return d.innerHTML;
  }

  var toastTimer = null;
  function toast(msg) {
    var el = $("#toast");
    el.textContent = msg;
    el.hidden = false;
    requestAnimationFrame(function () { el.classList.add("is-visible"); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("is-visible");
      setTimeout(function () { el.hidden = true; }, 200);
    }, 2200);
  }

  function showBanner(key) {
    state.bannerKey = key;
    $("#connBannerText").textContent = t(key);
    $("#connBanner").hidden = false;
  }
  function hideBanner() {
    state.bannerKey = null;
    $("#connBanner").hidden = true;
  }

  function formatDateTime(date) {
    if (!date) return t("neverRegistered");
    try {
      return new Intl.DateTimeFormat(locale(), { dateStyle: "medium", timeStyle: "short" }).format(date);
    } catch (e) {
      return date.toLocaleString();
    }
  }
  function formatDate(isoDateStr) {
    if (!isoDateStr) return t("dash");
    var parts = isoDateStr.split("-");
    if (parts.length !== 3) return isoDateStr;
    var d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    try {
      return new Intl.DateTimeFormat(locale(), { dateStyle: "medium" }).format(d);
    } catch (e) {
      return isoDateStr;
    }
  }

  /* ============================================================
     3. THEME
     ============================================================ */
  function applyStoredTheme() {
    var stored = localStorage.getItem("hlrTheme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  }
  function toggleTheme() {
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var current = document.documentElement.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("hlrTheme", next);
  }

  /* ============================================================
     4. OVERSETTELSE AV STATISK HTML
     ============================================================ */
  function applyStaticTranslations() {
    $all("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    $all("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    $all("[data-i18n-lang-current]").forEach(function (el) { el.textContent = state.lang.toUpperCase(); });
    $("#calPrev").setAttribute("aria-label", t("calPrev"));
    $("#calNext").setAttribute("aria-label", t("calNext"));
    $("#roleBtn").setAttribute("aria-label", t("roleSwitch"));
    $("#roleBtn").setAttribute("title", t("roleSwitch"));
    if (state.role) $("#roleBtnLabel").textContent = t(state.role === "coordinator" ? "roleCoordinator" : "roleParticipant");
    document.documentElement.lang = state.lang;
    if (state.bannerKey) {
      $("#connBannerText").textContent = t(state.bannerKey);
    }
  }

  /* ============================================================
     5. NAVIGASJON
     ============================================================ */
  function setView(view) {
    if (state.role !== "coordinator" && view !== "kalender") view = "kalender";
    state.view = view;
    $all(".nav-item").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-view") === view);
    });
    $all(".view").forEach(function (sec) {
      sec.classList.toggle("is-active", sec.id === "view-" + view);
    });
  }

  /* ============================================================
     6. RENDER: OVERSIKT (status)
     ============================================================ */
  function renderStatus() {
    var s = state.status || {};

    if (!state.editingMiniAnne) {
      $("#miniAnneLocation").textContent = s.miniAnneLocation ? s.miniAnneLocation : t("miniAnneNotSet");
      $("#miniAnneMeta").textContent = t("lastUpdated") + ": " + (s.miniAnneUpdatedAt ? formatDateTime(s.miniAnneUpdatedAt) : t("neverRegistered")) + (s.miniAnneUpdatedBy ? " · " + s.miniAnneUpdatedBy : "");
    }

    if (!state.editingDefib) {
      var badge = $("#defibBadge");
      if (typeof s.defibWithBag === "boolean") {
        badge.textContent = s.defibWithBag ? t("defibBadgeYes") : t("defibBadgeNo");
        badge.className = "badge " + (s.defibWithBag ? "badge-ok" : "badge-warn");
      } else {
        badge.textContent = t("dash");
        badge.className = "badge badge-neutral";
      }
      $("#defibMeta").textContent = t("lastUpdated") + ": " + (s.defibUpdatedAt ? formatDateTime(s.defibUpdatedAt) : t("neverRegistered")) + (s.defibUpdatedBy ? " · " + s.defibUpdatedBy : "");
    }
  }

  function enterEditMiniAnne() {
    state.editingMiniAnne = true;
    var input = $("#miniAnneLocationInput");
    input.value = (state.status && state.status.miniAnneLocation) || "";
    input.hidden = false;
    $("#miniAnneLocation").hidden = true;
    var byInput = $("#miniAnneByInput");
    byInput.value = (state.status && state.status.miniAnneUpdatedBy) || "";
    byInput.hidden = false;
    toggleCardButtons("miniAnne", true);
    input.focus();
  }
  function exitEditMiniAnne() {
    state.editingMiniAnne = false;
    $("#miniAnneLocationInput").hidden = true;
    $("#miniAnneByInput").hidden = true;
    $("#miniAnneLocation").hidden = false;
    toggleCardButtons("miniAnne", false);
    renderStatus();
  }
  function enterEditDefib() {
    state.editingDefib = true;
    $("#defibToggle").checked = !!(state.status && state.status.defibWithBag);
    $("#defibByInput").value = (state.status && state.status.defibUpdatedBy) || "";
    $("#defibToggleWrap").hidden = false;
    toggleCardButtons("defib", true);
  }
  function exitEditDefib() {
    state.editingDefib = false;
    $("#defibToggleWrap").hidden = true;
    toggleCardButtons("defib", false);
    renderStatus();
  }
  function toggleCardButtons(key, editing) {
    var card = $("#card-" + key);
    $("[data-edit='" + key + "']", card).hidden = editing;
    $("[data-save='" + key + "']", card).hidden = !editing;
    $("[data-cancel='" + key + "']", card).hidden = !editing;
  }

  function saveMiniAnne() {
    if (!requireDb()) return;
    var value = $("#miniAnneLocationInput").value.trim();
    var by = $("#miniAnneByInput").value.trim();
    statusDocRef()
      .set(
        { miniAnneLocation: value, miniAnneUpdatedAt: firebase.firestore.FieldValue.serverTimestamp(), miniAnneUpdatedBy: by },
        { merge: true }
      )
      .then(function () { exitEditMiniAnne(); toast(t("toastSaved")); })
      .catch(function (err) { console.error(err); toast(t("toastError")); });
  }
  function saveDefib() {
    if (!requireDb()) return;
    var value = $("#defibToggle").checked;
    var by = $("#defibByInput").value.trim();
    statusDocRef()
      .set(
        { defibWithBag: value, defibUpdatedAt: firebase.firestore.FieldValue.serverTimestamp(), defibUpdatedBy: by },
        { merge: true }
      )
      .then(function () { exitEditDefib(); toast(t("toastSaved")); })
      .catch(function (err) { console.error(err); toast(t("toastError")); });
  }

  /* ============================================================
     7. RENDER: GRUPPER
     ============================================================ */
  function renderGroups() {
    var grid = $("#groupsGrid");
    grid.innerHTML = "";
    var groups = state.groups.slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
    groups.forEach(function (g) {
      var card = document.createElement("div");
      card.className = "card group-card";
      card.setAttribute("data-group-id", g.id);
      card.style.setProperty("--gc", groupColor(g));
      card.innerHTML =
        '<div class="group-name"><span class="group-chip">' + esc(groupShortLabel(g)) + "</span>" + esc(g.name) + "</div>" +
        '<div class="group-row"><span class="row-label">' + esc(t("rowLocation")) + '</span><span class="row-value">' + esc(g.location || t("dash")) + "</span></div>" +
        '<div class="group-row"><span class="row-label">' + esc(t("rowDefib")) + '</span><span class="row-value">' + esc(g.defib || t("noDefibInfo")) + "</span></div>";
      card.addEventListener("click", function () { openGroupModal(g.id); });
      grid.appendChild(card);
    });
    renderLogGroupPicker();
  }

  function openGroupModal(id) {
    state.openGroupId = id || null;
    var g = id ? state.groups.find(function (x) { return x.id === id; }) : null;
    $("#groupModalTitle").textContent = id ? t("groupModalTitleEdit") : t("groupModalTitleAdd");
    $("#groupNameInput").value = g ? g.name : "";
    $("#groupShortNameInput").value = g ? (g.shortName || "") : "";
    $("#groupLocationInput").value = g ? g.location : "";
    $("#groupDefibInput").value = g ? g.defib : "";
    $("#deleteGroupBtn").hidden = !id;
    $("#groupModalOverlay").hidden = false;
    $("#groupNameInput").focus();
  }
  function closeGroupModal() { $("#groupModalOverlay").hidden = true; }

  function submitGroupForm(ev) {
    ev.preventDefault();
    if (!requireDb()) return;
    var data = {
      name: $("#groupNameInput").value.trim(),
      shortName: $("#groupShortNameInput").value.trim(),
      location: $("#groupLocationInput").value.trim(),
      defib: $("#groupDefibInput").value.trim(),
    };
    var ref;
    if (state.openGroupId) {
      ref = groupsCol().doc(state.openGroupId);
      var existing = state.groups.find(function (x) { return x.id === state.openGroupId; });
      data.order = existing ? existing.order : Date.now();
      ref.set(data, { merge: true }).then(function () { closeGroupModal(); toast(t("toastSaved")); }).catch(onDbError);
    } else {
      data.order = Date.now();
      groupsCol().add(data).then(function () { closeGroupModal(); toast(t("toastSaved")); }).catch(onDbError);
    }
  }
  function deleteGroup() {
    if (!state.openGroupId || !requireDb()) return;
    if (!confirm(t("confirmDeleteGroup"))) return;
    groupsCol().doc(state.openGroupId).delete()
      .then(function () { closeGroupModal(); toast(t("toastDeleted")); })
      .catch(onDbError);
  }

  /* ============================================================
     8. RENDER: OPPLÆRINGSLOGG
     ============================================================ */
  function renderLog() {
    var body = $("#logTableBody");
    body.innerHTML = "";
    var rows = state.log;
    $("#logEmptyState").hidden = rows.length > 0;
    $(".table-wrap .log-table").hidden = rows.length === 0;

    rows.forEach(function (entry) {
      var tr = document.createElement("tr");
      var matchedGroup = entry.group ? state.groups.find(function (x) { return x.name === entry.group; }) : null;
      var groupCell = matchedGroup
        ? '<span class="group-chip" style="--gc:' + groupColor(matchedGroup) + '">' + esc(groupShortLabel(matchedGroup)) + "</span>" + esc(entry.group)
        : esc(entry.group || t("dash"));
      tr.innerHTML =
        '<td data-label="' + esc(t("colDate")) + '">' + esc(formatDate(entry.date)) + "</td>" +
        '<td data-label="' + esc(t("colGroup")) + '">' + groupCell + "</td>" +
        '<td data-label="' + esc(t("colParticipants")) + '">' + (entry.participants != null ? esc(entry.participants) : t("dash")) + "</td>" +
        '<td data-label="' + esc(t("colCoordinator")) + '">' + esc(entry.coordinator || t("dash")) + "</td>" +
        '<td class="comment-cell" data-label="' + esc(t("colComment")) + '">' + esc(entry.comment || t("dash")) + "</td>" +
        '<td class="row-delete-cell"><button class="row-delete" type="button" aria-label="' + esc(t("delete")) + '">' +
        '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/></svg>' +
        "</button></td>";
      $(".row-delete", tr).addEventListener("click", function () { deleteLogEntry(entry.id); });
      body.appendChild(tr);
    });
  }

  function renderLogGroupPicker() {
    var menu = $("#logGroupPickerMenu");
    if (!menu) return;
    menu.innerHTML = "";
    var groups = state.groups.slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
    if (groups.length === 0) {
      var fallback = document.createElement("input");
      fallback.type = "text";
      fallback.className = "group-picker-fallback-input";
      fallback.setAttribute("data-i18n-placeholder", "fieldGroupOrSection");
      fallback.placeholder = t("fieldGroupOrSection");
      fallback.value = $("#logGroupInput").value || "";
      fallback.addEventListener("input", function () { setLogGroupValue(fallback.value, null); });
      menu.appendChild(fallback);
      return;
    }
    groups.forEach(function (g) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "group-picker-item";
      btn.innerHTML = '<span class="group-chip group-chip-lg" style="--gc:' + groupColor(g) + '">' + esc(groupShortLabel(g)) + "</span><span>" + esc(g.name) + "</span>";
      btn.addEventListener("click", function () {
        setLogGroupValue(g.name, g);
        $("#logGroupPicker").removeAttribute("open");
      });
      menu.appendChild(btn);
    });
  }
  function setLogGroupValue(name, group) {
    $("#logGroupInput").value = name;
    var summary = $("#logGroupPickerSummary");
    if (name) {
      var chipLabel = group ? groupShortLabel(group) : "";
      var chip = chipLabel ? '<span class="group-chip" style="--gc:' + groupColor(group) + '">' + esc(chipLabel) + "</span>" : "";
      summary.innerHTML = chip + "<span>" + esc(name) + "</span>";
    } else {
      summary.innerHTML = '<span class="group-picker-placeholder">' + esc(t("fieldGroupOrSectionPlaceholder")) + "</span>";
    }
  }

  function openLogModal() {
    $("#logForm").reset();
    $("#logDateInput").value = new Date().toISOString().slice(0, 10);
    setLogGroupValue("", null);
    $("#logGroupPicker").removeAttribute("open");
    $("#logModalOverlay").hidden = false;
  }
  function closeLogModal() { $("#logModalOverlay").hidden = true; }

  function submitLogForm(ev) {
    ev.preventDefault();
    if (!requireDb()) return;
    var groupValue = $("#logGroupInput").value.trim();
    if (!groupValue) { $("#logGroupPicker").setAttribute("open", ""); return; }
    var participantsRaw = $("#logParticipantsInput").value;
    var data = {
      date: $("#logDateInput").value,
      group: groupValue,
      participants: participantsRaw === "" ? null : Number(participantsRaw),
      coordinator: $("#logCoordinatorInput").value.trim(),
      comment: $("#logCommentInput").value.trim(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    logCol().add(data).then(function () { closeLogModal(); toast(t("toastSaved")); }).catch(onDbError);
  }
  function deleteLogEntry(id) {
    if (!requireDb()) return;
    if (!confirm(t("confirmDeleteLog"))) return;
    logCol().doc(id).delete().then(function () { toast(t("toastDeleted")); }).catch(onDbError);
  }

  /* ============================================================
     8b. RENDER: MANGLER
     ============================================================ */
  function deficiencyMetaLine(item) {
    var parts = [];
    if (item.createdAt) {
      parts.push(
        esc(t("deficiencyReportedLabel")) + ": " + esc(formatDateTime(item.createdAt)) +
        (item.reportedBy ? " · " + esc(item.reportedBy) : "")
      );
    }
    if (item.resolved && item.resolvedAt) {
      parts.push(esc(t("deficiencyResolvedLabel")) + ": " + esc(formatDateTime(item.resolvedAt)));
    }
    return parts.join(" · ");
  }

  function deficiencyCommentMetaLine(item) {
    if (!item.commentAt && !item.commentBy) return "";
    var text = esc(t("deficiencyCommentLabel"));
    if (item.commentAt) text += ": " + esc(formatDateTime(item.commentAt));
    if (item.commentBy) text += " · " + esc(item.commentBy);
    return text;
  }

  function renderDeficiencies() {
    var list = $("#deficiencyList");
    list.innerHTML = "";
    var items = state.deficiencies.slice().sort(function (a, b) {
      if (!!a.resolved !== !!b.resolved) return a.resolved ? 1 : -1;
      return (b.createdAtMs || 0) - (a.createdAtMs || 0);
    });
    $("#deficiencyEmptyState").hidden = items.length > 0;
    list.hidden = items.length === 0;

    items.forEach(function (item) {
      var row = document.createElement("div");
      row.className = "deficiency-row" + (item.resolved ? " is-resolved" : "");

      var metaLine = deficiencyMetaLine(item);
      var commentMeta = deficiencyCommentMetaLine(item);
      var commentHtml = item.comment
        ? '<div class="deficiency-comment"><div class="deficiency-comment-text">' + esc(item.comment) + "</div>" +
          (commentMeta ? '<div class="deficiency-comment-meta">' + commentMeta + "</div>" : "") +
          "</div>"
        : "";

      row.innerHTML =
        '<div class="deficiency-main">' +
        '<label class="deficiency-check">' +
        '<input type="checkbox" ' + (item.resolved ? "checked " : "") + 'aria-label="' + esc(item.resolved ? t("deficiencyMarkUnresolved") : t("deficiencyMarkResolved")) + '" />' +
        '<span class="check-visual" aria-hidden="true"><svg viewBox="0 0 24 24"><path class="check-path" d="M5 13l4 4L19 7" /></svg></span>' +
        "</label>" +
        '<div class="deficiency-body">' +
        '<span class="deficiency-text">' + esc(item.text) + "</span>" +
        (metaLine ? '<div class="deficiency-meta">' + metaLine + "</div>" : "") +
        commentHtml +
        '<button class="deficiency-comment-btn" type="button">' + esc(item.comment ? t("editDeficiencyComment") : t("addDeficiencyComment")) + "</button>" +
        "</div>" +
        '<button class="row-delete" type="button" aria-label="' + esc(t("delete")) + '">' +
        '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/></svg>' +
        "</button>" +
        "</div>";

      $("input[type=checkbox]", row).addEventListener("change", function (ev) { toggleDeficiencyResolved(item.id, ev.target.checked); });
      $(".row-delete", row).addEventListener("click", function () { deleteDeficiency(item.id); });
      $(".deficiency-comment-btn", row).addEventListener("click", function () { openDeficiencyCommentModal(item); });
      list.appendChild(row);
    });

    updateDeficienciesBadge();
  }

  function updateDeficienciesBadge() {
    var count = state.deficiencies.filter(function (d) { return !d.resolved; }).length;
    var badge = $("#deficienciesBadge");
    badge.textContent = String(count);
    badge.hidden = count === 0;
  }

  function openDeficiencyModal() {
    $("#deficiencyForm").reset();
    $("#deficiencyModalOverlay").hidden = false;
    $("#deficiencyTextInput").focus();
  }
  function closeDeficiencyModal() { $("#deficiencyModalOverlay").hidden = true; }

  function submitDeficiencyForm(ev) {
    ev.preventDefault();
    if (!requireDb()) return;
    var text = $("#deficiencyTextInput").value.trim();
    if (!text) return;
    var by = $("#deficiencyByInput").value.trim();
    deficienciesCol().add({
      text: text,
      reportedBy: by,
      resolved: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(function () { closeDeficiencyModal(); toast(t("toastSaved")); }).catch(onDbError);
  }
  function toggleDeficiencyResolved(id, resolved) {
    if (!requireDb()) return;
    deficienciesCol().doc(id).set(
      { resolved: resolved, resolvedAt: resolved ? firebase.firestore.FieldValue.serverTimestamp() : null },
      { merge: true }
    ).catch(onDbError);
  }
  function deleteDeficiency(id) {
    if (!requireDb()) return;
    if (!confirm(t("confirmDeleteDeficiency"))) return;
    deficienciesCol().doc(id).delete().then(function () { toast(t("toastDeleted")); }).catch(onDbError);
  }

  function openDeficiencyCommentModal(item) {
    state.openDeficiencyCommentId = item.id;
    $("#deficiencyCommentTextInput").value = item.comment || "";
    $("#deficiencyCommentByInput").value = item.commentBy || "";
    $("#removeDeficiencyCommentBtn").hidden = !item.comment;
    $("#deficiencyCommentModalOverlay").hidden = false;
    $("#deficiencyCommentTextInput").focus();
  }
  function closeDeficiencyCommentModal() {
    $("#deficiencyCommentModalOverlay").hidden = true;
    state.openDeficiencyCommentId = null;
  }
  function submitDeficiencyCommentForm(ev) {
    ev.preventDefault();
    if (!requireDb() || !state.openDeficiencyCommentId) return;
    var text = $("#deficiencyCommentTextInput").value.trim();
    var by = $("#deficiencyCommentByInput").value.trim();
    deficienciesCol().doc(state.openDeficiencyCommentId).set(
      { comment: text, commentBy: by, commentAt: text ? firebase.firestore.FieldValue.serverTimestamp() : null },
      { merge: true }
    ).then(function () { closeDeficiencyCommentModal(); toast(t("toastSaved")); }).catch(onDbError);
  }
  function removeDeficiencyComment() {
    if (!requireDb() || !state.openDeficiencyCommentId) return;
    deficienciesCol().doc(state.openDeficiencyCommentId).set(
      { comment: "", commentBy: "", commentAt: null },
      { merge: true }
    ).then(function () { closeDeficiencyCommentModal(); toast(t("toastDeleted")); }).catch(onDbError);
  }

  /* ============================================================
     9. RENDER: GUIDE
     ============================================================ */
  function currentGuideSections() {
    if (state.guideSections && state.guideSections.length) return state.guideSections;
    return GUIDE_SEED.map(function (sec) { return Object.assign({ enNeedsReview: false }, sec); });
  }

  function guideMetaText(sec, isEn) {
    var at = isEn ? sec.enUpdatedAt : sec.updatedAt;
    var by = isEn ? sec.enUpdatedBy : sec.updatedBy;
    if (!at) return "";
    return t("lastUpdated") + ": " + formatDateTime(at) + (by ? " · " + by : "");
  }

  function renderGuide() {
    var acc = $("#guideAccordion");
    var openIndex = $all(".accordion-item", acc).findIndex(function (el) { return el.classList.contains("is-open"); });
    acc.innerHTML = "";
    var sections = currentGuideSections();
    var isEn = state.lang === "en";

    sections.forEach(function (sec, i) {
      var isEditing = state.editingGuideId === sec.id;
      var isOpen = isEditing || (!state.editingGuideId && i === (openIndex === -1 ? 0 : openIndex));
      var item = document.createElement("div");
      item.className = "accordion-item" + (isOpen ? " is-open" : "");
      item.setAttribute("data-guide-id", sec.id);

      if (isEditing) {
        var editTitle = isEn ? (sec.titleEn || sec.title) : sec.title;
        var editHtml = isEn ? (sec.htmlEn || sec.html) : sec.html;
        var editBy = isEn ? sec.enUpdatedBy : sec.updatedBy;
        item.innerHTML =
          '<div class="guide-editor">' +
          '<input class="edit-field guide-title-input" type="text" />' +
          '<div class="guide-toolbar">' +
          '<button type="button" class="guide-tb-btn" data-cmd="bold" title="' + esc(t("guideBold")) + '"><b>B</b></button>' +
          '<button type="button" class="guide-tb-btn" data-cmd="italic" title="' + esc(t("guideItalic")) + '"><i>I</i></button>' +
          '<button type="button" class="guide-tb-btn" data-cmd="insertUnorderedList" title="' + esc(t("guideBulletList")) + '">☰</button>' +
          '<button type="button" class="guide-tb-btn" data-cmd="insertOrderedList" title="' + esc(t("guideNumberList")) + '">1.</button>' +
          '<button type="button" class="guide-tb-btn" data-cmd="link" title="' + esc(t("guideLink")) + '">🔗</button>' +
          '<button type="button" class="guide-tb-btn" data-cmd="unlink" title="' + esc(t("guideUnlink")) + '">🔗╱</button>' +
          '<button type="button" class="guide-tb-btn" data-cmd="removeFormat" title="' + esc(t("guideClearFormat")) + '">✕</button>' +
          "</div>" +
          '<div class="guide-body-editable" contenteditable="true">' + sanitizeGuideHtml(editHtml) + "</div>" +
          '<input class="edit-field guide-by-input" type="text" placeholder="' + esc(t("fieldYourName")) + '" />' +
          '<div class="card-actions">' +
          '<button type="button" class="btn btn-primary guide-save-btn">' + esc(t("save")) + "</button>" +
          '<button type="button" class="btn btn-ghost guide-cancel-btn">' + esc(t("cancel")) + "</button>" +
          "</div>" +
          "</div>";

        $(".guide-title-input", item).value = editTitle;
        $(".guide-by-input", item).value = editBy || "";

        var toolbar = $(".guide-toolbar", item);
        toolbar.addEventListener("mousedown", function (ev) { ev.preventDefault(); });
        toolbar.addEventListener("click", function (ev) {
          var btn = ev.target.closest(".guide-tb-btn");
          if (!btn) return;
          var cmd = btn.getAttribute("data-cmd");
          if (cmd === "link") {
            var sel0 = window.getSelection();
            var range0 = sel0 && sel0.rangeCount ? sel0.getRangeAt(0).cloneRange() : null;
            var url = window.prompt(t("guideLinkPrompt"), "https://");
            if (url) {
              if (range0) { sel0.removeAllRanges(); sel0.addRange(range0); }
              document.execCommand("createLink", false, url);
            }
          } else {
            document.execCommand(cmd, false, null);
          }
        });
        $(".guide-save-btn", item).addEventListener("click", function () { saveGuideSection(sec, item); });
        $(".guide-cancel-btn", item).addEventListener("click", function () { state.editingGuideId = null; renderGuide(); });
      } else {
        var title = isEn ? (sec.titleEn || sec.title) : sec.title;
        var bodyHtml = isEn ? (sec.htmlEn || sec.html) : sec.html;
        var meta = guideMetaText(sec, isEn);
        item.innerHTML =
          '<div class="accordion-head">' +
          '<button class="accordion-trigger" type="button" aria-expanded="' + (isOpen ? "true" : "false") + '">' +
          "<span>" + esc(title) + "</span>" +
          '<svg class="chevron" viewBox="0 0 24 24" width="18" height="18"><polyline points="6 9 12 15 18 9"/></svg>' +
          "</button>" +
          '<button class="accordion-edit-btn" type="button" aria-label="' + esc(t("edit")) + '">' +
          '<svg viewBox="0 0 24 24" width="15" height="15"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><line x1="13.5" y1="6.5" x2="17.5" y2="10.5"/></svg>' +
          "</button>" +
          "</div>" +
          '<div class="accordion-panel"><div class="accordion-body">' +
          (isEn && sec.enNeedsReview ? '<p class="guide-review-note">' + esc(t("guideNeedsTranslation")) + "</p>" : "") +
          sanitizeGuideHtml(bodyHtml) +
          (meta ? '<p class="guide-meta">' + esc(meta) + "</p>" : "") +
          "</div></div>";

        var trigger = $(".accordion-trigger", item);
        trigger.addEventListener("click", function () {
          var isOpenNow = item.classList.contains("is-open");
          $all(".accordion-item", acc).forEach(function (el) { el.classList.remove("is-open"); var tr = $(".accordion-trigger", el); if (tr) tr.setAttribute("aria-expanded", "false"); });
          if (!isOpenNow) { item.classList.add("is-open"); trigger.setAttribute("aria-expanded", "true"); }
        });
        $(".accordion-edit-btn", item).addEventListener("click", function (ev) {
          ev.stopPropagation();
          state.editingGuideId = sec.id;
          renderGuide();
        });
      }

      acc.appendChild(item);
    });
  }

  function saveGuideSection(sec) {
    if (!requireDb()) return;
    var item = $('.accordion-item[data-guide-id="' + sec.id + '"]');
    if (!item) return;
    var isEn = state.lang === "en";
    var title = $(".guide-title-input", item).value.trim();
    var html = sanitizeGuideHtml($(".guide-body-editable", item).innerHTML);
    var by = $(".guide-by-input", item).value.trim();
    if (!title || !html) { toast(t("toastError")); return; }

    var data = {};
    if (isEn) {
      data.titleEn = title;
      data.htmlEn = html;
      data.enUpdatedBy = by;
      data.enUpdatedAt = firebase.firestore.FieldValue.serverTimestamp();
      data.enNeedsReview = false;
    } else {
      data.title = title;
      data.html = html;
      data.updatedBy = by;
      data.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
      data.enNeedsReview = true;
    }

    guideCol().doc(sec.id).set(data, { merge: true })
      .then(function () {
        return guideChangelogCol().add({
          sectionTitle: title,
          lang: isEn ? "en" : "no",
          by: by,
          at: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .then(function () {
        state.editingGuideId = null;
        renderGuide();
        toast(t("toastSaved"));
      })
      .catch(onDbError);
  }

  function renderGuideChangelog() {
    var list = $("#guideChangelogList");
    if (!list) return;
    if (!state.guideChangelog.length) {
      list.innerHTML = '<p class="changelog-empty">' + esc(t("guideChangelogEmpty")) + "</p>";
      return;
    }
    list.innerHTML = state.guideChangelog.map(function (entry) {
      var langLabel = entry.lang === "en" ? "EN" : "NO";
      return '<div class="changelog-row">' +
        esc(entry.at ? formatDateTime(entry.at) : t("dash")) +
        " – " + esc(entry.sectionTitle) + " (" + langLabel + ")" +
        (entry.by ? " · " + esc(entry.by) : "") +
        "</div>";
    }).join("");
  }

  /* ============================================================
     9b. INNLOGGING (deltaker / koordinator)
     ============================================================ */
  // OBS: Dette er en enkel «dørvakt», ikke ekte sikkerhet. Passordet sjekkes
  // i nettleseren, så alle som kan lese koden i siden kan finne det.
  var COORDINATOR_PASSWORD = "FAR";

  function isCoordinator() { return state.role === "coordinator"; }

  function readStoredRole() {
    try {
      var r = sessionStorage.getItem("hlrRole");
      return r === "coordinator" || r === "participant" ? r : null;
    } catch (e) { return null; }
  }
  function storeRole(role) {
    try {
      if (role) sessionStorage.setItem("hlrRole", role);
      else sessionStorage.removeItem("hlrRole");
    } catch (e) { /* privat modus e.l. – da må man bare velge rolle på nytt */ }
  }

  function showLoginStep(step) {
    var choose = step === "choose";
    $("#loginChoose").hidden = !choose;
    $("#loginForm").hidden = choose;
    $("#loginError").hidden = true;
    if (choose) {
      $("[data-role-choice]").focus();
    } else {
      $("#loginPassword").value = "";
      $("#loginPassword").focus();
    }
  }

  function showLogin() {
    state.role = null;
    document.body.removeAttribute("data-role");
    $("#roleBtn").hidden = true;
    $("#loginOverlay").hidden = false;
    showLoginStep("choose");
  }

  function applyRole(role) {
    state.role = role;
    storeRole(role);
    document.body.setAttribute("data-role", role);
    $("#loginOverlay").hidden = true;
    $("#roleBtn").hidden = false;
    setView(role === "coordinator" ? state.view : "kalender");
    renderAll();
    startCoordinatorSubscriptions();
    window.scrollTo(0, 0);
  }

  function chooseRole(role) {
    if (role === "coordinator") { showLoginStep("password"); return; }
    applyRole("participant");
  }

  function submitLogin(ev) {
    ev.preventDefault();
    var input = $("#loginPassword");
    if (input.value.trim() === COORDINATOR_PASSWORD) {
      applyRole("coordinator");
      return;
    }
    $("#loginError").hidden = false;
    var box = $("#loginForm");
    box.classList.remove("is-shake");
    void box.offsetWidth; // start animasjonen på nytt
    box.classList.add("is-shake");
    input.select();
  }

  // Å bytte rolle laster siden på nytt, så ingenting fra koordinator-visningen blir hengende igjen.
  function switchRole() {
    storeRole(null);
    location.reload();
  }

  /* ============================================================
     9c. KALENDER / PÅMELDING
     ============================================================ */
  var CAL_START_MIN = 8 * 60;
  var CAL_END_MIN = 16 * 60;
  var CAL_STEP = 30;
  var CAL_ROWS = (CAL_END_MIN - CAL_START_MIN) / CAL_STEP;
  var CAL_DAYS = 5; // mandag–fredag

  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function toISODate(d) { return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
  function parseISODate(str) {
    var p = String(str).split("-");
    return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function mondayOf(d) { return addDays(d, -((d.getDay() + 6) % 7)); }
  function isoWeekNumber(d) {
    var date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    var dayNum = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    return Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  }
  function minToTime(min) { return pad2(Math.floor(min / 60)) + ":" + pad2(min % 60); }
  function timeToMin(str) {
    var p = String(str || "").split(":");
    return Number(p[0]) * 60 + Number(p[1] || 0);
  }
  function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

  function sessionStartMin(s) { return timeToMin(s.start); }
  function sessionEndMin(s) { return sessionStartMin(s) + (s.halfHours || 1) * CAL_STEP; }
  function sessionStartDate(s) {
    var d = parseISODate(s.date);
    d.setMinutes(sessionStartMin(s));
    return d;
  }
  function sessionEndDate(s) {
    var d = parseISODate(s.date);
    d.setMinutes(sessionEndMin(s));
    return d;
  }
  function sessionIsPast(s) { return sessionEndDate(s).getTime() <= Date.now(); }
  function sessionCount(s) { return s.registeredCount || 0; }
  function sessionSpotsLeft(s) { return Math.max(0, (s.capacity || 0) - sessionCount(s)); }
  function sessionStatus(s) {
    if (sessionIsPast(s)) return "past";
    if (sessionSpotsLeft(s) <= 0) return "full";
    if (sessionCount(s) / s.capacity >= 0.75) return "filling";
    return "open";
  }
  function sessionTimeRange(s) { return s.start + "–" + minToTime(sessionEndMin(s)); }
  function findSession(id) { return state.sessions.find(function (x) { return x.id === id; }) || null; }

  function weekdayShort(d) {
    return capitalize(new Intl.DateTimeFormat(locale(), { weekday: "short" }).format(d).replace(".", ""));
  }
  function longDateLabel(iso) {
    return capitalize(new Intl.DateTimeFormat(locale(), { weekday: "long", day: "numeric", month: "long" }).format(parseISODate(iso)));
  }
  function sessionWhenLabel(s) { return longDateLabel(s.date) + ", " + sessionTimeRange(s); }
  function lengthLabel(halfHours) {
    if (halfHours === 1) return t("lengthMinutes");
    var h = halfHours / 2;
    if (h === 1) return t("lengthHour");
    return t("lengthHours", { n: String(h).replace(".", state.lang === "en" ? "." : ",") });
  }
  function spotsLeftLabel(s) {
    var left = sessionSpotsLeft(s);
    return left === 1 ? t("calSpotsLeftOne") : t("calSpotsLeft", { n: left });
  }

  function ensureCalWeek() {
    if (state.calWeekStart) return;
    var now = new Date();
    var weekend = now.getDay() === 0 || now.getDay() === 6;
    state.calWeekStart = toISODate(weekend ? addDays(mondayOf(now), 7) : mondayOf(now));
    state.calDayIdx = weekend ? 0 : now.getDay() - 1;
  }
  function shiftWeek(n) {
    ensureCalWeek();
    state.calWeekStart = toISODate(addDays(parseISODate(state.calWeekStart), n * 7));
    state.calAnimate = true;
    renderCalendar();
  }
  function goToToday() {
    state.calWeekStart = null;
    ensureCalWeek();
    state.calAnimate = true;
    renderCalendar();
  }
  function goToDate(iso) {
    var d = parseISODate(iso);
    state.calWeekStart = toISODate(mondayOf(d));
    state.calDayIdx = Math.min(CAL_DAYS - 1, (d.getDay() + 6) % 7);
    state.calAnimate = true;
    renderCalendar();
  }

  // Plasserer økter som overlapper side om side («baner»), som i Google Kalender.
  function layoutDay(list) {
    var items = list.slice().sort(function (a, b) {
      return sessionStartMin(a) - sessionStartMin(b) || sessionEndMin(b) - sessionEndMin(a);
    });
    var placed = [];
    var cluster = [];
    var clusterEnd = -1;
    var laneEnds = [];
    function flush() {
      cluster.forEach(function (p) { p.lanes = laneEnds.length; });
      placed = placed.concat(cluster);
      cluster = [];
      laneEnds = [];
      clusterEnd = -1;
    }
    items.forEach(function (s) {
      var start = sessionStartMin(s);
      var end = sessionEndMin(s);
      if (cluster.length && start >= clusterEnd) flush();
      var lane = 0;
      while (lane < laneEnds.length && laneEnds[lane] > start) lane++;
      laneEnds[lane] = end;
      cluster.push({ s: s, lane: lane, lanes: 1 });
      clusterEnd = Math.max(clusterEnd, end);
    });
    flush();
    return placed;
  }

  function nextAvailableSession() {
    return state.sessions
      .filter(function (s) { return !sessionIsPast(s) && sessionSpotsLeft(s) > 0; })
      .sort(function (a, b) { return (a.date + a.start) < (b.date + b.start) ? -1 : 1; })[0] || null;
  }

  function renderCalendar() {
    ensureCalWeek();
    var coordinator = isCoordinator();
    var cal = $("#cal");
    var weekStart = parseISODate(state.calWeekStart);
    var days = [];
    for (var i = 0; i < CAL_DAYS; i++) days.push(addDays(weekStart, i));
    var todayISO = toISODate(new Date());
    var nowDate = new Date();
    var nowMin = nowDate.getHours() * 60 + nowDate.getMinutes();

    var byDate = {};
    state.sessions.forEach(function (s) { (byDate[s.date] = byDate[s.date] || []).push(s); });

    // Toppseksjon: tittel, uke, knapper
    $("#calDesc").textContent = t(coordinator ? "calDescCoordinator" : "calDescParticipant");
    $("#addSessionBtn").hidden = !coordinator;
    var dayFmt = new Intl.DateTimeFormat(locale(), { day: "numeric", month: "short" });
    $("#calWeekLabel").textContent =
      t("calWeek") + " " + isoWeekNumber(weekStart) + " · " + dayFmt.format(days[0]) + " – " + dayFmt.format(days[CAL_DAYS - 1]) + " " + days[CAL_DAYS - 1].getFullYear();

    // Hodet (ukedager). På mobil fungerer dette som faner for én dag om gangen.
    var html = '<div class="cal-head"><div class="cal-gutter-head"></div>';
    days.forEach(function (d, idx) {
      var iso = toISODate(d);
      html +=
        '<button type="button" class="cal-dayhead' + (iso === todayISO ? " is-today" : "") + (idx === state.calDayIdx ? " is-selected" : "") + (byDate[iso] ? " has-sessions" : "") + '" data-day="' + idx + '">' +
        '<span class="cal-dow">' + esc(weekdayShort(d)) + '</span><span class="cal-dom">' + d.getDate() + "</span></button>";
    });
    html += "</div>";

    // Kroppen
    html += '<div class="cal-body"><div class="cal-gutter" aria-hidden="true">';
    for (var h = CAL_START_MIN; h <= CAL_END_MIN; h += 60) {
      html += '<span style="top:' + ((h - CAL_START_MIN) / (CAL_END_MIN - CAL_START_MIN) * 100) + '%">' + minToTime(h) + "</span>";
    }
    html += "</div>";

    var weekCount = 0;
    days.forEach(function (d, idx) {
      var iso = toISODate(d);
      html += '<div class="cal-col' + (iso === todayISO ? " is-today" : "") + (idx === state.calDayIdx ? " is-selected" : "") + (coordinator ? " is-editable" : "") + '" data-date="' + iso + '">';
      layoutDay(byDate[iso] || []).forEach(function (p, n) {
        weekCount++;
        var s = p.s;
        var status = sessionStatus(s);
        var count = sessionCount(s);
        var pct = s.capacity ? Math.min(100, Math.round(count / s.capacity * 100)) : 0;
        var top = (sessionStartMin(s) - CAL_START_MIN) / (CAL_END_MIN - CAL_START_MIN) * 100;
        var height = (s.halfHours || 1) * CAL_STEP / (CAL_END_MIN - CAL_START_MIN) * 100;
        var laneW = 100 / p.lanes;
        var countText = count + "/" + s.capacity;
        var label = status === "full" ? t("calFull") + " · " + countText : t("calRegisteredShort", { n: count, max: s.capacity });
        var short = (s.halfHours || 1) === 1;
        var narrow = p.lanes > 1; // overlappende økter deler plassen – da vises kun det viktigste
        var requests = coordinator ? (s.cancelRequestCount || 0) : 0;
        var room = (s.room || "").trim();
        var aria = longDateLabel(s.date) + ", " + sessionTimeRange(s) + (room ? ", " + t("signupRoomLabel") + " " + room : "") + ", " + t("calRegisteredOf", { n: count, max: s.capacity }) +
          (requests ? ", " + t("calCancelRequests", { n: requests }) : "");
        if (narrow) label = status === "full" ? t("calFull") : countText;
        html +=
          '<button type="button" class="cal-block is-' + status + (short ? " is-short" : "") + (narrow ? " is-narrow" : "") + (room ? " has-room" : "") + '" data-id="' + esc(s.id) + '" aria-label="' + esc(aria) + '" title="' + esc(aria) + '" ' +
          'style="top:' + top + "%;height:" + height + "%;left:calc(" + (p.lane * laneW) + "% + 2px);width:calc(" + laneW + "% - 4px);--i:" + n + '">' +
          '<span class="cal-block-time">' + esc(short ? s.start + " · " + countText : narrow ? s.start : sessionTimeRange(s)) + "</span>" +
          (room ? '<span class="cal-block-room">📍 ' + esc(room) + "</span>" : "") +
          (short ? "" : '<span class="cal-block-count">' + esc(label) + "</span>" + '<span class="cal-bar"><i style="width:' + pct + '%"></i></span>') +
          (requests ? '<span class="cal-badge" aria-hidden="true">' + requests + "</span>" : "") +
          "</button>";
      });
      if (iso === todayISO && nowMin >= CAL_START_MIN && nowMin <= CAL_END_MIN) {
        html += '<div class="cal-now" style="top:' + ((nowMin - CAL_START_MIN) / (CAL_END_MIN - CAL_START_MIN) * 100) + '%"></div>';
      }
      if (coordinator) html += '<div class="cal-ghost"><span>+</span></div>';
      html += "</div>";
    });
    html += "</div>";

    var totalRequests = coordinator ? state.sessions.reduce(function (sum, x) { return sum + (x.cancelRequestCount || 0); }, 0) : 0;
    var navBadge = $("#requestsBadge");
    navBadge.textContent = String(totalRequests);
    navBadge.hidden = totalRequests === 0;

    cal.classList.toggle("is-animate", state.calAnimate);
    state.calAnimate = false;
    cal.innerHTML = html;

    var hint = $("#calEmptyHint");
    hint.hidden = weekCount > 0;
    hint.textContent = t(coordinator ? "calEmptyWeekCoordinator" : "calEmptyWeekParticipant");

    var chip = $("#calNextAvailable");
    var next = coordinator ? null : nextAvailableSession();
    chip.hidden = !next;
    if (next) {
      chip.innerHTML = '<span class="cal-next-dot" aria-hidden="true"></span><span><strong>' + esc(t("calNextAvailable")) + ":</strong> " +
        esc(weekdayShort(parseISODate(next.date)) + " " + dayFmt.format(parseISODate(next.date)) + ", " + sessionTimeRange(next) + " · " + spotsLeftLabel(next)) + "</span>";
      chip.setAttribute("data-date", next.date);
    }
  }

  function calSlotFromEvent(col, ev) {
    var rect = col.getBoundingClientRect();
    var slot = Math.floor((ev.clientY - rect.top) / (rect.height / CAL_ROWS));
    return Math.max(0, Math.min(CAL_ROWS - 1, slot));
  }

  function bindCalendarEvents() {
    var cal = $("#cal");
    cal.addEventListener("click", function (ev) {
      var dayBtn = ev.target.closest(".cal-dayhead");
      if (dayBtn) {
        state.calDayIdx = Number(dayBtn.getAttribute("data-day"));
        renderCalendar();
        return;
      }
      var block = ev.target.closest(".cal-block");
      if (block) {
        var id = block.getAttribute("data-id");
        if (isCoordinator()) openSessionModal(id, null); else openSignupModal(id);
        return;
      }
      var col = ev.target.closest(".cal-col");
      if (col && isCoordinator()) {
        var slot = calSlotFromEvent(col, ev);
        openSessionModal(null, { date: col.getAttribute("data-date"), start: minToTime(CAL_START_MIN + slot * CAL_STEP) });
      }
    });

    function hideGhosts() {
      $all(".cal-ghost.is-visible", cal).forEach(function (g) { g.classList.remove("is-visible"); });
    }
    cal.addEventListener("mousemove", function (ev) {
      if (!isCoordinator()) return;
      hideGhosts();
      if (ev.target.closest(".cal-block")) return;
      var col = ev.target.closest(".cal-col");
      if (!col) return;
      var ghost = $(".cal-ghost", col);
      if (!ghost) return;
      ghost.style.top = (calSlotFromEvent(col, ev) / CAL_ROWS * 100) + "%";
      ghost.classList.add("is-visible");
    });
    cal.addEventListener("mouseleave", hideGhosts);

    $("#calPrev").addEventListener("click", function () { shiftWeek(-1); });
    $("#calNext").addEventListener("click", function () { shiftWeek(1); });
    $("#calToday").addEventListener("click", goToToday);
    $("#calNextAvailable").addEventListener("click", function (ev) {
      var iso = ev.currentTarget.getAttribute("data-date");
      if (iso) goToDate(iso);
    });

    // Holder «nå»-streken og «passert»-status oppdatert
    setInterval(function () {
      if (state.role && state.view === "kalender") renderCalendar();
    }, 60000);
  }

  /* ---------- Deltaker: påmeldingsvindu ---------- */
  function openSignupModal(id) {
    if (!findSession(id)) return;
    state.openSignupId = id;
    $("#signupForm").reset();
    $("#signupForm").hidden = false;
    $("#signupDone").hidden = true;
    $("#signupError").hidden = true;
    $("#signupSubmitBtn").disabled = false;
    state.signupDoneSession = null;
    $("#cancelForm").reset();
    $("#cancelForm").hidden = true;
    $("#cancelError").hidden = true;
    $("#cancelSent").hidden = true;
    $("#cancelToggleBtn").hidden = false;
    $("#signupModalOverlay").hidden = false;
    updateSignupModal();
    if (!$("#signupNameInput").disabled) $("#signupNameInput").focus();
  }
  function closeSignupModal() {
    state.openSignupId = null;
    $("#signupModalOverlay").hidden = true;
  }

  function updateSignupModal() {
    var s = findSession(state.openSignupId);
    if (!s) { closeSignupModal(); return; }
    var status = sessionStatus(s);
    var count = sessionCount(s);
    var pct = s.capacity ? Math.min(100, Math.round(count / s.capacity * 100)) : 0;

    $("#signupWhen").textContent = sessionWhenLabel(s);
    var room = (s.room || "").trim();
    $("#signupRoom").hidden = !room;
    $("#signupRoomName").textContent = room;
    $("#signupCapacityText").textContent =
      t("calRegisteredOf", { n: count, max: s.capacity }) + (status === "full" ? " · " + t("calFull") : status === "past" ? "" : " · " + spotsLeftLabel(s));
    var cap = $(".signup-capacity");
    cap.className = "signup-capacity is-" + status;
    $("#signupBarFill").style.width = pct + "%";

    var note = (s.participantNote || "").trim();
    $("#signupNote").hidden = !note;
    $("#signupNoteText").textContent = note;

    var closedMsg = status === "past" ? t("signupClosedPast") : status === "full" ? t("signupClosedFull") : "";
    var closed = $("#signupClosed");
    closed.hidden = !closedMsg;
    closed.textContent = closedMsg;
    $("#signupNameInput").disabled = !!closedMsg;
    $("#signupEmailInput").disabled = !!closedMsg;
    $("#signupSubmitBtn").hidden = !!closedMsg;
    // Avmeldingsforespørsel kan sendes også når økten er full, men ikke etter at den er over.
    $("#cancelSection").hidden = status === "past" || !$("#signupDone").hidden;
  }

  function showSignupError(msg) {
    var el = $("#signupError");
    el.textContent = msg;
    el.hidden = false;
  }

  function emailKey(email) { return email.trim().toLowerCase().replace(/\//g, "%2F"); }

  // Transaksjon: sjekker plass og dobbeltpåmelding og øker telleren i ett steg,
  // slik at to personer ikke kan ta den siste plassen samtidig.
  function registerForSession(sessionId, name, email) {
    var sRef = sessionsCol().doc(sessionId);
    var rRef = registrationsCol(sessionId).doc(emailKey(email));
    return state.db.runTransaction(function (tx) {
      return tx.get(sRef).then(function (sSnap) {
        if (!sSnap.exists) throw new Error("session-gone");
        var s = sSnap.data();
        s.id = sessionId;
        if (sessionIsPast(s)) throw new Error("session-past");
        var count = s.registeredCount || 0;
        if (count >= s.capacity) throw new Error("full");
        return tx.get(rRef).then(function (rSnap) {
          if (rSnap.exists) throw new Error("duplicate");
          tx.set(rRef, { name: name, email: email, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
          tx.update(sRef, { registeredCount: count + 1 });
        });
      });
    });
  }

  function submitSignupForm(ev) {
    ev.preventDefault();
    if (!requireDb()) return;
    var s = findSession(state.openSignupId);
    if (!s) return;
    var name = $("#signupNameInput").value.trim().replace(/\s+/g, " ");
    var email = $("#signupEmailInput").value.trim();
    if (name.length < 3 || name.indexOf(" ") === -1) { showSignupError(t("signupErrName")); $("#signupNameInput").focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showSignupError(t("signupErrEmail")); $("#signupEmailInput").focus(); return; }

    $("#signupError").hidden = true;
    $("#signupSubmitBtn").disabled = true;
    registerForSession(s.id, name, email)
      .then(function () {
        $("#signupForm").hidden = true;
        $("#signupDone").hidden = false;
        $("#signupDoneText").textContent = t("signupDoneText", { when: sessionWhenLabel(s) });
        state.signupDoneSession = { session: s, name: name };
        var doneRoom = (s.room || "").trim();
        $("#signupDoneRoom").hidden = !doneRoom;
        $("#signupDoneRoomName").textContent = doneRoom;
        $("#outlookWebLink").href = outlookWebUrl(s, name);
        updateSignupModal();
      })
      .catch(function (err) {
        var map = {
          "full": "signupErrFull",
          "duplicate": "signupErrDuplicate",
          "session-past": "signupErrPast",
          "session-gone": "signupErrGone",
        };
        var key = err && map[err.message];
        if (!key) console.error(err);
        showSignupError(t(key || "toastError"));
      })
      .then(function () { $("#signupSubmitBtn").disabled = false; });
  }

  /* ---------- Kalenderfil (.ics) og Outlook på nett ---------- */
  // .ics er en ren tekstfil (ikke et program). Tidene skrives i UTC, som Outlook alltid forstår riktig.
  function icsUtc(d) {
    return d.getUTCFullYear() + pad2(d.getUTCMonth() + 1) + pad2(d.getUTCDate()) + "T" + pad2(d.getUTCHours()) + pad2(d.getUTCMinutes()) + "00Z";
  }
  function icsEscape(str) {
    return String(str).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
  }
  // Linjer i .ics skal være maks 75 byte; lengre linjer brytes med et mellomrom først på neste linje.
  function icsFold(line) {
    var enc = new TextEncoder();
    var out = [];
    var cur = "";
    var bytes = 0;
    Array.from(line).forEach(function (ch) {
      var b = enc.encode(ch).length;
      if (bytes + b > 75) { out.push(cur); cur = " "; bytes = 1; }
      cur += ch;
      bytes += b;
    });
    out.push(cur);
    return out.join("\r\n");
  }
  function sessionDescription(s, name) {
    var parts = [];
    if ((s.participantNote || "").trim()) parts.push(s.participantNote.trim());
    if (name) parts.push(t("icsSignedUpAs", { name: name }));
    return parts.join("\n\n");
  }
  function buildIcs(s, name) {
    var lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//HLR i FAR//NO",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:" + s.id + "-" + Date.now() + "@hlr-far",
      "DTSTAMP:" + icsUtc(new Date()),
      "DTSTART:" + icsUtc(sessionStartDate(s)),
      "DTEND:" + icsUtc(sessionEndDate(s)),
      "SUMMARY:" + icsEscape(t("icsSummary")),
      "DESCRIPTION:" + icsEscape(sessionDescription(s, name)),
    ].concat((s.room || "").trim() ? ["LOCATION:" + icsEscape(s.room.trim())] : [], [
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      "DESCRIPTION:" + icsEscape(t("icsReminder")),
      "TRIGGER:-P1D",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ]);
    return lines.map(icsFold).join("\r\n") + "\r\n";
  }
  function downloadIcs() {
    var done = state.signupDoneSession;
    if (!done) return;
    var blob = new Blob([buildIcs(done.session, done.name)], { type: "text/calendar;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "HLR-opplaering-" + done.session.date + ".ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }
  // Lenke som åpner et ferdig utfylt kalenderutkast i Outlook på nett – ingen nedlasting.
  function outlookWebUrl(s, name) {
    function iso(d) { return d.toISOString().replace(/\.\d{3}Z$/, "Z"); }
    return "https://outlook.office.com/calendar/0/deeplink/compose?path=" + encodeURIComponent("/calendar/action/compose") +
      "&rru=addevent" +
      "&subject=" + encodeURIComponent(t("icsSummary")) +
      "&body=" + encodeURIComponent(sessionDescription(s, name)) +
      ((s.room || "").trim() ? "&location=" + encodeURIComponent(s.room.trim()) : "") +
      "&startdt=" + encodeURIComponent(iso(sessionStartDate(s))) +
      "&enddt=" + encodeURIComponent(iso(sessionEndDate(s)));
  }

  // Deltakere kan ikke melde noen av direkte. De sender en forespørsel med begrunnelse,
  // og en koordinator godkjenner eller avslår den.
  function requestCancellation(sessionId, email, reason) {
    var key = emailKey(email);
    var sRef = sessionsCol().doc(sessionId);
    var rRef = registrationsCol(sessionId).doc(key);
    var qRef = cancelRequestsCol(sessionId).doc(key);
    return state.db.runTransaction(function (tx) {
      return tx.get(sRef).then(function (sSnap) {
        if (!sSnap.exists) throw new Error("session-gone");
        var s = sSnap.data();
        s.id = sessionId;
        if (sessionIsPast(s)) throw new Error("session-past");
        return tx.get(rRef).then(function (rSnap) {
          if (!rSnap.exists) throw new Error("not-registered");
          return tx.get(qRef).then(function (qSnap) {
            if (qSnap.exists) throw new Error("request-duplicate");
            var r = rSnap.data();
            tx.set(qRef, { name: r.name || "", email: r.email || email, reason: reason, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
            tx.update(sRef, { cancelRequestCount: (s.cancelRequestCount || 0) + 1 });
          });
        });
      });
    });
  }

  function showCancelError(msg) {
    var el = $("#cancelError");
    el.textContent = msg;
    el.hidden = false;
  }

  function submitCancelForm(ev) {
    ev.preventDefault();
    if (!requireDb() || !state.openSignupId) return;
    var email = $("#cancelEmailInput").value.trim();
    var reason = $("#cancelReasonInput").value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showCancelError(t("signupErrEmail")); $("#cancelEmailInput").focus(); return; }
    if (!reason) { showCancelError(t("cancelErrReason")); $("#cancelReasonInput").focus(); return; }

    $("#cancelError").hidden = true;
    $("#cancelSubmitBtn").disabled = true;
    requestCancellation(state.openSignupId, email, reason)
      .then(function () {
        $("#cancelForm").hidden = true;
        $("#cancelSent").hidden = false;
      })
      .catch(function (err) {
        var map = {
          "not-registered": "cancelErrNotRegistered",
          "request-duplicate": "cancelErrDuplicate",
          "session-past": "signupErrPast",
          "session-gone": "signupErrGone",
        };
        var key = err && map[err.message];
        if (!key) console.error(err);
        showCancelError(t(key || "toastError"));
      })
      .then(function () { $("#cancelSubmitBtn").disabled = false; });
  }

  /* ---------- Koordinator: opprett / rediger økt ---------- */
  /* ---------- Koordinator: lagrede rom ---------- */
  function roomIsSaved(name) {
    var key = name.trim().toLowerCase();
    return !!key && state.rooms.some(function (r) { return r.name.toLowerCase() === key; });
  }
  function updateRememberRoomBtn() {
    var value = $("#sessionRoomInput").value.trim();
    var saved = roomIsSaved(value);
    $("#rememberRoomBtn").disabled = !value || saved;
    $("#rememberRoomLabel").textContent = t(saved ? "roomRemembered" : "rememberRoom");
  }
  function renderSavedRooms() {
    var box = $("#savedRooms");
    box.innerHTML = "";
    $("#savedRoomsEmpty").hidden = state.rooms.length > 0;
    state.rooms.forEach(function (r) {
      var chip = document.createElement("span");
      chip.className = "room-chip";
      var use = document.createElement("button");
      use.type = "button";
      use.className = "room-chip-use";
      use.textContent = "📍 " + r.name;
      use.addEventListener("click", function () {
        $("#sessionRoomInput").value = r.name;
        updateRememberRoomBtn();
      });
      var del = document.createElement("button");
      del.type = "button";
      del.className = "room-chip-del";
      del.textContent = "×";
      del.setAttribute("aria-label", t("removeSavedRoom", { room: r.name }));
      del.title = t("removeSavedRoom", { room: r.name });
      del.addEventListener("click", function () {
        if (!requireDb()) return;
        roomsCol().doc(r.id).delete().catch(onDbError);
      });
      chip.appendChild(use);
      chip.appendChild(del);
      box.appendChild(chip);
    });
    updateRememberRoomBtn();
  }
  function rememberRoom() {
    var name = $("#sessionRoomInput").value.trim();
    if (!name || roomIsSaved(name) || !requireDb()) return;
    roomsCol().add({ name: name, createdAt: firebase.firestore.FieldValue.serverTimestamp() })
      .then(function () { toast(t("toastRoomSaved")); })
      .catch(onDbError);
  }

  function populateStartOptions() {
    var sel = $("#sessionStartInput");
    sel.innerHTML = "";
    for (var m = CAL_START_MIN; m < CAL_END_MIN; m += CAL_STEP) {
      var opt = document.createElement("option");
      opt.value = minToTime(m);
      opt.textContent = minToTime(m);
      sel.appendChild(opt);
    }
  }
  function populateLengthOptions(selected) {
    var startMin = timeToMin($("#sessionStartInput").value);
    var max = Math.max(1, (CAL_END_MIN - startMin) / CAL_STEP);
    var sel = $("#sessionLengthInput");
    sel.innerHTML = "";
    for (var n = 1; n <= max; n++) {
      var opt = document.createElement("option");
      opt.value = String(n);
      opt.textContent = lengthLabel(n);
      sel.appendChild(opt);
    }
    sel.value = String(Math.max(1, Math.min(max, selected || 2)));
    updateSessionEndHint();
  }
  function updateSessionEndHint() {
    var startMin = timeToMin($("#sessionStartInput").value);
    var len = Number($("#sessionLengthInput").value) || 1;
    $("#sessionEndHint").textContent = t("sessionEnds", { time: minToTime(startMin + len * CAL_STEP) });
  }
  function showSessionError(msg) {
    var el = $("#sessionFormError");
    el.textContent = msg;
    el.hidden = !msg;
  }

  function openSessionModal(id, draft) {
    ensureCalWeek();
    state.openSessionId = id || null;
    var s = id ? findSession(id) : null;
    if (id && !s) return;

    $("#sessionModalTitle").textContent = t(s ? "sessionModalTitleEdit" : "sessionModalTitleAdd");
    $("#sessionDateInput").value = s ? s.date : draft ? draft.date : toISODate(addDays(parseISODate(state.calWeekStart), state.calDayIdx));
    $("#sessionStartInput").value = s ? s.start : draft ? draft.start : "09:00";
    populateLengthOptions(s ? s.halfHours : 2);
    $("#sessionCapacityInput").value = s ? s.capacity : 10;
    $("#sessionRoomInput").value = s ? s.room || "" : "";
    updateRememberRoomBtn();
    $("#sessionParticipantNoteInput").value = s ? s.participantNote || "" : "";
    showSessionError("");

    // Organisatornotatet ligger i en egen samling som deltakere aldri leser.
    var orgInput = $("#sessionOrganizerNoteInput");
    orgInput.value = "";
    state.organizerNoteLoaded = !s;
    orgInput.disabled = !!s;
    if (s && state.dbReady) {
      sessionPrivateCol().doc(id).get().then(function (snap) {
        if (state.openSessionId !== id) return;
        orgInput.value = snap.exists ? snap.data().organizerNote || "" : "";
        orgInput.disabled = false;
        state.organizerNoteLoaded = true;
      }).catch(onDbError);
    }

    $("#deleteSessionBtn").hidden = !s;
    $("#sessionRegSection").hidden = !s;
    if (s) subscribeRegistrations(id);

    $("#sessionModalOverlay").hidden = false;
    $("#sessionDateInput").focus();
  }
  function closeSessionModal() {
    unsubscribeRegistrations();
    state.openSessionId = null;
    $("#sessionModalOverlay").hidden = true;
  }

  function submitSessionForm(ev) {
    ev.preventDefault();
    if (!requireDb()) return;
    var date = $("#sessionDateInput").value;
    if (!date) { showSessionError(t("sessionErrDate")); return; }
    var dow = parseISODate(date).getDay();
    if (dow === 0 || dow === 6) { showSessionError(t("sessionErrWeekend")); return; }

    var existing = state.openSessionId ? findSession(state.openSessionId) : null;
    var capacity = Math.floor(Number($("#sessionCapacityInput").value));
    if (!(capacity >= 1)) { $("#sessionCapacityInput").focus(); return; }
    if (existing && capacity < sessionCount(existing)) {
      showSessionError(t("sessionErrCapacity", { n: sessionCount(existing) }));
      return;
    }

    var data = {
      date: date,
      start: $("#sessionStartInput").value,
      halfHours: Number($("#sessionLengthInput").value),
      capacity: capacity,
      room: $("#sessionRoomInput").value.trim(),
      participantNote: $("#sessionParticipantNoteInput").value.trim(),
    };
    var organizerNote = $("#sessionOrganizerNoteInput").value.trim();
    var batch = state.db.batch();
    if (existing) {
      batch.update(sessionsCol().doc(existing.id), data);
      if (state.organizerNoteLoaded) batch.set(sessionPrivateCol().doc(existing.id), { organizerNote: organizerNote }, { merge: true });
    } else {
      var ref = sessionsCol().doc();
      data.registeredCount = 0;
      data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      batch.set(ref, data);
      batch.set(sessionPrivateCol().doc(ref.id), { organizerNote: organizerNote });
    }
    batch.commit()
      .then(function () {
        closeSessionModal();
        goToDate(date);
        toast(t("toastSaved"));
      })
      .catch(onDbError);
  }

  function deleteSession() {
    var s = state.openSessionId ? findSession(state.openSessionId) : null;
    if (!s || !requireDb()) return;
    var n = sessionCount(s);
    if (!confirm(n > 0 ? t("confirmDeleteSession", { n: n }) : t("confirmDeleteSessionEmpty"))) return;
    Promise.all([registrationsCol(s.id).get(), cancelRequestsCol(s.id).get()]).then(function (snaps) {
      var batch = state.db.batch();
      snaps.forEach(function (snap) { snap.docs.forEach(function (d) { batch.delete(d.ref); }); });
      batch.delete(sessionPrivateCol().doc(s.id));
      batch.delete(sessionsCol().doc(s.id));
      return batch.commit();
    }).then(function () {
      closeSessionModal();
      toast(t("toastDeleted"));
    }).catch(onDbError);
  }

  function unsubscribeRegistrations() {
    if (state.registrationsUnsub) { state.registrationsUnsub(); state.registrationsUnsub = null; }
    if (state.requestsUnsub) { state.requestsUnsub(); state.requestsUnsub = null; }
    state.modalRegs = [];
    state.modalReqs = [];
    $("#sessionRegList").innerHTML = "";
  }
  function subscribeRegistrations(sessionId) {
    unsubscribeRegistrations();
    if (!state.dbReady) return;
    function onErr(err) { console.error(err); showBanner("bannerPermission"); }
    state.registrationsUnsub = registrationsCol(sessionId).orderBy("createdAt").onSnapshot(function (snap) {
      state.modalRegs = snap.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); });
      renderRegistrations(sessionId);
    }, onErr);
    state.requestsUnsub = cancelRequestsCol(sessionId).onSnapshot(function (snap) {
      state.modalReqs = snap.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); });
      renderRegistrations(sessionId);
    }, onErr);
  }

  function renderRegistrations(sessionId) {
    var s = findSession(sessionId);
    var regs = state.modalRegs;
    var reqById = {};
    state.modalReqs.forEach(function (q) { reqById[q.id] = q; });
    var list = $("#sessionRegList");
    list.innerHTML = "";
    $("#sessionRegCount").textContent = regs.length + (s ? "/" + s.capacity : "");
    $("#sessionRegEmpty").hidden = regs.length > 0;

    // Påmeldte med åpen avmeldingsforespørsel vises øverst
    regs = regs.slice().sort(function (a, b) { return (reqById[b.id] ? 1 : 0) - (reqById[a.id] ? 1 : 0); });
    regs.forEach(function (r) {
      var req = reqById[r.id];
      var li = document.createElement("li");
      li.className = "reg-item" + (req ? " has-request" : "");
      var row = document.createElement("div");
      row.className = "reg-row";
      var info = document.createElement("div");
      info.className = "reg-info";
      var nameEl = document.createElement("span");
      nameEl.className = "reg-name";
      nameEl.textContent = r.name || t("dash");
      var mailEl = document.createElement("a");
      mailEl.className = "reg-email";
      mailEl.textContent = r.email || "";
      if (r.email) mailEl.href = "mailto:" + r.email;
      info.appendChild(nameEl);
      info.appendChild(mailEl);
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-danger reg-remove";
      btn.textContent = t("removeRegistration");
      btn.addEventListener("click", function () { removeRegistration(sessionId, r); });
      row.appendChild(info);
      row.appendChild(btn);
      li.appendChild(row);

      if (req) {
        var box = document.createElement("div");
        box.className = "reg-request";
        var label = document.createElement("div");
        label.className = "reg-request-label";
        label.textContent = t("requestLabel") + (req.createdAt && req.createdAt.toDate ? " · " + formatDateTime(req.createdAt.toDate()) : "");
        var reason = document.createElement("p");
        reason.className = "reg-request-reason";
        reason.textContent = req.reason || "";
        var actions = document.createElement("div");
        actions.className = "reg-request-actions";
        var approve = document.createElement("button");
        approve.type = "button";
        approve.className = "btn btn-primary";
        approve.textContent = t("approveCancel");
        approve.addEventListener("click", function () { removeRegistration(sessionId, r); });
        var decline = document.createElement("button");
        decline.type = "button";
        decline.className = "btn btn-outline";
        decline.textContent = t("declineCancel");
        decline.addEventListener("click", function () { declineCancelRequest(sessionId, r.id); });
        actions.appendChild(approve);
        actions.appendChild(decline);
        box.appendChild(label);
        box.appendChild(reason);
        box.appendChild(actions);
        li.appendChild(box);
      }
      list.appendChild(li);
    });
  }

  // Melder av en deltaker (direkte, eller ved å godkjenne en forespørsel).
  // Rydder også bort en eventuell forespørsel og holder tellerne riktige.
  function removeRegistration(sessionId, reg) {
    if (!requireDb()) return;
    if (!confirm(t("confirmRemoveRegistration", { name: reg.name || reg.email }))) return;
    var sRef = sessionsCol().doc(sessionId);
    var rRef = registrationsCol(sessionId).doc(reg.id);
    var qRef = cancelRequestsCol(sessionId).doc(reg.id);
    state.db.runTransaction(function (tx) {
      return tx.get(sRef).then(function (sSnap) {
        return tx.get(rRef).then(function (rSnap) {
          return tx.get(qRef).then(function (qSnap) {
            var upd = {};
            var sData = sSnap.exists ? sSnap.data() : {};
            if (rSnap.exists) { tx.delete(rRef); upd.registeredCount = Math.max(0, (sData.registeredCount || 0) - 1); }
            if (qSnap.exists) { tx.delete(qRef); upd.cancelRequestCount = Math.max(0, (sData.cancelRequestCount || 0) - 1); }
            if (sSnap.exists && Object.keys(upd).length) tx.update(sRef, upd);
          });
        });
      });
    }).then(function () { toast(t("toastUnregistered")); }).catch(onDbError);
  }

  function declineCancelRequest(sessionId, regId) {
    if (!requireDb()) return;
    var sRef = sessionsCol().doc(sessionId);
    var qRef = cancelRequestsCol(sessionId).doc(regId);
    state.db.runTransaction(function (tx) {
      return tx.get(sRef).then(function (sSnap) {
        return tx.get(qRef).then(function (qSnap) {
          if (!qSnap.exists) return;
          tx.delete(qRef);
          if (sSnap.exists) tx.update(sRef, { cancelRequestCount: Math.max(0, (sSnap.data().cancelRequestCount || 0) - 1) });
        });
      });
    }).then(function () { toast(t("toastDeclined")); }).catch(onDbError);
  }

  /* ============================================================
     10. FIREBASE
     ============================================================ */
  function statusDocRef() { return state.db.collection("status").doc("current"); }
  function groupsCol() { return state.db.collection("groups"); }
  function logCol() { return state.db.collection("trainingLog"); }
  function deficienciesCol() { return state.db.collection("deficiencies"); }
  function guideCol() { return state.db.collection("guide"); }
  function guideChangelogCol() { return state.db.collection("guideChangelog"); }
  function roomsCol() { return state.db.collection("rooms"); }
  function sessionsCol() { return state.db.collection("sessions"); }
  function sessionPrivateCol() { return state.db.collection("sessionPrivate"); }
  function registrationsCol(sessionId) { return sessionsCol().doc(sessionId).collection("registrations"); }
  function cancelRequestsCol(sessionId) { return sessionsCol().doc(sessionId).collection("cancelRequests"); }

  function requireDb() {
    if (state.dbReady) return true;
    showBanner("bannerNoDb");
    return false;
  }
  function onDbError(err) {
    console.error(err);
    toast(t("toastError"));
  }

  function isConfigured(cfg) {
    return !!cfg && cfg.apiKey && cfg.apiKey.indexOf("SKRIV_INN") === -1 && cfg.projectId;
  }

  function initFirebase() {
    var cfg = window.HLR_FIREBASE_CONFIG;
    if (!isConfigured(cfg)) {
      showBanner("bannerNoDb");
      return;
    }
    try {
      firebase.initializeApp(cfg);
    } catch (e) {
      console.error(e);
      showBanner("bannerNoDb");
      return;
    }
    var auth = firebase.auth();
    var db = firebase.firestore();
    state.db = db;

    auth.signInAnonymously().catch(function (err) {
      console.error(err);
      showBanner("bannerAuthFailed");
    });

    auth.onAuthStateChanged(function (user) {
      if (!user) return;
      state.dbReady = true;
      hideBanner();
      subscribeSessions();
      startCoordinatorSubscriptions();
    });
  }

  // Koordinator-dataene hentes først når man har logget inn som koordinator –
  // deltakere får aldri lastet dem ned.
  function startCoordinatorSubscriptions() {
    if (!state.dbReady || !isCoordinator() || state.coordinatorSubsStarted) return;
    state.coordinatorSubsStarted = true;
    seedIfEmpty();
    subscribeStatus();
    subscribeGroups();
    subscribeLog();
    subscribeDeficiencies();
    subscribeGuide();
    subscribeGuideChangelog();
    subscribeRooms();
  }

  function subscribeRooms() {
    roomsCol().onSnapshot(function (snap) {
      state.rooms = snap.docs
        .map(function (d) { return { id: d.id, name: d.data().name || "" }; })
        .filter(function (r) { return r.name; })
        .sort(function (a, b) { return a.name.localeCompare(b.name, locale(), { numeric: true }); });
      renderSavedRooms();
    }, function (err) {
      console.error(err);
      showBanner("bannerPermission");
    });
  }

  function seedIfEmpty() {
    statusDocRef().get().then(function (snap) {
      if (!snap.exists) {
        statusDocRef().set({ miniAnneLocation: "", defibWithBag: false });
      }
    }).catch(function () {});

    groupsCol().limit(1).get().then(function (snap) {
      if (snap.empty) {
        DEFAULT_GROUPS.forEach(function (g) {
          groupsCol().doc(g.id).set({ name: g.name, shortName: g.shortName, location: g.location, defib: g.defib, order: g.order });
        });
      }
    }).catch(function () {});

    guideCol().limit(1).get().then(function (snap) {
      if (snap.empty) {
        GUIDE_SEED.forEach(function (sec, i) {
          guideCol().doc(sec.id).set({
            title: sec.title,
            html: sec.html,
            titleEn: sec.titleEn,
            htmlEn: sec.htmlEn,
            enNeedsReview: false,
            order: i + 1,
          });
        });
      }
    }).catch(function () {});
  }

  function subscribeSessions() {
    sessionsCol().onSnapshot(function (snap) {
      state.sessions = snap.docs
        .map(function (d) { return Object.assign({ id: d.id }, d.data()); })
        .filter(function (x) { return x.date && x.start && x.capacity; });
      renderCalendar();
      if (state.openSignupId) updateSignupModal();
    }, function (err) {
      console.error(err);
      showBanner("bannerPermission");
    });
  }

  function subscribeStatus() {
    statusDocRef().onSnapshot(function (snap) {
      var data = snap.data() || {};
      state.status = {
        miniAnneLocation: data.miniAnneLocation || "",
        miniAnneUpdatedAt: data.miniAnneUpdatedAt && data.miniAnneUpdatedAt.toDate ? data.miniAnneUpdatedAt.toDate() : null,
        miniAnneUpdatedBy: data.miniAnneUpdatedBy || "",
        defibWithBag: typeof data.defibWithBag === "boolean" ? data.defibWithBag : null,
        defibUpdatedAt: data.defibUpdatedAt && data.defibUpdatedAt.toDate ? data.defibUpdatedAt.toDate() : null,
        defibUpdatedBy: data.defibUpdatedBy || "",
      };
      renderStatus();
    }, function (err) {
      console.error(err);
      showBanner("bannerPermission");
    });
  }

  function subscribeGroups() {
    groupsCol().onSnapshot(function (snap) {
      state.groups = snap.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); });
      renderGroups();
    }, function (err) {
      console.error(err);
      showBanner("bannerPermission");
    });
  }

  function subscribeLog() {
    logCol().orderBy("date", "desc").onSnapshot(function (snap) {
      state.log = snap.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); });
      renderLog();
    }, function (err) {
      console.error(err);
      showBanner("bannerPermission");
    });
  }

  function subscribeDeficiencies() {
    deficienciesCol().onSnapshot(function (snap) {
      state.deficiencies = snap.docs.map(function (d) {
        var data = d.data();
        var createdAt = data.createdAt && data.createdAt.toDate ? data.createdAt.toDate() : null;
        return {
          id: d.id,
          text: data.text || "",
          reportedBy: data.reportedBy || "",
          createdAt: createdAt,
          createdAtMs: createdAt ? createdAt.getTime() : 0,
          resolved: !!data.resolved,
          resolvedAt: data.resolvedAt && data.resolvedAt.toDate ? data.resolvedAt.toDate() : null,
          comment: data.comment || "",
          commentBy: data.commentBy || "",
          commentAt: data.commentAt && data.commentAt.toDate ? data.commentAt.toDate() : null,
        };
      });
      renderDeficiencies();
    }, function (err) {
      console.error(err);
      showBanner("bannerPermission");
    });
  }

  function subscribeGuide() {
    guideCol().orderBy("order").onSnapshot(function (snap) {
      state.guideSections = snap.docs.map(function (d) {
        var data = d.data();
        return Object.assign({ id: d.id }, data, {
          updatedAt: data.updatedAt && data.updatedAt.toDate ? data.updatedAt.toDate() : null,
          enUpdatedAt: data.enUpdatedAt && data.enUpdatedAt.toDate ? data.enUpdatedAt.toDate() : null,
        });
      });
      if (!state.editingGuideId) renderGuide();
    }, function (err) {
      console.error(err);
      showBanner("bannerPermission");
    });
  }

  function subscribeGuideChangelog() {
    guideChangelogCol().orderBy("at", "desc").limit(50).onSnapshot(function (snap) {
      state.guideChangelog = snap.docs.map(function (d) {
        var data = d.data();
        return {
          id: d.id,
          sectionTitle: data.sectionTitle || "",
          lang: data.lang || "no",
          by: data.by || "",
          at: data.at && data.at.toDate ? data.at.toDate() : null,
        };
      });
      renderGuideChangelog();
    }, function (err) {
      console.error(err);
    });
  }

  /* ============================================================
     11. OPPSTART
     ============================================================ */
  function renderAll() {
    applyStaticTranslations();
    renderCalendar();
    if (state.openSignupId) updateSignupModal();
    if (!isCoordinator()) return; // deltakere får aldri koordinatorsidene
    renderStatus();
    renderGroups();
    renderLog();
    renderDeficiencies();
    renderGuide();
    renderGuideChangelog();
  }

  function bindEvents() {
    $all(".nav-item").forEach(function (btn) {
      btn.addEventListener("click", function () { setView(btn.getAttribute("data-view")); });
    });

    $("#themeToggle").addEventListener("click", toggleTheme);

    function toggleLang() {
      state.lang = state.lang === "no" ? "en" : "no";
      localStorage.setItem("hlrLang", state.lang);
      renderAll();
      if (!$("#sessionModalOverlay").hidden) populateLengthOptions(Number($("#sessionLengthInput").value));
    }
    $("#langToggle").addEventListener("click", toggleLang);
    $("#loginLangToggle").addEventListener("click", toggleLang);

    $("#roleBtn").addEventListener("click", switchRole);
    $all("[data-role-choice]").forEach(function (btn) {
      btn.addEventListener("click", function () { chooseRole(btn.getAttribute("data-role-choice")); });
    });
    $("#loginForm").addEventListener("submit", submitLogin);
    $("#loginBackBtn").addEventListener("click", function () { showLoginStep("choose"); });

    bindCalendarEvents();
    $("#addSessionBtn").addEventListener("click", function () { openSessionModal(null, null); });
    $("#sessionForm").addEventListener("submit", submitSessionForm);
    $("#sessionStartInput").addEventListener("change", function () { populateLengthOptions(Number($("#sessionLengthInput").value)); });
    $("#sessionLengthInput").addEventListener("change", updateSessionEndHint);
    $("#rememberRoomBtn").addEventListener("click", rememberRoom);
    $("#sessionRoomInput").addEventListener("input", updateRememberRoomBtn);
    $("#cancelSessionBtn").addEventListener("click", closeSessionModal);
    $("#deleteSessionBtn").addEventListener("click", deleteSession);
    $("#sessionModalOverlay").addEventListener("click", function (ev) { if (ev.target === ev.currentTarget) closeSessionModal(); });

    $("#icsBtn").addEventListener("click", downloadIcs);
    $("#cancelToggleBtn").addEventListener("click", function () {
      $("#cancelToggleBtn").hidden = true;
      $("#cancelForm").hidden = false;
      $("#cancelEmailInput").focus();
    });
    $("#cancelFormBackBtn").addEventListener("click", function () {
      $("#cancelForm").hidden = true;
      $("#cancelToggleBtn").hidden = false;
    });
    $("#cancelForm").addEventListener("submit", submitCancelForm);
    $("#signupForm").addEventListener("submit", submitSignupForm);
    $("#cancelSignupBtn").addEventListener("click", closeSignupModal);
    $("#signupDoneCloseBtn").addEventListener("click", closeSignupModal);
    $("#signupModalOverlay").addEventListener("click", function (ev) { if (ev.target === ev.currentTarget) closeSignupModal(); });

    $("[data-edit='miniAnne']").addEventListener("click", enterEditMiniAnne);
    $("[data-save='miniAnne']").addEventListener("click", saveMiniAnne);
    $("[data-cancel='miniAnne']").addEventListener("click", exitEditMiniAnne);

    $("[data-edit='defib']").addEventListener("click", enterEditDefib);
    $("[data-save='defib']").addEventListener("click", saveDefib);
    $("[data-cancel='defib']").addEventListener("click", exitEditDefib);

    $("#addGroupBtn").addEventListener("click", function () { openGroupModal(null); });
    $("#groupForm").addEventListener("submit", submitGroupForm);
    $("#cancelGroupBtn").addEventListener("click", closeGroupModal);
    $("#deleteGroupBtn").addEventListener("click", deleteGroup);
    $("#groupModalOverlay").addEventListener("click", function (ev) { if (ev.target === ev.currentTarget) closeGroupModal(); });

    $("#addLogBtn").addEventListener("click", openLogModal);
    $("#logForm").addEventListener("submit", submitLogForm);
    $("#cancelLogBtn").addEventListener("click", closeLogModal);
    $("#logModalOverlay").addEventListener("click", function (ev) { if (ev.target === ev.currentTarget) closeLogModal(); });

    $("#addDeficiencyBtn").addEventListener("click", openDeficiencyModal);
    $("#deficiencyForm").addEventListener("submit", submitDeficiencyForm);
    $("#cancelDeficiencyBtn").addEventListener("click", closeDeficiencyModal);
    $("#deficiencyModalOverlay").addEventListener("click", function (ev) { if (ev.target === ev.currentTarget) closeDeficiencyModal(); });

    $("#deficiencyCommentForm").addEventListener("submit", submitDeficiencyCommentForm);
    $("#cancelDeficiencyCommentBtn").addEventListener("click", closeDeficiencyCommentModal);
    $("#removeDeficiencyCommentBtn").addEventListener("click", removeDeficiencyComment);
    $("#deficiencyCommentModalOverlay").addEventListener("click", function (ev) { if (ev.target === ev.currentTarget) closeDeficiencyCommentModal(); });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") { closeGroupModal(); closeLogModal(); closeDeficiencyModal(); closeDeficiencyCommentModal(); closeSessionModal(); closeSignupModal(); }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyStoredTheme();
    bindEvents();
    populateStartOptions();
    var storedRole = readStoredRole();
    if (storedRole) {
      applyRole(storedRole);
    } else {
      renderAll();
      showLogin();
    }
    initFirebase();
  });
})();
