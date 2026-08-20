/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  maxReach: 10,

  rules: [
    "Bench RB/WR with roles first. No 3rd TE. QB3 only if on-time and you really want him.",
    "No reach: stay within ~10 picks of ADP.",
    "Shedeur / Bateman are end-of-draft preference picks — take at ADP (~271), not earlier.",
    "Taxi: optional 1 dart if a clean rookie falls on time.",
  ],

  advice: { pick: 223 },

  queue: [
    {
      name: "Jaydon Blue",
      pos: "RB",
      slot: "bench",
      afterPick: 215,
      depthCharts: [
        { source: "Cowboys unofficial chart", role: "RB2 behind Javonte Williams" },
        { source: "CBS", role: "Listed #2; Mafah still competing" },
        { source: "Sleeper", role: "DAL RB #3" },
      ],
      outlook:
        "Year-2 Dallas back. Best remaining bench piece — injury fill-in behind Breece/Kyren. On-time at 223 (ADP ~230).",
      reasons: [
        "Pick **223** priority — named RB2 role, not a taxi dart.",
        "Do not skip Blue for Shedeur/Bateman here (~50 picks early on those).",
      ],
    },
    {
      name: "Malik Washington",
      pos: "WR",
      slot: "bench",
      afterPick: 226,
      depthCharts: [
        { source: "Sleeper", role: "MIA WR charted high" },
      ],
      outlook: "Bench WR at pick 234 on-time if Blue is gone.",
      reasons: [
        "On-time at **234** — fill bench before preference picks.",
      ],
    },
    {
      name: "Brenen Thompson",
      pos: "WR",
      slot: "taxi",
      afterPick: 239,
      depthCharts: [
        { source: "Sleeper", role: "LAC WR #4" },
      ],
      outlook: "Optional taxi at ~247. Skip if you want to save picks for Shedeur/Bateman.",
      reasons: [
        "Only if you still want a rookie taxi. Preference picks wait until 271.",
      ],
    },
    {
      name: "Shedeur Sanders",
      pos: "QB",
      slot: "bench",
      afterPick: 261,
      depthCharts: [
        { source: "Browns unofficial chart", role: "Watson OR Sanders — co-listed starters" },
        { source: "Monken", role: "Each starts a preseason game; Week 1 decision TBD" },
        { source: "Sleeper", role: "CLE QB #2" },
      ],
      outlook:
        "Year-2 Browns QB in an open competition with Watson. Upside if he wins the job; bench QB3 in 1QB if he loses. Take only on-time (~271).",
      reasons: [
        "You already like him — fine as a **last-pick dart**, not pick 223.",
        "ADP ~271 — on-time at pick **271**. Reaching earlier wastes a bench RB/WR slot.",
        "1QB format: Mahomes + Purdy start. Shedeur is lottery upside only.",
        "You already roster Sampson (CLE) — soft Browns stack if Shedeur wins.",
      ],
    },
    {
      name: "Rashod Bateman",
      pos: "WR",
      slot: "bench",
      afterPick: 266,
      depthCharts: [
        { source: "Ravens unofficial chart", role: "Starter opposite Zay Flowers" },
        { source: "Camp", role: "Lane / Walker pushing him — bounce-back not locked" },
        { source: "Sleeper", role: "BAL LWR #2" },
      ],
      outlook:
        "Age 26, year 6. Charted WR2 but Lane/Walker are loud in camp. Bounce-back thesis is real if healthy; volume not guaranteed. ADP ~277 — take at 271 if Shedeur is gone or you prefer WR.",
      reasons: [
        "Your bounce-back bet — on-time at pick **271**, not earlier.",
        "Named WR2 on the chart (unlike Mitchell). Competition from Lane is the risk.",
        "If both Shedeur and Bateman are up at 271, take the one you believe in more.",
      ],
    },
  ],

  skip: [
    { name: "Brandon Aiyuk", reason: "Reserve/Left Squad — locker removed, not paid" },
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "Chris Brazzell", reason: "Out 2026 (torn LCL)" },
    { name: "Chimere Dike", reason: "Returner / WR5 — no return scoring" },
    { name: "Travis Kelce", reason: "TE3" },
    { name: "Mason Taylor", reason: "TE3" },
    { name: "C.J. Stroud", reason: "QB3 — take Shedeur later if you want QB upside" },
    { name: "Hunter Henry", reason: "TE3" },
    { name: "Adonai Mitchell", reason: "Disputed role + poor outlook" },
    { name: "Kayshon Boutte", reason: "NE WR bubble" },
    { name: "Troy Franklin", reason: "DEN WR4–5 — you roster Sutton" },
    { name: "Brian Robinson", reason: "Behind Bijan" },
    { name: "James Conner", reason: "You roster Benson — same ARI room" },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE committee" },
    { name: "Travis Hunter", reason: "Offense share unknown" },
    { name: "Trey Benson", reason: "ARI 4-way backfield" },
    { name: "Rashod Bateman", reason: "BAL: Flowers, Bateman, Lane, Walker — WR2 not locked" },
    { name: "Shedeur Sanders", reason: "CLE: Watson OR Sanders — job not named yet" },
  ],

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months.",
    "Braelon Allen": "Jets RB2. Breece handcuff.",
    "Dylan Sampson": "CLE RB2 behind Judkins.",
    "Isiah Pacheco": "DET RB2 behind Gibbs.",
    "Trey Benson": "ARI committee.",
    "Jauan Jennings": "MIN WR3. Partial JJ stack.",
    "Elic Ayomanor": "TEN WR4 bench.",
  },
};
