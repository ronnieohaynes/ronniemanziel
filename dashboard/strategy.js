/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  maxReach: 8,

  rules: [
    "Roster: 9 starters + **12 bench** + **3 taxi** (rookies only) + 4 IR — bench is the priority late.",
    "No reach: stay within ~8 picks of ADP unless a clear starter role.",
    "Taxi: you only need **1–2** rookie stashes (picks ~234, ~247), not every remaining pick.",
    "Bench targets: RB/WR who can actually flex in injury weeks — not TE3/QB3.",
  ],

  advice: { pick: 186 },

  /** slot: "bench" | "taxi". afterPick = earliest pick to recommend. */
  queue: [
    {
      name: "Jauan Jennings",
      pos: "WR",
      slot: "bench",
      afterPick: 178,
      depthCharts: [
        { source: "Sleeper", role: "MIN SWR #3 behind JJ / Addison" },
        { source: "Team", role: "Veteran WR3 — same offense as Jefferson" },
      ],
      outlook:
        "Age 29, 1-year deal. Partial JJ stack; Addison is still ahead if JJ misses time. Real bench WR, not taxi.",
      reasons: [
        "ADP ~171 — **value** at pick 186, not a reach.",
        "Bench WR depth behind your starters; can flex in full PPR if injuries hit.",
        "Veteran — goes on **bench**, not taxi.",
      ],
    },
    {
      name: "Kimani Vidal",
      pos: "RB",
      slot: "bench",
      afterPick: 191,
      depthCharts: [
        { source: "Sleeper", role: "LAC RB #3" },
        { source: "Role", role: "Behind Hampton — change-of-pace / injury fill-in" },
      ],
      outlook:
        "Second-year back in LAC. Bench RB6 on your roster — injury insurance behind Breece/Kyren/Pacheco, not a starter.",
      reasons: [
        "On-time at pick **199** — fills a **bench RB** slot with a real NFL role.",
        "You roster five RBs but this is on-time value, not a reach.",
        "Bench, not taxi (year 2).",
      ],
    },
    {
      name: "Brandon Aiyuk",
      pos: "WR",
      slot: "bench",
      afterPick: 202,
      depthCharts: [
        { source: "Sleeper", role: "SF WR #5" },
        { source: "Outlook", role: "Talent stash — injury history; bench lottery, not 2026 lock" },
      ],
      outlook:
        "When healthy, starter-level talent. Bench WR lottery at pick 210 — on-time ADP, not taxi.",
      reasons: [
        "On-time at pick **210** — name-value bench stash in full PPR.",
        "Not a taxi candidate (veteran). Skip if you hate injury risk.",
      ],
    },
    {
      name: "Jaydon Blue",
      pos: "RB",
      slot: "bench",
      afterPick: 215,
      depthCharts: [
        { source: "Sleeper", role: "DAL RB #3" },
      ],
      outlook: "Year-2 Dallas back — bench RB depth at pick 223 on-time.",
      reasons: [
        "On-time at pick **223** — another **bench RB** for injury weeks.",
        "Not taxi (exp 1). Take Vidal/Aiyuk first if still on the board.",
      ],
    },
    {
      name: "Adam Randall",
      pos: "RB",
      slot: "taxi",
      afterPick: 226,
      depthCharts: [
        { source: "Sleeper", role: "BAL RB #3" },
      ],
      outlook: "Rookie — **taxi slot #1 only** if you want one. On-time at pick 234. Skip if you'd rather another bench body.",
      reasons: [
        "Optional taxi dart #1 — you have **3 taxi total**, not 3 per round.",
        "On-time at **234**; do not reach earlier.",
        "If you skip taxis entirely, take Malik Washington or Ollie Gordon here instead (bench).",
      ],
    },
    {
      name: "Malik Washington",
      pos: "WR",
      slot: "bench",
      afterPick: 226,
      depthCharts: [
        { source: "Sleeper", role: "MIA WR #1 on chart" },
      ],
      outlook: "Bench WR — on-time at 234 if you pass on Randall or already have enough taxis.",
      reasons: [
        "Bench alternative at pick **234** instead of a taxi dart.",
        "Real roster spot on a depth chart, not a stash-only rookie.",
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
      outlook: "Optional taxi dart #2 at pick 247 — only if you want a second rookie taxi.",
      reasons: [
        "Second taxi only if you took Randall and still have an open taxi slot.",
        "Otherwise skip — use 247 for bench (Kyle Williams, Sean Tucker, etc.).",
      ],
    },
  ],

  skip: [
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "Chris Brazzell", reason: "Out 2026 (torn LCL)" },
    { name: "Travis Kelce", reason: "TE3 + age 36" },
    { name: "Mason Taylor", reason: "TE3 — Pitts and Kincaid start" },
    { name: "C.J. Stroud", reason: "QB3" },
    { name: "Carson Beck", reason: "QB dart" },
    { name: "Hunter Henry", reason: "TE3" },
    { name: "Gunnar Helm", reason: "TE3" },
    { name: "Kyler Murray", reason: "QB3 — Mahomes and Purdy rostered" },
    { name: "Adonai Mitchell", reason: "Disputed WR2/3 + poor outlook" },
    { name: "Kayshon Boutte", reason: "NE WR roster bubble" },
    { name: "Troy Franklin", reason: "DEN WR4–5 — you roster Sutton" },
    { name: "Brian Robinson", reason: "ATL RB2 behind Bijan — crowded" },
    { name: "James Conner", reason: "Age 29+ win-now RB — bench phase prefers youth" },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE: Kolar OR Gadsden OR Njoku" },
    { name: "Jakobi Meyers", reason: "JAX: BTJ, Meyers, Parker Washington, Hunter" },
    { name: "Travis Hunter", reason: "Backup WR / starting CB" },
    { name: "Aaron Jones", reason: "MIN: Jones OR Mason" },
    { name: "Kenny Gainwell", reason: "Behind Bucky Irving" },
    { name: "Woody Marks", reason: "HOU: Montgomery OR Marks" },
    { name: "Jalen McMillan", reason: "TB WR3 behind Godwin/Egbuka" },
    { name: "Brenen Thompson", reason: "LAC WR4 — taxi only, not bench starter" },
  ],

  softAvoidTeams: ["LV"],

  notes: {
    Mahomes: "ACL+LCL Dec 2025. Week 1 is the goal, not locked. Purdy is the QB2.",
    "Breece Hall": "Right groin Aug 17 — weeks not months. Week 1 not locked.",
    "Braelon Allen": "Jets RB2. Breece handcuff.",
    "Dylan Sampson": "CLE RB2 behind Judkins.",
    "Isiah Pacheco": "DET RB2 behind Gibbs.",
    "Justin Jefferson": "MIN WR1.",
  },
};
