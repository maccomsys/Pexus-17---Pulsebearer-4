const fs = require('fs');
const path = require('path');
const dir = 'src/pages/service-areas/';
let files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).sort();

function parseLabel(file) {
    const base = file.replace('.tsx', '');
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

    const prevFile = i > 0 ? files[i - 1] : null;
    const nextFile = i < files.length - 1 ? files[i + 1] : null;

    let prevBlock = '';
    if (prevFile) {
        prevBlock = `
            <div className="w-full sm:w-1/3 flex justify-start">
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
    } else {
        prevBlock = `<div className="w-full sm:w-1/3"></div>`;
    }

    let nextBlock = '';
    if (nextFile) {
        nextBlock = `
            <div className="w-full sm:w-1/3 flex justify-end">
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
    } else {
        nextBlock = `<div className="w-full sm:w-1/3"></div>`;
    }
    
    const backBlock = `
            <div className="w-full sm:w-1/3 flex justify-center mt-4 sm:mt-0">
              <Link to="/service-areas" className="group flex items-center justify-center gap-2 text-dark/70 hover:text-accent font-bold transition-colors">
                <span>All Areas</span>
              </Link>
            </div>`;

    const navBlock = `          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-dark/10">
            ${prevBlock}
            ${backBlock}
            ${nextBlock}
          </div>`;

    // Try to replace the existing nav block if it exists
    const existingNavRegex = /<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-dark\/10">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/>/;
    
    if (existingNavRegex.test(content)) {
        content = content.replace(existingNavRegex, `${navBlock}\n        </div>\n      </div>\n    </div>\n    </>`);
        fs.writeFileSync(filePath, content, 'utf8');
    }
}
