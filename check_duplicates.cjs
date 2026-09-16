const fs = require('fs');

const sitemapData = fs.readFileSync('src/data/sitemapData.ts', 'utf8');
const sitemapRoutes = [];
let match;
const sitemapRegex = /"path"\s*:\s*['"]([^'"]+)['"]|path\s*:\s*['"]([^'"]+)['"]/g;
while ((match = sitemapRegex.exec(sitemapData)) !== null) {
  sitemapRoutes.push(match[1] || match[2]);
}

const counts = {};
sitemapRoutes.forEach(r => {
  counts[r] = (counts[r] || 0) + 1;
});

let dups = [];
for (const [r, count] of Object.entries(counts)) {
  if (count > 1) dups.push(r);
}

console.log("Duplicates in Sitemap:");
console.log(dups);
