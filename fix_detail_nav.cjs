const fs = require('fs');

function updateFile(file, collection, itemVar, nameField, prevLabel, nextLabel, backLink, backLabel) {
  let content = fs.readFileSync(file, 'utf8');

  // Find the exact block we want to replace:
  // From {/* Previous / Next ... */} to the end of that block.
  
  const regex = /{\/\* Previous \/ Next [\s\S]*? Navigation \*\/}\s*<div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 mb-12">[\s\S]*?<\/>\s*\);\s*}\)}\s*<\/div>/;

  const newNav = `{\/* Previous / Next ${prevLabel.split(' ')[1]} Navigation *\/}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 mb-12 border-t border-dark/10">
              {(() => {
                const currentIndex = ${collection}.findIndex(p => p.id === ${itemVar}.id);
                const prevItem = currentIndex > 0 ? ${collection}[currentIndex - 1] : null;
                const nextItem = currentIndex < ${collection}.length - 1 ? ${collection}[currentIndex + 1] : null;
                
                return (
                  <>
                    <div className="w-full sm:w-1/3 flex justify-start">
                      {prevItem ? (
                        <Link to={\`${backLink}/\${prevItem.id}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full">
                          <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-xl group-hover:bg-accent group-hover:text-dark transition-colors">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                          </div>
                          <div className="overflow-hidden">
                            <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">${prevLabel}</div>
                            <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{prevItem.${nameField}}</div>
                          </div>
                        </Link>
                      ) : <div />}
                    </div>
                    
                    <div className="w-full sm:w-1/3 flex justify-center mt-4 sm:mt-0">
                      <Link to="${backLink}" className="group flex items-center justify-center gap-2 text-dark/70 hover:text-accent font-bold transition-colors">
                        <span>${backLabel}</span>
                      </Link>
                    </div>

                    <div className="w-full sm:w-1/3 flex justify-end">
                      {nextItem ? (
                        <Link to={\`${backLink}/\${nextItem.id}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full text-right">
                          <div className="overflow-hidden">
                            <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">${nextLabel}</div>
                            <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{nextItem.${nameField}}</div>
                          </div>
                          <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-xl group-hover:bg-accent group-hover:text-dark transition-colors">
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        </Link>
                      ) : <div />}
                    </div>
                  </>
                );
              })()}
            </div>`;

  if (regex.test(content)) {
    content = content.replace(regex, newNav);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Could not find nav block in ${file}`);
  }
}

updateFile('src/pages/BlogPost.tsx', 'BLOG_POSTS', 'article', 'title', 'Previous Article', 'Next Article', '/blog', 'All Articles');
updateFile('src/pages/PartDetails.tsx', 'PARTS', 'part', 'name', 'Previous Part', 'Next Part', '/parts', 'All Auto Parts');

