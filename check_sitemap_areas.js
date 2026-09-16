import fs from 'fs';
import path from 'path';

// Read sitemapData.ts
const sitemapData = fs.readFileSync('src/data/sitemapData.ts', 'utf8');

// Extract all paths from SERVICE_AREAS
const match = sitemapData.match(/export const SERVICE_AREAS: SitemapLink\[\] = \[([\s\S]*?)\];/);
if (!match) {
  console.log("Could not find SERVICE_AREAS");
  process.exit(1);
}

const serviceAreasStr = match[1];
const sitemapPaths = [];
const regex = /"path":\s*"([^"]+)"/g;
let m;
while ((m = regex.exec(serviceAreasStr)) !== null) {
  sitemapPaths.push(m[1]);
}

// Read actual files in src/pages/service-areas/
const files = fs.readdirSync('src/pages/service-areas/')
  .filter(f => f.endsWith('.tsx'))
  .map(f => `/service-areas/${f.replace('.tsx', '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`);

// Find missing
const missing = files.filter(f => !sitemapPaths.includes(f));
console.log("Missing from sitemap:", missing.length);
console.log(missing);

// Find extra
const extra = sitemapPaths.filter(f => !files.includes(f) && f !== '/service-areas');
console.log("Extra in sitemap:", extra.length);
console.log(extra);

