const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Base bg-accent with text-white
    content = content.replace(/className=(?:\{`|["'])(.*?)(?:`\}|["'])/g, (match, classes) => {
      // If it contains EXACTLY `bg-accent` (not hover:bg-accent), we swap text-white to text-dark
      if (classes.split(/\s+/).includes('bg-accent')) {
         let newClasses = classes.replace(/\btext-white\b/g, 'text-dark');
         return match.replace(classes, newClasses);
      }
      return match;
    });

    // 2. hover:bg-accent with hover:text-white or text-white
    content = content.replace(/className=(?:\{`|["'])(.*?)(?:`\}|["'])/g, (match, classes) => {
      let tokens = classes.split(/\s+/);
      if (tokens.includes('hover:bg-accent')) {
         let newClasses = classes.replace(/\bhover:text-white\b/g, 'hover:text-dark');
         
         // If it has text-white, but NO base bg-accent, it means it's white initially. 
         // When it hovers to bg-accent, it needs to be dark.
         if (tokens.includes('text-white') && !tokens.includes('bg-accent')) {
            if (!newClasses.includes('hover:text-dark')) {
                newClasses += ' hover:text-dark';
            }
         }
         return match.replace(classes, newClasses);
      }
      return match;
    });

    // 3. group-hover:bg-accent 
    content = content.replace(/className=(?:\{`|["'])(.*?)(?:`\}|["'])/g, (match, classes) => {
      let tokens = classes.split(/\s+/);
      if (tokens.includes('group-hover:bg-accent')) {
         let newClasses = classes;
         if (tokens.includes('text-white') && !tokens.includes('bg-accent')) {
            if (!newClasses.includes('group-hover:text-dark')) {
                newClasses += ' group-hover:text-dark';
            }
         } else if (tokens.includes('group-hover:text-white')) {
            newClasses = newClasses.replace(/\bgroup-hover:text-white\b/g, 'group-hover:text-dark');
         }
         return match.replace(classes, newClasses);
      }
      return match;
    });

    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
});
