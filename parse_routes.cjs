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
const sitemapRegex = /path:\s*['"]([^'"]+)['"]/g;
while ((match = sitemapRegex.exec(sitemapData)) !== null) {
  sitemapRoutes.push(match[1]);
}

const appRoutesSet = new Set(appRoutes);
const sitemapRoutesSet = new Set(sitemapRoutes);

console.log("=== ROUTES IN APP.TSX BUT NOT IN SITEMAP ===");
for (const r of appRoutesSet) {
  if (!sitemapRoutesSet.has(r) && !r.includes(':') && r !== '/*') {
    console.log(r);
  }
}

console.log("\n=== ROUTES IN SITEMAP BUT NOT IN APP.TSX ===");
for (const r of sitemapRoutesSet) {
  if (!appRoutesSet.has(r)) {
    console.log(r);
  }
}
