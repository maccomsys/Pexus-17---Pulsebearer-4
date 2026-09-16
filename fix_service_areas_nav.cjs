const fs = require('fs');
const path = require('path');
const dir = 'src/pages/service-areas/';
let files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).sort();

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace the old flex container with a 3-column one
  if (content.includes('className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-dark/10"')) {
    
    // The structure currently is:
    // <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-dark/10">
    //   <div className="w-full sm:w-1/2 flex justify-start">...</div>
    //   <div className="w-full sm:w-1/2 flex justify-end">...</div>
    // </div>
    
    content = content.replace(/className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-dark\/10"/, 
      'className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-dark/10"'
    );

    // Let's just use regex to insert the middle element.
    // We look for `</Link>\n            </div>\n            <div className="w-full sm:w-1/2 flex justify-end">` or similar
    
    // A more reliable way: just rebuild it based on files array
    // ... Actually, it's easier to just match the outer div and replace the contents if we know them.
  }
}
