const fs = require('fs');
const path = require('path');

const dir = 'src/pages/service-areas/';
let files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).sort();

function parseLabel(file) {
    const base = file.replace('.tsx', '');
    // e.g. AccraToBole -> Accra to Bole
    return base.replace(/([A-Z])/g, ' $1').trim().replace(/ To /g, ' to ');
}

function parsePath(file) {
    const base = file.replace('.tsx', '');
    return '/service-areas/' + base.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already added
    if (content.includes('Previous Area')) {
        continue;
    }

    const prevFile = i > 0 ? files[i - 1] : null;
    const nextFile = i < files.length - 1 ? files[i + 1] : null;

    let prevBlock = '';
    if (prevFile) {
        prevBlock = `
            <div className="w-full sm:w-1/2 flex justify-start">
              <Link to="${parsePath(prevFile)}" className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full">
                <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Previous Area</div>
                  <div className="text-sm font-bold text-dark group-hover:text-accent truncate">${parseLabel(prevFile)}</div>
                </div>
              </Link>
            </div>`;
    }

    let nextBlock = '';
    if (nextFile) {
        nextBlock = `
            <div className="w-full sm:w-1/2 flex justify-end">
              <Link to="${parsePath(nextFile)}" className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full text-right">
                <div className="overflow-hidden">
                  <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Next Area</div>
                  <div className="text-sm font-bold text-dark group-hover:text-accent truncate">${parseLabel(nextFile)}</div>
                </div>
                <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            </div>`;
    }

    const navBlock = `
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-dark/10">
            ${prevBlock}
            ${nextBlock}
          </div>
    `;

    // Ensure imports
    if (!content.includes('import { Link } from \'react-router-dom\'') && !content.includes('import { Link, ')) {
        content = content.replace(/(import React.*?;\n)/, "$1import { Link } from 'react-router-dom';\n");
    }

    if (!content.includes('ChevronRight')) {
        content = content.replace(/import {([^}]+)} from 'lucide-react';/, "import { $1, ChevronRight } from 'lucide-react';");
    }

    // Insert nav block after the closing div of the main content block.
    // The main content block is the one with `shadow-sm mb-12` usually, but we need to inject inside it, at the end, or right after it.
    // Let's inject it inside the `max-w-4xl` container, right before the closing `</div>` of it.
    // Actually, looking at AccraToBole.tsx:
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    
    // We can just find the second to last `</div>` inside `bg-slate-50 min-h-screen`
    // Let's search for `</div>\n        </div>\n      </div>\n    </>`
    
    const targetMatch = content.match(/(\s+)<\/div>\n\s+<\/div>\n\s+<\/div>\n\s+<\/>/);
    if (targetMatch) {
        const indent = targetMatch[1];
        content = content.replace(/(\s+)<\/div>\n\s+<\/div>\n\s+<\/div>\n\s+<\/>/, `\n${navBlock}$1</div>\n      </div>\n    </div>\n    </>`);
        fs.writeFileSync(filePath, content, 'utf8');
    } else {
        console.log("Could not match target in: " + file);
    }
}
console.log('Done adding prev/next to service areas.');
