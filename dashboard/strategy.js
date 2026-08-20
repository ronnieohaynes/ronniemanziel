/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  maxReach: 10,

  rules: [
    "Roster: 9 starters + **12 bench** + **3 taxi** (rookies only) + 4 IR — bench first.",
    "No reach: stay within ~10 picks of ADP unless a clear starter role.",
    "Taxi: 1–2 rookies late (247+). Do not fill every pick with taxi.",
    "Skip Aiyuk: Reserve/Left Squad, locker removed, not paid — not a 2026 stash.",
  ],

  advice: { pick: 210 },

  queue: [
    {
      name: "Elic Ayomanor",
      pos: "WR",
      slot: "bench",
      afterPick: 209,
      depthCharts: [
        { source: "Titans chart", role: "WR4 behind Tate / Robinson / Ridley; ahead of Dike as backup LWR" },
        { source: "Sleeper", role: "LWR #4 TEN" },
        { source: "CBS / camp", role: "Competing with Dike for leftover targets — not a locked WR3" },
      ],
      outlook:
        "Year-2 Titan. Thin 2026 target share, but a real rostered WR with a named backup job — better than Aiyuk (left squad) or Dike (returner). Borderline on-time at 210 (ADP ~220).",
      reasons: [
        "Pick **210** — ~10 picks early, the last on-time-ish **bench WR** left. Not a taxi dart.",
        "Aiyuk is off the board for us: Reserve/Left Squad, locker gone, 2026 money voided. Do not draft him.",
        "Skip Chimere Dike — returner first, WR5. This league does not score returns.",
        "If you would rather wait 13 picks for a named RB2, Jaydon Blue is next (DAL, pick **223**).",
      ],
    },
    {
      name: "Jaydon Blue",
      pos: "RB",
      slot: "bench",
      afterPick: 215,
      depthCharts: [
        { source: "Cowboys unofficial chart", role: "RB2 behind Javonte Williams (not an OR)" },
        { source: "CBS", role: "Listed #2; camp battle with Phil Mafah still live" },
        { source: "Sleeper", role: "DAL RB #3" },
      ],
      outlook:
        "Year-2 Dallas back. Unofficial RB2 behind Javonte — real bench RB for injury weeks. On-time at pick 223 (ADP ~230).",
      reasons: [
        "On-time at pick **223** — your next **bench RB** after Benson.",
        "Do not take at 210 (~20 picks early).",
        "Mafah is still competing; role is named #2 on the unofficial chart, not a 3-way OR.",
      ],
    },
    {
      name: "Malik Washington",
      pos: "WR",
      slot: "bench",
      afterPick: 226,
      depthCharts: [
        { source: "Sleeper", role: "MIA WR listed high on chart" },
      ],
      outlook: "Bench WR at pick 234 on-time. Skip if you already filled WR bench.",
      reasons: [
        "On-time at **234** — bench, not taxi.",
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
      outlook: "Optional taxi dart #1 at pick 247 — only if you want a rookie taxi.",
      reasons: [
        "First taxi only if you still want one. Otherwise take bench at 247.",
      ],
    },
  ],

  skip: [
    { name: "Brandon Aiyuk", reason: "Reserve/Left Squad — locker removed, 2026 guarantees voided, not paid. Skip." },
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "Chris Brazzell", reason: "Out 2026 (torn LCL)" },
    { name: "Chimere Dike", reason: "TEN returner / WR5 — no return scoring here" },
    { name: "Tyreek Hill", reason: "No team listed — not a 2026 bench lock" },
    { name: "Travis Kelce", reason: "TE3 + age 36" },
    { name: "Mason Taylor", reason: "TE3" },
    { name: "C.J. Stroud", reason: "QB3" },
    { name: "Carson Beck", reason: "QB dart" },
    { name: "Hunter Henry", reason: "TE3" },
    { name: "Gunnar Helm", reason: "TE3" },
    { name: "Kyler Murray", reason: "QB3" },
    { name: "Adonai Mitchell", reason: "Disputed WR2/3 + poor outlook" },
    { name: "Kayshon Boutte", reason: "NE WR roster bubble" },
    { name: "Troy Franklin", reason: "DEN WR4–5 — you roster Sutton" },
    { name: "Brian Robinson", reason: "Behind Bijan" },
    { name: "James Conner", reason: "ARI crowded; you already roster Benson" },
    { name: "Trey Benson", reason: "ARI: Love OR Allgeier OR Conner OR Benson — already yours" },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE: Kolar OR Gadsden OR Njoku" },
    { name: "Jakobi Meyers", reason: "JAX: BTJ, Meyers, Parker Washington, Hunter" },
    { name: "Travis Hunter", reason: "Backup WR / starting CB" },
    { name: "Aaron Jones", reason: "MIN: Jones OR Mason" },
    { name: "Kenny Gainwell", reason: "Behind Bucky Irving" },
    { name: "Woody Marks", reason: "HOU: Montgomery OR Marks" },
    { name: "Jalen McMillan", reason: "TB WR3 behind Godwin/Egbuka" },
    { name: "Trey Benson", reason: "ARI 4-way backfield" },
  ],

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
    "Braelon Allen": "Jets RB2. Breece handcuff.",
    "Dylan Sampson": "CLE RB2 behind Judkins.",
    "Isiah Pacheco": "DET RB2 behind Gibbs.",
    "Trey Benson": "ARI committee — bench dart, not a locked RB2.",
    "Jauan Jennings": "MIN WR3. Partial JJ stack.",
  },
};
