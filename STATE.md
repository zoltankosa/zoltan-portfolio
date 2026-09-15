# State

**Phase:** 1, pilot built (2026-09-15). Astro scaffold, homepage (hero, selected work,
services, about), the `/work/` gallery (17 clients from the shortlist) and one case study
(`/work/powered-storage/`), all wired to `content/shortlist-manifest.json` and images in
`raw/`.

**Shortlist done (2026-09-14), waiting on Zoltán:** 11 clients. From `01 Websites & UI`:
Demand IQ, New Era, Haso, Waller County, Crystalcore (5 folders grouped), Hypergrowth,
Hilary Brooks, Caplid. Added on request: Lee Yuen (`_Design Work`, no export exists),
Powered Storage (`Dropbox/_01 Eric Davis - Zoltan Kosa - Design/_Ploof Road`, decks left out
for Maat figures), Schropp (`04 Brochures` + `_Design Work` mockups). Dropped by Zoltán:
DIQ5 HAS3 CC3 CAP2 LY2. Also added: 5 live captures of powered-storage.com (desktop + phone,
full pages, Playwright + local Chrome), and from behance.net/zoltankosa: DIQ7-8, CAP5 and a
Logofolio set (Create mark excluded, it names the fintech). Behance and live captures sit in
the session scratchpad until approval, then go to `raw/`. Contact sheet artifact:
https://claude.ai/code/artifact/192663a7-086c-49f2-9f6b-0b9bab14bb54 (build files in session
scratchpad, rebuildable from the paths shown on it). Paynuity left out (the fintech, can't be
named). Nothing copied to `raw/` yet.

Zoltán, 2026-09-14: Behance images beat the Dropbox exports, so where an image exists in both,
use the Behance version. Applied to 19 picks (SCH1 SCH2 SCH7 DIQ6 NE1-4 LY5 HAS2 HAS5 WAL1-3
HYP1-5), matched by image fingerprint. Rule holds for the rollout of other categories too.

Fintech illustration set added on request (FIN1-5, Behance crops). Checked in full: no client
name on it. Credits two other illustrators, so copy says art direction, not "illustrated by".

Also 2026-09-14: 5 more clients looked at on request and added (Ranchbyowner, Apis Rex, Income
Property, Silvatech, Ász Kreatív); Ag Exchange out (placeholder text), Scott Weaver alternate.
Logofolio site captured: images in `raw/logofolio/home/`, text + image map in
`content/logofolio-source.md`. Logo picker artifact (43 logos, all sources, deduped): done.

Top logos picked by Zoltán (2026-09-14): Powered Storage, Lee Yuen, Bébio, Trouble Mantis, Kleex,
AI Art Alliance, DZL Workwear, Haso cap, Happy Baby, Probulus. Originals copied to `raw/logos/`
(some are .gif files but all are single frame; nothing animates).

Haso set rebuilt from the Behance project (2026-09-14, on request): HAS1-5 are the 5 Behance
images in project order, old HAS codes no longer apply. Project text saved to
`content/haso-behance-source.md`.

Zoltán removed images live via the sheet's tick-and-delete picker (2026-09-14): PS5 PS8 PS9
PS14 PS15, DIQ7 DIQ8, HAS4 HAS5, CAP5, APX4, and all of Ász Kreatív (section dropped, folder
still available if ever wanted back). Sheet now: 17 clients, 86 images. `raw/` untouched by
this, since only logos were copied there so far.

**Emerging Property added (2026-09-14), third on the sheet:** UK property investment brand,
found in Dropbox top level `EP Designs old/` (not `_Portfolio Zoltan`, not reorganised, files
dated 2015–16). Not in CR 3.0. First pass used a weak infographic and a generic stock photo;
swapped on Zoltán's word for 6 stronger images: the investor-report cover mockup, the
exhibition flyer spread, and 4 architectural CGI renders (Tudor Studios exterior, Jubilee
Court at night, a Tudor cinema room, a Park Lane street view). Sourced from InDesign/PSD
files via sips, no ready exports existed. **Open: confirm the client relationship is still
current before this goes live** — the folder name and file dates suggest it's dormant.

**Powered Storage rebuilt with designed graphics (2026-09-14, on Zoltán's word "these are no
good... I want graphics not simply images"):** dug into `_Ploof Road/Decks/` and
`Marketing/` (not just Photos & Video). New PS1-6: 4 investor-deck covers (Work Containers,
Disaster Relief, Segment Overview, 2026 Bank Loan — shows the Maat sub-brand family), the
print-ad-sizes sheet, and a Flex Town Craigslist banner. Kept the brand identity PDF,
business card, one web ad and the 3 live site captures; dropped the plain exterior/aerial/
yard/Instagram photos. PS now 12 images total, cover + 11.

Zoltán tick-deleted more while the market-demand deck was being worked (2026-09-14): PS2 PS4
PS6 PS11 PS13, and Emerging Property cut down to just EP2 (the flyer) — EP1 EP3 EP4 EP5 EP6
all gone. Sheet synced to match. Powered Storage: cover + 7. Emerging Property: 1 image, no
separate cover.

**Pilot reviewed (2026-09-15):** desktop (1440px) checked in browser, clean. Mobile check
hit a tool bug (`resize_window` in claude-in-chrome wouldn't hold a requested width, landed
around 522px instead of 380px) — verified at that width instead: no horizontal overflow,
single-column layout holds (CSS breakpoint is 720px, so 380 should behave the same, but
this isn't a substitute for the literal 380px check). Committed to git.

**Next action (Zoltán):** confirm the 380px view yourself (`npm run dev`, phone-width
browser) since the tool couldn't get there, and say which of the 17 gallery clients get a
full case study page next.

**After that:** build the next case study page(s), then roll out beyond the pilot category.

**Open, decide when it comes up:** site name and domain; whether the services block shows prices; which clients get a full case study
page and which stay gallery-only.
