const fs = require('fs');

const actualRoutesStr = fs.readFileSync('actual_routes.txt', 'utf8');
const actualRoutes = new Set(actualRoutesStr.split('\n').map(r => r.trim()).filter(Boolean));

const sitemapFileStr = fs.readFileSync('src/data/sitemapData.ts', 'utf8');
const sitemapPaths = [];
const regex = /path:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = regex.exec(sitemapFileStr)) !== null) {
  sitemapPaths.push(match[1]);
}

const sitemapSet = new Set(sitemapPaths);

console.log("In actual routes but not in sitemap:");
for (const r of actualRoutes) {
  if (!sitemapSet.has(r) && !r.includes(':') && r !== '/*') {
    console.log(r);
  }
}

console.log("\nIn sitemap but not in actual routes:");
for (const r of sitemapSet) {
  if (!actualRoutes.has(r)) {
    console.log(r);
  }
}
