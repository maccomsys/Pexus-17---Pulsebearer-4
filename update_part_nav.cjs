const fs = require('fs');

const file = 'src/pages/PartDetails.tsx';
let content = fs.readFileSync(file, 'utf8');

const startMarker = '{/* Previous / Next Part Navigation */}';
const endMarker = '{/* 3. Product Summary Panel (Right / Sticky) */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* Previous / Next Part Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 mt-12 border-t border-dark/10">
              {(() => {
                const currentIndex = PARTS.findIndex(p => p.id === PRODUCT.id);
                const prevPart = currentIndex > 0 ? PARTS[currentIndex - 1] : null;
                const nextPart = currentIndex < PARTS.length - 1 ? PARTS[currentIndex + 1] : null;
                
                return (
                  <>
                    <div className="w-full sm:w-1/3 flex justify-start">
                      {prevPart ? (
                        <Link to={\`/parts/\${prevPart.id}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full">
                          <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-dark transition-colors">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                          </div>
                          <div className="overflow-hidden">
                            <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Previous Part</div>
                            <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{prevPart.name}</div>
                          </div>
                        </Link>
                      ) : <div className="w-full" />}
                    </div>
                    
                    <div className="w-full sm:w-1/3 flex justify-center mt-4 sm:mt-0">
                      <Link to="/parts" className="group flex items-center justify-center gap-2 text-dark/70 hover:text-accent font-bold transition-colors">
                        <span>All Auto Parts</span>
                      </Link>
                    </div>

                    <div className="w-full sm:w-1/3 flex justify-end">
                      {nextPart ? (
                        <Link to={\`/parts/\${nextPart.id}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full text-right">
                          <div className="overflow-hidden">
                            <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Next Part</div>
                            <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{nextPart.name}</div>
                          </div>
                          <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-dark transition-colors">
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        </Link>
                      ) : <div className="w-full" />}
                    </div>
                  </>
                );
              })()}
            </div>
          `;
  content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
  fs.writeFileSync(file, content, 'utf8');
  console.log("Updated PartDetails.tsx");
} else {
  console.log("Could not find markers in PartDetails");
}
