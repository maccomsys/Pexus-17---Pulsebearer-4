const fs = require('fs');

const file = 'src/pages/BlogPost.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-dark\/10">([\s\S]*?)<\/div>\s*<\/div>\s*<\/article>/;

if (regex.test(content)) {
  const newNav = `<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-dark/10">
                    <div className="w-full sm:w-1/3 flex justify-start">
                      {prevPost ? (
                        <Link to={\`/blog/\${prevPost.id}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full">
                          <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-xl group-hover:bg-accent group-hover:text-dark transition-colors">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                          </div>
                          <div className="overflow-hidden">
                            <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Previous Article</div>
                            <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{prevPost.title}</div>
                          </div>
                        </Link>
                      ) : <div />}
                    </div>
                    
                    <div className="w-full sm:w-1/3 flex justify-center mt-4 sm:mt-0">
                      <Link to="/blog" className="group flex items-center justify-center gap-2 text-dark/70 hover:text-accent font-bold transition-colors">
                        <span>All Articles</span>
                      </Link>
                    </div>

                    <div className="w-full sm:w-1/3 flex justify-end">
                      {nextPost ? (
                        <Link to={\`/blog/\${nextPost.id}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full text-right">
                          <div className="overflow-hidden">
                            <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Next Article</div>
                            <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{nextPost.title}</div>
                          </div>
                          <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-xl group-hover:bg-accent group-hover:text-dark transition-colors">
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        </Link>
                      ) : <div />}
                    </div>
                  </div>
                </div>
              </article>`;
  
  content = content.replace(regex, newNav);
  fs.writeFileSync(file, content, 'utf8');
  console.log("Updated BlogPost.tsx nav block");
}
