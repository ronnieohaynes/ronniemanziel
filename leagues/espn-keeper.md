# ESPN Keeper League

- **Platform:** ESPN
- **League ID:** `602581801`
- **Link:** https://fantasy.espn.com/football/league?leagueId=602581801
- **Type:** Keeper league
- **Season:** 2026
- **Access:** Private (API returns `AUTH_LEAGUE_NOT_VISIBLE` without ESPN cookies)

## Status
Drafting today — settings/rosters/keepers **not yet readable** from this agent.

## To fill in (paste or screenshot)
- [ ] Number of teams
- [ ] Scoring (PPR? half-PPR? pass TD = 4 or 6?)
- [ ] Starting lineup / roster slots
- [ ] Keeper rules (how many keepers, round cost / escalation)
- [ ] Who each team is keeping (or at least my keepers + notable others)
- [ ] My team name / draft slot
- [ ] Draft order / current pick if live

## Notes
Keeper leagues differ from dynasty: value the **keeper round cost** vs player's
ADP. A player kept later than his ADP = strong keeper value. Draft strategy
adjusts around which players others are keeping (inflates ADP of non-kept
players).

## Auth options for live pull
To let this agent read ESPN directly, provide either:
1. Screenshots / paste of Settings → Scoring, Roster, Keepers, and Draft, or
2. ESPN cookies `espn_s2` + `SWID` as secrets (never paste them in chat if you
   can add them as environment secrets instead)
