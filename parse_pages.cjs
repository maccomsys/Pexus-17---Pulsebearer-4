const fs = require('fs');
const path = require('path');

const appTsx = fs.readFileSync('src/App.tsx', 'utf8');
const appRoutes = [];
let match;
const regex = /<Route\s+path=['"]([^'"]+)['"]/g;
while ((match = regex.exec(appTsx)) !== null) {
  appRoutes.push(match[1]);
}

const files = fs.readdirSync('src/pages').filter(f => f.endsWith('.tsx'));
const pageNames = files.map(f => f.replace('.tsx', ''));

const importedPages = new Set();
const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+['"]\.\/pages\/([^'"]+)['"]/g;
while ((match = importRegex.exec(appTsx)) !== null) {
  importedPages.add(match[2]);
}

const unrouted = pageNames.filter(p => !importedPages.has(p));
console.log("Pages in src/pages but not imported in App.tsx:");
console.log(unrouted);
