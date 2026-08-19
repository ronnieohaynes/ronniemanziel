/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  rules: [
    "Before recommending: compare Sleeper depth chart, RotoWire role/outlook, and team reports.",
    "If depth charts disagree or the 2026 outlook is poor, skip — even when ADP is cheap.",
    "Starting nine is done. 175+ is BPA bench/taxi — skip TE3, QB3, and crowded rooms.",
    "ADP is a price check only. Reaches need a named role across sources, not camp hype alone.",
  ],

  advice: { pick: 175 },

  /** Present-tense only. Names must match Sleeper full_name. Drafted names drop off automatically. */
  queue: [
    {
      name: "Isiah Pacheco",
      pos: "RB",
      depthCharts: [
        { source: "RotoWire roles", role: "Change-of-pace RB2 behind Jahmyr Gibbs — role security Very High" },
        { source: "Lions / SI", role: "Clear #2 back, David Montgomery replacement" },
        { source: "Sleeper", role: "RB #2" },
      ],
      outlook:
        "Rotowire & team: complementary RB2 in a Gibbs-led backfield with standalone touches (Montgomery role). Injury history (fibula/MCL) is the main knock; age 27 is short-term dynasty value.",
      reasons: [
        "Only pick left near ADP (~165) with a unanimous named RB2 role across Sleeper, RotoWire, and team reports.",
        "Full PPR: Montgomery's old passing-down/schange role still exists — not a dead roster spot.",
        "You already roster four RBs, so this is BPA insurance, not a starter push. Trade or cut bait if the role shrinks.",
        "On-time/value at pick 175 — no reach tax unlike the WR tier left on the board.",
      ],
    },
    {
      name: "Ted Hurst",
      pos: "WR",
      depthCharts: [
        { source: "Buccaneers chart", role: "2nd unit behind McMillan / Godwin / Egbuka" },
        { source: "RotoWire / camp", role: "WR4 in target tree; red-zone and vertical upside" },
        { source: "Sleeper", role: "LWR #4" },
      ],
      outlook:
        "Rotowire/camp: 3rd-round rookie with Mayfield chemistry and contested-catch skill — developmental WR4, not a locked starter. Taxi-eligible; best at pick 186 on ADP (~207), not a 175 reach.",
      reasons: [
        "Taxi slot dart — rookie WR with real camp buzz (Bowles/Mayfield) in a passing offense.",
        "Take at 186 when ADP is on time; do not reach at 175.",
        "McMillan is ahead of him on the depth chart — already flagged crowded if you want a TB pass-catcher.",
      ],
    },
    {
      name: "Skyler Bell",
      pos: "WR",
      depthCharts: [
        { source: "Sleeper", role: "SWR #5 — Bills WR depth" },
        { source: "Outlook", role: "Rookie taxi dart only; Shakir is already rostered" },
      ],
      outlook: "Pure taxi stash behind Buffalo's established WR room.",
      reasons: [
        "Taxi-eligible rookie — only if Hurst is gone and you have an open taxi slot.",
      ],
    },
    {
      name: "Demond Claiborne",
      pos: "RB",
      depthCharts: [
        { source: "Sleeper", role: "RB #3 MIN" },
      ],
      outlook: "Rookie RB4 profile — taxi dart only.",
      reasons: [
        "Back-end taxi if WR darts are gone.",
      ],
    },
  ],

  skip: [
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "Travis Kelce", reason: "TE3 + age 36, no TE premium" },
    { name: "Mason Taylor", reason: "TE3 — Pitts and Kincaid already start" },
    { name: "C.J. Stroud", reason: "QB3 — Mahomes and Purdy already rostered" },
    { name: "Jauan Jennings", reason: "Age 29 — win-now flex, wrong phase for bench youth" },
    {
      name: "Adonai Mitchell",
      reason: "Sleeper lists RWR #2 but unofficial NYJ chart had Cooper ahead; Rotowire WR216 outlook says replace him (41% catch rate, Cooper/Sadiq drafted). No clear job.",
    },
    {
      name: "Kayshon Boutte",
      reason: "Rotowire WR3; Boston Globe has him odd man out in a 7-WR room (Brown/Doubs/Douglas). Roster bubble + trade rumors.",
    },
    {
      name: "Troy Franklin",
      reason: "DEN: Waddle added; Mims/Bryant ahead on charts. Rotowire/SI have him WR4–5. You already roster Sutton.",
    },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE: Kolar OR Gadsden OR Njoku" },
    { name: "Jakobi Meyers", reason: "JAX: BTJ, Meyers, Parker Washington, Hunter" },
    { name: "Travis Hunter", reason: "Backup WR / starting CB — offense share unknown" },
    { name: "Brian Robinson", reason: "Behind Bijan" },
    { name: "Aaron Jones", reason: "MIN: Jones OR Mason" },
    { name: "Kenny Gainwell", reason: "Behind Bucky Irving" },
    { name: "Tyler Allgeier", reason: "ARI: Love OR Allgeier OR Conner OR Benson" },
    { name: "Trey Benson", reason: "ARI: Love OR Allgeier OR Conner OR Benson" },
    { name: "James Conner", reason: "ARI: Love OR Allgeier OR Conner OR Benson" },
    { name: "Woody Marks", reason: "HOU: Montgomery OR Marks" },
    { name: "Jalen McMillan", reason: "TB WR3 behind Godwin/Egbuka starters — crowded, not a defined #2" },
  ],

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
    "Braelon Allen": "Jets RB2. Breece handcuff.",
    "Dylan Sampson": "CLE RB2 behind Judkins. Dynasty bench RB.",
  },
};
