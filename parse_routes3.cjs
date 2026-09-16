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

let missing = [];
for (const r of appRoutesSet) {
  if (!sitemapRoutesSet.has(r) && !r.includes(':') && r !== '/*' && !r.startsWith('/service-areas/')) {
    missing.push(r);
  }
}

console.log("Missing NON-service-area routes:");
console.log(missing);
