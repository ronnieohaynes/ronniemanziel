# Ronnie Manziel — Fantasy Football HQ

Manager: **Ronnie** (Sleeper: `oreokidronaldo`)
Season: **2026**

Home base for managing fantasy football teams. The live site is a **Patio Boys–style Team Intel** dashboard for Bada Bing dynasty.

## Leagues

| League | Platform | Type | Status | File |
|---|---|---|---|---|
| Bada Bing | Sleeper | Dynasty, 1QB, full PPR | Startup draft complete · in season | [leagues/sleeper-bada-bing.md](leagues/sleeper-bada-bing.md) |
| Why So Serious | ESPN | Keeper (2027+); **2026 full redraft** | Draft complete | [leagues/espn-keeper.md](leagues/espn-keeper.md) |

## Quick links
- **[Team Intel dashboard](https://ronnieohaynes.github.io/ronniemanziel/)** — live Sleeper rosters, depth, picks, trades
- [Dynasty draft board / BPA notes](draft-board.md)
- [Sleeper: Bada Bing](leagues/sleeper-bada-bing.md)
- [ESPN keeper league](leagues/espn-keeper.md)

## Live dashboard (Team Intel)

**Website:** [https://ronnieohaynes.github.io/ronniemanziel/](https://ronnieohaynes.github.io/ronniemanziel/)

Modeled after Patio Boys Team Intel. Defaults to **oreokidronaldo**; switch franchises with the team chips.

Shows:
- Hero (record, roster size, age / top-ADP buckets)
- Dynasty Value roster table (ADP · age · injury notes)
- Depth chart from Sleeper starters + ADP
- Future draft picks (2027–2029)
- Team status + trade intel
- League rules / soft-avoid notes

Refresh pulls latest Sleeper data. Player metadata caches in the browser for 12 hours.

Deploy: GitHub Pages via `.github/workflows/pages.yml` on push to `main` (uploads `dashboard/`).

Local:

```bash
python3 dashboard/serve.py
```

http://127.0.0.1:8080

Edit `dashboard/strategy.js` for manager notes and standing rules.
ADP numbers come from `dashboard/adp.js`. Rebuild with `python3 scripts/generate_sleeper_adp.py`.

## Dynasty rules of thumb (Bada Bing scoring)
- **Best player available** for the format, not raw weekly projections.
- Prioritize young, high-volume **target earners** (full PPR, 2 FLEX = can start 4 WR).
- **Wait on QB** — 1QB league with 4-pt pass TDs suppresses QB value.
- **No TE premium** — don't reach for TE on scoring alone.
- **No K/DST** starting slots — never roster them.
- Soft **avoid Raiders** unless clearly BPA by a wide margin.
- **ADP is a price tag**, not a reason to trade or hold.
