/** Editable overlay on top of live Sleeper data. */
window.STRATEGY = {
  leagueId: "1394078108436418560",
  draftId: "1394078109665366016",
  userId: "1150291771215278080",
  slot: 7,
  sleeperLeague: "https://sleeper.com/leagues/1394078108436418560",

  maxReach: 20,

  rules: [
    "Banner always names who to TAKE — never only who to avoid.",
    "2 QB / 2 TE is enough in 1QB, no TE premium.",
    "Last picks: preference (Bateman) then taxi/IR dart.",
  ],

  advice: { pick: 258 },

  queue: [
    {
      name: "Rashod Bateman",
      pos: "WR",
      slot: "bench",
      afterPick: 250,
      depthCharts: [
        { source: "Ravens chart", role: "WR2 opposite Zay Flowers" },
        { source: "Camp", role: "Lane / Walker pushing — bounce-back not locked" },
        { source: "Sleeper", role: "BAL LWR #2" },
      ],
      outlook:
        "Your bounce-back bet. Charted WR2, age 26. Shedeur is gone — take Bateman now at 258 so he doesn't walk at 259–270.",
      reasons: [
        "**Take Bateman at pick 258.**",
        "ADP ~277 — a bit early, but only two picks left and you want him.",
        "Named BAL WR2; Lane/Walker are the risk, not a blank role.",
        "Bench WR — not taxi (veteran).",
      ],
    },
    {
      name: "Xavier Legette",
      pos: "WR",
      slot: "bench",
      afterPick: 260,
      depthCharts: [
        { source: "Sleeper", role: "CAR RWR #3" },
        { source: "Outlook", role: "WR3 behind McMillan/Coker with Brazzell out" },
      ],
      outlook:
        "Panthers WR3 path with Brazzell on IR. On-time near pick 271 (ADP ~277).",
      reasons: [
        "Pick **271** if Bateman is gone — young bench WR with a clearer 2026 path.",
      ],
    },
    {
      name: "Elijah Tau-Tolliver",
      pos: "RB",
      slot: "taxi",
      afterPick: 260,
      depthCharts: [
        { source: "Sleeper", role: "BAL RB — undrafted rookie" },
      ],
      outlook: "Optional taxi dart at 271 if you want a rookie stash instead of Legette.",
      reasons: [
        "Taxi-eligible rookie — only if you prefer taxi over Legette.",
      ],
    },
    {
      name: "Chris Brazzell",
      pos: "WR",
      slot: "bench",
      afterPick: 265,
      depthCharts: [
        { source: "Panthers", role: "Out 2026 — torn LCL, IR" },
      ],
      outlook: "IR lottery for 2027 only. Take last if nothing else appeals.",
      reasons: [
        "Goes on **IR**, not taxi. Zero 2026 value — 2027 stash only.",
      ],
    },
  ],

  skip: [
    { name: "Brandon Aiyuk", reason: "Reserve/Left Squad — not paid" },
    { name: "Tyreek Hill", reason: "Unsigned FA, multi-ligament knee" },
    { name: "Ricky Pearsall", reason: "Out 2026 (PCL)" },
    { name: "Chimere Dike", reason: "Returner / WR5" },
    { name: "Travis Kelce", reason: "TE3" },
    { name: "Mason Taylor", reason: "TE3" },
    { name: "C.J. Stroud", reason: "QB3" },
    { name: "Hunter Henry", reason: "TE3" },
    { name: "Cade Otton", reason: "TE3 — Pitts and Kincaid start" },
    { name: "Pat Freiermuth", reason: "TE3" },
    { name: "Adonai Mitchell", reason: "Disputed role + poor outlook" },
    { name: "Kayshon Boutte", reason: "NE WR bubble" },
    { name: "Troy Franklin", reason: "DEN WR4–5 — you roster Sutton" },
    { name: "Brian Robinson", reason: "Behind Bijan" },
    { name: "James Conner", reason: "You roster Benson" },
    { name: "Jack Bech", reason: "Raiders soft-avoid" },
    { name: "Calvin Ridley", reason: "Age 31 — wrong phase vs Bateman/Legette" },
  ],

  crowded: [
    { name: "Oronde Gadsden", reason: "LAC TE committee" },
    { name: "Travis Hunter", reason: "Offense share unknown" },
    { name: "Trey Benson", reason: "ARI 4-way backfield" },
    { name: "Jaylen Wright", reason: "MIA: Wright OR Gordon behind Achane" },
    { name: "Rashod Bateman", reason: "BAL: Flowers, Bateman, Lane, Walker" },
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
    "Trey Benson": "ARI committee.",
    "Jauan Jennings": "MIN WR3.",
    "Elic Ayomanor": "TEN WR4 bench.",
  },
};
