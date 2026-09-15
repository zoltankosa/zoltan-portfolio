import raw from "../../content/shortlist-manifest.json";

export type ManifestItem = {
  label: string;
  type: "cover" | "shot";
  role: string;
  src: string | null;
  source_note: string;
};

export type ManifestClient = {
  name: string;
  sector: string;
  line: string;
  items: ManifestItem[];
};

type ManifestFile = {
  _meta: Record<string, string>;
  clients: Record<string, ManifestClient>;
};

const data = raw as ManifestFile;

// Logofolio and the plain image left-out list aren't client work; keep the pilot
// gallery to actual client sections.
const EXCLUDE_SLUGS = new Set(["logos"]);

export function getClients(): Array<{ slug: string } & ManifestClient> {
  return Object.entries(data.clients)
    .filter(([slug]) => !EXCLUDE_SLUGS.has(slug))
    .map(([slug, client]) => ({ slug, ...client }));
}

export function getClient(slug: string) {
  return data.clients[slug];
}
