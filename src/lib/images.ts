// Maps every picked source image in raw/ (client-slug folders, gitignored) to its
// Astro ImageMetadata, keyed the way the manifest refers to it: "<slug>/<LABEL>".
// raw/ holds the best-quality copy of each pick; everything shown on the site is
// generated from here (resize, format, crop) by Astro's asset pipeline, nothing
// hand-edited. See CLAUDE.md > Images.

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/raw/*/*.{jpg,jpeg,png,gif}",
  { eager: true }
);

const byKey = new Map<string, ImageMetadata>();

for (const [path, mod] of Object.entries(modules)) {
  // path like "/raw/ps/PS1.jpg" -> key "ps/PS1"
  const match = path.match(/\/raw\/([^/]+)\/([^/.]+)\.[a-z]+$/i);
  if (!match) continue;
  const [, slug, label] = match;
  byKey.set(`${slug}/${label}`, mod.default);
}

export function getRawImage(slug: string, label: string): ImageMetadata | undefined {
  return byKey.get(`${slug}/${label}`);
}

export function getRawImageCount(): number {
  return byKey.size;
}
