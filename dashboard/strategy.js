/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  maxReach: 40,

  rules: [
    "Banner always names who to TAKE — ranked players only (Sleeper search + ADP).",
    "No unranked UDFAs as the primary recommendation.",
    "2 QB / 2 TE is enough. Last pick = best ranked skill left.",
  ],

  advice: { pick: 271 },

  /** Prefer players with real ADP rank + Sleeper search rank. */
  queue: [
    {
      name: "Audric Estime",
      pos: "RB",
      slot: "bench",
      afterPick: 230,
      depthCharts: [
        { source: "Sleeper", role: "NO RB #5 — depth, but ranked ADP #219" },
        { source: "Rank", role: "Sleeper search ~#190 — real dynasty name, not UDFA fluff" },
      ],
      outlook:
        "Age 22, year 3. Best remaining ranked RB. Saints depth chart is crowded, but he's the highest-ranked skill player left on the board.",
      reasons: [
        "**Take Audric Estime at pick 271.**",
        "ADP **#219** / search **~#190** — actually ranked, unlike Tau-Tolliver-type UDFAs.",
        "Young RB with path if New Orleans' backfield thins out.",
        "Last pick of the draft — take the best ranked name left.",
      ],
    },
    {
      name: "Brashard Smith",
      pos: "RB",
      slot: "bench",
      afterPick: 250,
      depthCharts: [
        { source: "Sleeper", role: "KC RB #4" },
        { source: "Rank", role: "Sleeper search ~#182" },
      ],
      outlook: "Year-2 Chiefs back — ranked backup if Estime is gone.",
      reasons: [
        "Next ranked RB if Estime is drafted.",
      ],
    },
    {
      name: "Darnell Mooney",
      pos: "WR",
      slot: "bench",
      afterPick: 250,
      depthCharts: [
        { source: "Sleeper", role: "NYG WR #3" },
        { source: "Rank", role: "ADP #304 · search ~#194" },
      ],
      outlook: "Giants WR3 — ranked veteran bench if you prefer WR over RB depth.",
      reasons: [
        "Ranked WR alternative to Estime/Smith.",
      ],
    },
  ],

  skip: [
    { name: "Elijah Tau-Tolliver", reason: "Unranked UDFA — not a primary take" },
    { name: "Brandon Aiyuk", reason: "Reserve/Left Squad" },
    { name: "Tyreek Hill", reason: "Unsigned FA, multi-ligament knee" },
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "Chimere Dike", reason: "Returner / WR5" },
    { name: "Travis Kelce", reason: "TE3" },
    { name: "Mason Taylor", reason: "TE3" },
    { name: "C.J. Stroud", reason: "QB3" },
    { name: "Hunter Henry", reason: "TE3" },
    { name: "Cade Otton", reason: "TE3" },
    { name: "Pat Freiermuth", reason: "TE3" },
    { name: "David Njoku", reason: "TE3" },
    { name: "Theo Johnson", reason: "TE3" },
    { name: "Adonai Mitchell", reason: "Disputed role + poor outlook" },
    { name: "Kayshon Boutte", reason: "NE WR bubble" },
    { name: "Troy Franklin", reason: "DEN — you roster Sutton" },
    { name: "Brian Robinson", reason: "Behind Bijan" },
    { name: "James Conner", reason: "You roster Benson" },
    { name: "Jack Bech", reason: "Raiders soft-avoid" },
    { name: "Calvin Ridley", reason: "Age 31 — prefer younger ranked skill" },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE committee" },
    { name: "Travis Hunter", reason: "Offense share unknown" },
    { name: "Trey Benson", reason: "ARI 4-way backfield" },
    { name: "Jaylen Wright", reason: "MIA: Wright OR Gordon behind Achane" },
    { name: "Rashod Bateman", reason: "BAL: Flowers, Bateman, Lane, Walker" },
    { name: "Audric Estime", reason: "NO crowded backfield — ranked stash, not a starter" },
  ],

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months.",
    "Braelon Allen": "Jets RB2. Breece handcuff.",
    "Dylan Sampson": "CLE RB2 behind Judkins.",
    "Isiah Pacheco": "DET RB2 behind Gibbs.",
    "Jaydon Blue": "DAL RB2 behind Javonte.",
    "Jaylen Wright": "MIA RB2 behind Achane.",
    "Ryan Flournoy": "DAL WR3.",
    "Rashod Bateman": "BAL WR2 bounce-back bet.",
    "Trey Benson": "ARI committee.",
    "Jauan Jennings": "MIN WR3.",
    "Elic Ayomanor": "TEN WR4 bench.",
  },
};
