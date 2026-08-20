/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  maxReach: 10,

  rules: [
    "Always name a take for the current pick when someone on-time is available.",
    "Bench RB/WR with roles first. Shedeur/Bateman only near ADP (~271).",
    "No reach: stay within ~10 picks of ADP.",
    "Taxi optional — one dart max if a clean rookie falls late.",
  ],

  advice: { pick: 234 },

  queue: [
    {
      name: "Jaylen Wright",
      pos: "RB",
      slot: "bench",
      afterPick: 229,
      depthCharts: [
        { source: "Dolphins unofficial chart", role: "RB2 behind Achane (ahead of Ollie Gordon)" },
        { source: "CBS / camp", role: "Leading RB2 battle — Gordon still competing after preseason" },
        { source: "Sleeper", role: "MIA RB #2" },
      ],
      outlook:
        "Year-2 Miami back. Named RB2 on the chart behind Achane — real bench RB for injury weeks. On-time at pick 234 (ADP ~240).",
      reasons: [
        "Pick **234** — take him. On-time, fills your thin RB room after Blue.",
        "Better than waiting for Shedeur/Bateman (~37 picks early on those).",
        "Gordon is pushing; role isn't locked forever, but chart says #2 now.",
      ],
    },
    {
      name: "Ryan Flournoy",
      pos: "WR",
      slot: "bench",
      afterPick: 226,
      depthCharts: [
        { source: "Cowboys reports", role: "WR3 behind Lamb / Pickens" },
        { source: "Sleeper", role: "DAL WR #3" },
      ],
      outlook:
        "Year-3 Cowboy. Solid bench WR if Wright is gone. On-time at 234 (ADP ~236).",
      reasons: [
        "Backup at **234** if Wright is drafted.",
        "Named WR3 role — not a taxi dart.",
      ],
    },
    {
      name: "Sean Tucker",
      pos: "RB",
      slot: "bench",
      afterPick: 237,
      depthCharts: [
        { source: "Sleeper", role: "TB RB #3" },
      ],
      outlook: "Bucs RB depth — on-time at pick 247 if Wright/Flournoy are gone.",
      reasons: [
        "Pick **247** bench RB if still available.",
      ],
    },
    {
      name: "Shedeur Sanders",
      pos: "QB",
      slot: "bench",
      afterPick: 261,
      depthCharts: [
        { source: "Browns unofficial chart", role: "Watson OR Sanders" },
        { source: "Sleeper", role: "CLE QB #2" },
      ],
      outlook:
        "Preference pick — open QB competition. Take at pick **271** only (ADP ~271).",
      reasons: [
        "Your dart if still up at **271**. Do not take at 234/247/258.",
        "1QB: Mahomes + Purdy start; this is lottery upside.",
      ],
    },
    {
      name: "Rashod Bateman",
      pos: "WR",
      slot: "bench",
      afterPick: 266,
      depthCharts: [
        { source: "Ravens chart", role: "WR2 opposite Flowers; Lane/Walker pushing" },
        { source: "Sleeper", role: "BAL LWR #2" },
      ],
      outlook: "Bounce-back preference — take at **271** if Shedeur is gone or you prefer WR.",
      reasons: [
        "On-time near **271**. Named WR2 with real competition risk.",
      ],
    },
  ],

  skip: [
    { name: "Brandon Aiyuk", reason: "Reserve/Left Squad — not paid" },
    { name: "Tyreek Hill", reason: "Unsigned FA, multi-ligament knee — no 2026 role" },
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "Chris Brazzell", reason: "Out 2026 (torn LCL) — IR dart only at the very end" },
    { name: "Chimere Dike", reason: "Returner / WR5" },
    { name: "Travis Kelce", reason: "TE3" },
    { name: "Mason Taylor", reason: "TE3" },
    { name: "C.J. Stroud", reason: "QB3" },
    { name: "Hunter Henry", reason: "TE3" },
    { name: "Adonai Mitchell", reason: "Disputed role + poor outlook" },
    { name: "Kayshon Boutte", reason: "NE WR bubble" },
    { name: "Troy Franklin", reason: "DEN WR4–5 — you roster Sutton" },
    { name: "Brian Robinson", reason: "Behind Bijan" },
    { name: "James Conner", reason: "You roster Benson" },
    { name: "Jack Bech", reason: "Raiders soft-avoid" },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE committee" },
    { name: "Travis Hunter", reason: "Offense share unknown" },
    { name: "Trey Benson", reason: "ARI 4-way backfield" },
    { name: "Jaylen Wright", reason: "MIA: Achane clear #1; Wright OR Gordon for #2" },
    { name: "Rashod Bateman", reason: "BAL: Flowers, Bateman, Lane, Walker" },
    { name: "Shedeur Sanders", reason: "CLE: Watson OR Sanders" },
  ],

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months.",
    "Braelon Allen": "Jets RB2. Breece handcuff.",
    "Dylan Sampson": "CLE RB2 behind Judkins.",
    "Isiah Pacheco": "DET RB2 behind Gibbs.",
    "Jaydon Blue": "DAL RB2 behind Javonte.",
    "Trey Benson": "ARI committee.",
    "Jauan Jennings": "MIN WR3.",
    "Elic Ayomanor": "TEN WR4 bench.",
  },
};
