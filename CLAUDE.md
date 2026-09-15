# Zoltan Portfolio Website — operating rules

Independent project, created 2026-09-14. Zoltán's portfolio website: the work leads, it
looks excellent, and it works properly on a phone. Opened with `/portfolio`.

## What this is, and isn't

- A work-led portfolio. Galleries and case studies carry the site.
- **A services block is part of the site** (Zoltán, 2026-09-14, reversing his first brief).
  Start from CR 3.0 `content/engagements.md` and adapt it to a portfolio site.
- **No separate proof block** (Zoltán, 2026-09-14). The work carries the credibility.
- Not clarityrepublic.com. That is `~/Documents/Clarity Republic 3.0`, which this project
  reads and never edits.

## Direction: Clarity Republic 3.0, held loosely

Zoltán, 2026-09-14: lead by the strategy, design direction, his view and the reasoning in
Clarity Republic 3.0, *"but be more flexible and not so rigid."*

- **Take the thinking, not the locks.** CR 3.0's locked homepage, fixed section order,
  four-item nav, title tags and escalation rules don't bind here. Its reasoning does.
- **Still real constraints** (these are about truth and taste, not structure):
  - The reader test: a stranger gets who, what, why it matters and whether to trust it on
    one scan.
  - Never publish the fintech client's name or Maat's investment figures.
  - Reader copy: no dash punctuation (—, –, spaced hyphen), no self-applied adjectives,
    never imply a client didn't understand their own business.
- **Guidance, not procedure:** `decision-engine.md`'s kill list and tie-breakers. Run the
  kill list over copy before showing it; skip the rest where it gets in the way.
- **Design starting point:** CR 3.0 `reference/design-system.md` (Ink `#161616`, Paper
  `#FAF9F7`, one berry accent `#A31E5C` used sparingly, geometric grotesk headings, generous
  spacing, no decorative cards or shadows). Depart from it where a portfolio needs to
  (full-bleed imagery, darker gallery ground, bigger image scale) and note why in one line.

## Copy sources

Mine these before writing anything fresh. His recorded words beat generated drafts.

| What | Path | Use |
|---|---|---|
| Who he is, how to talk about him | CR 3.0 `backbone.md` | source |
| ICP, proof rules, identity | CR 3.0 `positioning.md` (its §0.1 overrides are noted inside) | source |
| Approved case copy, 12 company one-liners, About | CR 3.0 `content/work.md`, `content/about.md` | source, adapt freely |
| Services: three engagements | CR 3.0 `content/engagements.md` | source, adapt freely |
| Facts that may be used | CR 3.0 `decision-engine.md` §8 | source |
| Verified testimonials, names and companies | CR 3.0 `reference/wayback-2024-source.md` | source |
| His voice, 40,000 words recorded | `~/Documents/2026Claude/Clarity Republic/clients-raw-dump-interview-2026-08-19.md` | voice and facts |
| Powered Storage / Maat evidence | `~/Documents/2026Claude/Clarity Republic/clients-raw-dump-powered-storage-DRAFT.md` | source |
| Copy he killed, with his reasons | `~/Documents/2026Claude/Clarity Republic/00-brand-story/rejected.md` | taste reference |
| Logofolio page: intro, 4 step process, project titles, image map | `content/logofolio-source.md` (captured from zoltankosalogodesign.myportfolio.com, images in `raw/logofolio/`) | source, adapt freely; never the fintech logo |
| Haso case text: client, challenge, approach, outcome | `content/haso-behance-source.md` (Behance project capture) | source, adapt freely |
| Past clients, raw notes | `~/Documents/2026Claude/Clarity Republic/clients-raw-dump.md` | **read only, not a source** until Zoltán clears it |

## Images

- **Source:** `~/Library/CloudStorage/Dropbox/_Portfolio Zoltan`, organized 2026-09-14 by
  discipline, one folder per client (see its `_README.txt`). For a client with no usable
  export, the source files are in `~/Library/CloudStorage/Dropbox/_Design Work`.
- **Behance beats Dropbox** (Zoltán, 2026-09-14): `behance.net/zoltankosa` holds better versions
  of many exports. Where an image exists in both, use the Behance one (match by image
  fingerprint, not filename). Download the `source` size; Behance-only work can be picked too.
- **Other image sources used:** `Dropbox/_01 Eric Davis - Zoltan Kosa - Design/_Ploof Road`
  (Powered Storage, Work Containers, Flex Town; leave decks out, they may carry Maat figures)
  and live captures of powered-storage.com (Playwright with local Chrome, desktop + phone).
- **Powered Storage graphics:** `_Ploof Road/Decks/` (investor deck cover pages, InDesign PDFs)
  and `_Ploof Road/Marketing/` (print ads, Craigslist banners) hold the designed pieces, not
  just `Photos & Video/`. Prefer these over plain exterior/site photos when the ask is for
  graphics.
- **Emerging Property** images live at Dropbox top level `EP Designs old/`, separate from
  `_Portfolio Zoltan`. Unlike that folder it was never reorganised: no ready JPG/PDF exports,
  everything is InDesign/PSD source, huge files. Files dated 2015–16; confirm the client
  relationship is still current before publishing anything from it.
- **Logos:** Zoltán's logofolio site (`zoltankosalogodesign.myportfolio.com`) is the first logo
  source, then Behance, then Dropbox `03 Logos & Identity`. Paynuity logos and the "Create"
  mark never go on the site: a logo is the client's name.
- **Never modify, move or delete anything in Dropbox from this project.** Read, pick, copy
  out.
- About 15% of those files are online-only. Opening one downloads it: fine for picked
  images, never bulk-hash or bulk-open.
- Claude views the images itself and shortlists the best per client. Zoltán approves
  shortlists; he doesn't dig through folders.
- Picked originals go to `raw/` (git-ignored). Everything shown on the site is generated
  from there: resizes, AVIF/WebP, crops, device frames, covers. Nothing is hand-edited.

## Build

- **Stack (decided 2026-09-14, change only for a reason):** Astro static site, images
  through Astro's built-in asset pipeline (sharp) for responsive `srcset`. Hosting: GitHub
  Pages on `zoltan-kosa-sz` to start, own domain later.
- **Mobile-first.** Design at 380px first. Check every page at 380px and desktop before
  calling it done.
- Keep interaction light: category filter, gallery, swipeable lightbox, case study pages.
  When a feature starts needing real plumbing, say so and offer the plain version first.
- Check for large files before the first commit that includes images.

## Working pattern

- **Pilot first:** one category (`01 Websites & UI`), shown to Zoltán at phone and desktop
  width, before rolling out the rest.
- Don't stop for preference questions. Decide, note it in one line in `STATE.md`, keep
  moving. Ask only for a fact no judgment supplies.
- `STATE.md` holds the current phase and the single next action. Update it before a
  `/clear`.
