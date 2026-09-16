const fs = require('fs');

const appTsx = fs.readFileSync('src/App.tsx', 'utf8');
const appRoutes = [];
let match;
const regex = /<Route\s+path=['"]([^'"]+)['"]/g;
while ((match = regex.exec(appTsx)) !== null) {
  appRoutes.push(match[1]);
}

const sitemapData = fs.readFileSync('src/data/sitemapData.ts', 'utf8');
const sitemapRoutes = [];
const sitemapRegex = /"path"\s*:\s*['"]([^'"]+)['"]|path\s*:\s*['"]([^'"]+)['"]/g;
while ((match = sitemapRegex.exec(sitemapData)) !== null) {
  sitemapRoutes.push(match[1] || match[2]);
}

const appRoutesSet = new Set(appRoutes);
const sitemapRoutesSet = new Set(sitemapRoutes);

let missing = [];
for (const r of appRoutesSet) {
  if (!sitemapRoutesSet.has(r) && !r.includes(':') && r !== '/*') {
    missing.push(r);
  }
}

console.log("=== ROUTES IN APP.TSX BUT NOT IN SITEMAP ===");
console.log(missing.join('\n'));

let extra = [];
for (const r of sitemapRoutesSet) {
  if (!appRoutesSet.has(r)) {
    extra.push(r);
  }
}
console.log("\n=== ROUTES IN SITEMAP BUT NOT IN APP.TSX ===");
console.log(extra.join('\n'));
