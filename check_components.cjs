const fs = require('fs');
const appTsx = fs.readFileSync('src/App.tsx', 'utf8');
const importRegex = /import\s+(?:[A-Za-z0-9_]+)\s+from\s+['"]([^'"]+)['"]/g;
let match;
while ((match = importRegex.exec(appTsx)) !== null) {
  const imp = match[1];
  if (imp.startsWith('.')) {
    let p = 'src/' + imp.replace(/^\.\//, '');
    if (!fs.existsSync(p) && !fs.existsSync(p + '.tsx') && !fs.existsSync(p + '.ts')) {
      console.log("Missing import:", imp);
    }
  }
}
