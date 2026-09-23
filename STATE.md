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

**Design system swapped to Figma (2026-09-15):** Zoltán brought his own Figma design system
(file "Clarity Republic," `Clarity 3.0` page, "Visual Foundation — Design System" frame) to
replace the CR 3.0-adapted tokens. Full swap, confirmed by Zoltán over the tokens-only or
mockup-first alternatives. Rebuilt: `tokens.css` (monochrome — ink `#0F0F0F`, no accent;
Sora weight-by-size + Instrument Serif; 8px spacing scale), nav weight, homepage (centered
thin-display hero with eyebrow below headline, services as a numbered 01/02/03 list instead
of cards, About as an asymmetric split with a Focus/Approach/Location facts column), the
work gallery, and the Powered Storage case study header (contained image, title+dek left,
category tags right — matches Section 5's own "Powered Storage" composition, tags "Brand
Identity · Digital Platform · GTM" taken directly from it). Checked in browser at 1440px,
clean. Detail in `CLAUDE.md` under Direction. Not yet re-verified at phone width after this
change.

**Gallery + lightbox added (2026-09-15):** every card and case study now shows a main image
in a fixed aspect ratio (4/3 default, so the work-gallery grid aligns; case study heroes can
override — Powered Storage uses 16/9 to match its native ratio and avoid cropping the
headline) with a thumbnail strip underneath, all of it in a new shared
`src/components/Gallery.astro`. Any image click opens `src/components/Lightbox.astro` (one
global instance in `Base.astro`): full client image set, scroll or arrow-key/button
navigation, counter, Escape/backdrop to close. Checked in browser — thumbnails, aspect
ratios, click-to-open, arrow/keyboard nav and close all confirmed working. Detail in
`CLAUDE.md` under Build.

**Narrow-width check (2026-09-15):** `resize_window` still wouldn't hold exactly 380px this
session (landed ~614px after a few retries) — checked at that width instead: no horizontal
overflow anywhere (home, work gallery, case study), services list and about split both
stack to one column, gallery thumbnails fit without needing to scroll. Fixed one real gap
found at that width: the lightbox's fixed 56px image padding ate too much of the frame on a
narrow viewport, now steps down under 640px. Still not the literal 380px CLAUDE.md asks
for — flag if you spot anything off checking it yourself.

**Mobile overflow fixed (2026-09-15):** Zoltán reported images pushing the window right on
phone. Cause: the two-column `.grid` on `/` and `/work/` sets `grid-template-columns: 1fr`
with no `min-width` guard, and grid items default to `min-width: auto` — for a replaced
element like `<img>`, percentage widths don't count toward that automatic minimum, so the
browser sized the track to the image's *intrinsic* pixel width instead of the CSS
`width: 100%`. Fixed with `min-width: 0` on `.card` in `ClientCard.astro` (shared by both
grids). Verified with a same-origin iframe pinned to 380px width (the real `resize_window`
tool still won't hold a literal 380px this session) — `scrollWidth` now equals `clientWidth`
on `/`, `/work/`, and the Powered Storage case study, no horizontal overflow.

**Mobile lightbox + card layout (2026-09-15):** lightbox on mobile now runs the image full
width with prev/next/count moved into a control row below it instead of overlaid on the
sides (`Lightbox.astro`, grid layout under 640px). `ClientCard.astro` eyebrow moved to sit
under the heading instead of above it. Pushed.

**About photo added (2026-09-15):** a portrait of Zoltán now sits beside the "About" copy on
the homepage (`raw/about/headshot.jpg`, from the portrait PSD in Dropbox `Clarity Republic/
07-imagery`, flattened via `sips`). Three-column split on desktop (photo · copy · facts),
stacks full-width above the copy on mobile. Checked in browser at 1440px and 380px, no
overflow. Not yet pushed — flag if a different/updated photo should replace it later.

**Gallery/lightbox refinements (2026-09-17):** thumbnail strip removed from `Gallery.astro`
(main image only); clicking it still opens the full lightbox with prev/next through every
image. Lightbox: tall images (height/width > 1.8, e.g. full-page screenshots) now render at
natural width with vertical scroll instead of being squeezed to fit; mobile close button
moved into the same row as prev/next, centered between them; prev/next arrows now sit on a
solid `--ink` filled rectangle, 20px padding, no border. `ClientCard.astro` changed from a
2-up card grid to one full-width row per client, image left / text right (stacks on mobile);
the outer grids on `/` and `/work/` are single-column now.

**Image resolution pass (2026-09-17), on request ("reupload higher resolution images..."):**
checked every picked image in the 17-client gallery against its Dropbox/Behance source,
swapping in the highest-res version of the *same* shot (never a different crop or a new
pick). Upgraded, 2-4x resolution gain: New Era (3 of 4), Waller County (all 3), Hypergrowth
(all 5), Demand IQ (2 of 2), Income Property (all 3, INC2 re-cropped from the untouched
full-page source), Haso (all 3), Schropp (cover only). **No local upgrade exists** (already
native resolution or Behance-only, would need live web access to improve further):
Ranchbyowner RBO4, Hilary Brooks HB1-5, Schropp SCH2/SCH7 (Behance campaign, not in the
Dropbox print-brochure PDF), Fintech FIN1-5 (Behance illustration crops), Lee Yuen LY5
(no export ever existed), Powered Storage PS8/PS10/PS12 (PS10/PS12 are live-site screenshots,
could be re-captured at higher DPI in a follow-up browser session; PS8 is a deck slide).

**Next action (Zoltán):** review the redesign + gallery/lightbox (`npm run dev`) at phone
and desktop width, and say which of the 17 gallery clients get a full case study page next
— the new case-study template (and `<Gallery>`) should carry over to whichever client is
next.

**After that:** build the next case study page(s) to the new template, then roll out beyond
the pilot category.

**Open, decide when it comes up:** site name and domain; whether the services block shows prices; which clients get a full case study
page and which stay gallery-only.
