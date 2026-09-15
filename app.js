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
      guideTitle: "HLR hurtigstart-guide",
      guideDesc: "Alt en koordinator trenger å huske på — fra innkalling til opprydding.",
      groupModalTitleAdd: "Ny gruppe",
      groupModalTitleEdit: "Rediger gruppe",
      fieldGroupName: "Gruppenavn",
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
      guideTitle: "CPR quickstart guide",
      guideDesc: "Everything a coordinator needs to remember — from booking to cleanup.",
      groupModalTitleAdd: "New group",
      groupModalTitleEdit: "Edit group",
      fieldGroupName: "Group name",
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
    { id: "relis", name: "RELIS", location: "Ullevål, bygg 50", defib: "1. etasje hos HABIO (bak dør som er låst for oss).", order: 1 },
    { id: "ul", name: "UL", location: "Ullevål, bygg 6", defib: "4. etasje – venstre for midtre trappegang, og 3. etasje – høyre for midtre trappegang.", order: 2 },
    { id: "farmasoytisk-institutt", name: "Farmasøytisk institutt", location: "Rikshospitalet", defib: "2. etasje, i hallen utenfor Patologi.", order: 3 },
    { id: "sse", name: "SSE", location: "Spesialsykehuset for epilepsi (SSE)", defib: "Telemetri kontaktes på tlf. 675 01 244 og kommer med hjertestarter, jf. prosedyre.", order: 4 },
    { id: "rh", name: "RH", location: "Rikshospitalet", defib: "", order: 5 },
  ];

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
    editingMiniAnne: false,
    editingDefib: false,
    openGroupId: null, // null = ny gruppe, ellers id for redigering
    bannerKey: null,
  };

  function t(key) {
    var dict = T[state.lang] || T.no;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
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
    $("[data-i18n-lang-current]").textContent = state.lang.toUpperCase();
    document.documentElement.lang = state.lang;
    if (state.bannerKey) {
      $("#connBannerText").textContent = t(state.bannerKey);
    }
  }

  /* ============================================================
     5. NAVIGASJON
     ============================================================ */
  function setView(view) {
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
      $("#miniAnneMeta").textContent = t("lastUpdated") + ": " + (s.miniAnneUpdatedAt ? formatDateTime(s.miniAnneUpdatedAt) : t("neverRegistered"));
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
      $("#defibMeta").textContent = t("lastUpdated") + ": " + (s.defibUpdatedAt ? formatDateTime(s.defibUpdatedAt) : t("neverRegistered"));
    }
  }

  function enterEditMiniAnne() {
    state.editingMiniAnne = true;
    var input = $("#miniAnneLocationInput");
    input.value = (state.status && state.status.miniAnneLocation) || "";
    input.hidden = false;
    $("#miniAnneLocation").hidden = true;
    toggleCardButtons("miniAnne", true);
    input.focus();
  }
  function exitEditMiniAnne() {
    state.editingMiniAnne = false;
    $("#miniAnneLocationInput").hidden = true;
    $("#miniAnneLocation").hidden = false;
    toggleCardButtons("miniAnne", false);
    renderStatus();
  }
  function enterEditDefib() {
    state.editingDefib = true;
    $("#defibToggle").checked = !!(state.status && state.status.defibWithBag);
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
    statusDocRef()
      .set(
        { miniAnneLocation: value, miniAnneUpdatedAt: firebase.firestore.FieldValue.serverTimestamp() },
        { merge: true }
      )
      .then(function () { exitEditMiniAnne(); toast(t("toastSaved")); })
      .catch(function (err) { console.error(err); toast(t("toastError")); });
  }
  function saveDefib() {
    if (!requireDb()) return;
    var value = $("#defibToggle").checked;
    statusDocRef()
      .set(
        { defibWithBag: value, defibUpdatedAt: firebase.firestore.FieldValue.serverTimestamp() },
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
      card.innerHTML =
        '<div class="group-name">' + esc(g.name) + "</div>" +
        '<div class="group-row"><span class="row-label">' + esc(t("rowLocation")) + '</span><span class="row-value">' + esc(g.location || t("dash")) + "</span></div>" +
        '<div class="group-row"><span class="row-label">' + esc(t("rowDefib")) + '</span><span class="row-value">' + esc(g.defib || t("noDefibInfo")) + "</span></div>";
      card.addEventListener("click", function () { openGroupModal(g.id); });
      grid.appendChild(card);
    });
  }

  function openGroupModal(id) {
    state.openGroupId = id || null;
    var g = id ? state.groups.find(function (x) { return x.id === id; }) : null;
    $("#groupModalTitle").textContent = id ? t("groupModalTitleEdit") : t("groupModalTitleAdd");
    $("#groupNameInput").value = g ? g.name : "";
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
      tr.innerHTML =
        '<td data-label="' + esc(t("colDate")) + '">' + esc(formatDate(entry.date)) + "</td>" +
        '<td data-label="' + esc(t("colGroup")) + '">' + esc(entry.group || t("dash")) + "</td>" +
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

  function openLogModal() {
    $("#logForm").reset();
    $("#logDateInput").value = new Date().toISOString().slice(0, 10);
    $("#logModalOverlay").hidden = false;
    $("#logGroupInput").focus();
  }
  function closeLogModal() { $("#logModalOverlay").hidden = true; }

  function submitLogForm(ev) {
    ev.preventDefault();
    if (!requireDb()) return;
    var participantsRaw = $("#logParticipantsInput").value;
    var data = {
      date: $("#logDateInput").value,
      group: $("#logGroupInput").value.trim(),
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
     9. RENDER: GUIDE
     ============================================================ */
  function renderGuide() {
    var acc = $("#guideAccordion");
    var openIndex = $all(".accordion-item", acc).findIndex(function (el) { return el.classList.contains("is-open"); });
    acc.innerHTML = "";
    var sections = t("guideSections");
    sections.forEach(function (sec, i) {
      var item = document.createElement("div");
      item.className = "accordion-item" + (i === (openIndex === -1 ? 0 : openIndex) ? " is-open" : "");
      item.innerHTML =
        '<button class="accordion-trigger" type="button" aria-expanded="' + (i === 0 ? "true" : "false") + '">' +
        "<span>" + esc(sec.title) + "</span>" +
        '<svg class="chevron" viewBox="0 0 24 24" width="18" height="18"><polyline points="6 9 12 15 18 9"/></svg>' +
        "</button>" +
        '<div class="accordion-panel"><div class="accordion-body">' + sec.html + "</div></div>";
      var trigger = $(".accordion-trigger", item);
      trigger.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");
        $all(".accordion-item", acc).forEach(function (el) { el.classList.remove("is-open"); $(".accordion-trigger", el).setAttribute("aria-expanded", "false"); });
        if (!isOpen) { item.classList.add("is-open"); trigger.setAttribute("aria-expanded", "true"); }
      });
      acc.appendChild(item);
    });
  }

  /* ============================================================
     10. FIREBASE
     ============================================================ */
  function statusDocRef() { return state.db.collection("status").doc("current"); }
  function groupsCol() { return state.db.collection("groups"); }
  function logCol() { return state.db.collection("trainingLog"); }

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
      seedIfEmpty();
      subscribeStatus();
      subscribeGroups();
      subscribeLog();
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
          groupsCol().doc(g.id).set({ name: g.name, location: g.location, defib: g.defib, order: g.order });
        });
      }
    }).catch(function () {});
  }

  function subscribeStatus() {
    statusDocRef().onSnapshot(function (snap) {
      var data = snap.data() || {};
      state.status = {
        miniAnneLocation: data.miniAnneLocation || "",
        miniAnneUpdatedAt: data.miniAnneUpdatedAt && data.miniAnneUpdatedAt.toDate ? data.miniAnneUpdatedAt.toDate() : null,
        defibWithBag: typeof data.defibWithBag === "boolean" ? data.defibWithBag : null,
        defibUpdatedAt: data.defibUpdatedAt && data.defibUpdatedAt.toDate ? data.defibUpdatedAt.toDate() : null,
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

  /* ============================================================
     11. OPPSTART
     ============================================================ */
  function renderAll() {
    applyStaticTranslations();
    renderStatus();
    renderGroups();
    renderLog();
    renderGuide();
  }

  function bindEvents() {
    $all(".nav-item").forEach(function (btn) {
      btn.addEventListener("click", function () { setView(btn.getAttribute("data-view")); });
    });

    $("#themeToggle").addEventListener("click", toggleTheme);

    $("#langToggle").addEventListener("click", function () {
      state.lang = state.lang === "no" ? "en" : "no";
      localStorage.setItem("hlrLang", state.lang);
      renderAll();
    });

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

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") { closeGroupModal(); closeLogModal(); }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyStoredTheme();
    bindEvents();
    renderAll();
    initFirebase();
  });
})();
