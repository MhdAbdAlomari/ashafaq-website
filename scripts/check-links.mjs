// Walks every .html file in out/, extracts internal hrefs (starting with "/"),
// and reports any href whose target doesn't resolve to a real file/route.
// Run: node scripts/check-links.mjs   (after `npm run build`)
import { readdir, readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else if (e.isFile() && full.endsWith(".html")) files.push(full);
  }
  return files;
}

/** Turn an href like "/branches/al-manar/" into a filesystem path we expect to exist. */
function targetPath(href) {
  // Drop query/hash
  const clean = href.split("#")[0].split("?")[0];
  if (!clean.startsWith("/")) return null;
  const rel = clean === "/" ? "/index.html" : clean;
  // Directory-style URL (trailing slash) → look for index.html
  if (rel.endsWith("/")) return path.join(OUT, rel, "index.html");
  // File-style URL — check as-is
  return path.join(OUT, rel);
}

const skipPrefixes = ["/_next/", "/images/"]; // asset paths; presence checked separately if needed
const skipExact = new Set(["/robots.txt", "/sitemap.xml", "/icon.png", "/apple-icon.png", "/favicon.ico"]);

async function main() {
  if (!existsSync(OUT)) {
    console.error("out/ does not exist — run `npm run build` first.");
    process.exit(2);
  }

  const htmls = await walk(OUT);
  const hrefRe = /href="([^"]+)"/g;
  const broken = [];
  const seen = new Set();
  let hrefsChecked = 0;

  for (const file of htmls) {
    const html = await readFile(file, "utf8");
    const sourcePage = "/" + path.relative(OUT, file).replaceAll("\\", "/").replace(/index\.html$/, "");
    for (const m of html.matchAll(hrefRe)) {
      const raw = m[1];
      if (!raw.startsWith("/")) continue; // external, hash, mailto, tel, etc.
      if (skipPrefixes.some((p) => raw.startsWith(p))) continue;
      if (skipExact.has(raw.split("?")[0])) continue;

      const key = `${sourcePage} :: ${raw}`;
      if (seen.has(key)) continue;
      seen.add(key);
      hrefsChecked++;

      const target = targetPath(raw);
      if (!target) continue;
      try {
        await stat(target);
      } catch {
        broken.push({ sourcePage, href: raw, expected: path.relative(OUT, target) });
      }
    }
  }

  console.log(`Scanned ${htmls.length} HTML files, checked ${hrefsChecked} unique internal hrefs.`);
  if (broken.length === 0) {
    console.log("✓ No broken internal links.");
  } else {
    console.log(`✗ ${broken.length} broken link(s):`);
    for (const b of broken) {
      console.log(`  ${b.sourcePage}  →  ${b.href}   (expected: out/${b.expected})`);
    }
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
