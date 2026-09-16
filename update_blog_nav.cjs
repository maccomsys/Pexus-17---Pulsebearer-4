const fs = require('fs');

const file = 'src/pages/BlogPost.tsx';
let content = fs.readFileSync(file, 'utf8');

const startMarker = '{/* Previous / Next Article Navigation */}';
const endMarker = '{/* 6. Contact / Service CTA Box */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* Previous / Next Article Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 mb-12 border-t border-dark/10">
              {(() => {
                const currentIndex = BLOG_POSTS.findIndex(p => p.id === article.id);
                const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
                const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;
                
                return (
                  <>
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
                      ) : <div className="w-full" />}
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
                      ) : <div className="w-full" />}
                    </div>
                  </>
                );
              })()}
            </div>
            
            `;
  content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
  fs.writeFileSync(file, content, 'utf8');
  console.log("Updated BlogPost.tsx");
} else {
  console.log("Could not find markers in BlogPost");
}
