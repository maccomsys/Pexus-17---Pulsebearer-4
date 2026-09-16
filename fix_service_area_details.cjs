const fs = require('fs');

const file = 'src/pages/ServiceAreaDetails.tsx';
let content = fs.readFileSync(file, 'utf8');

const navBlock = `
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 mt-12 border-t border-dark/10">
          <div className="w-full sm:w-1/3 flex justify-start">
            {prevAdvert ? (
              <Link to={\`/service-areas/\${prevAdvert.district.toLowerCase().replace(/ /g, '-')}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full">
                <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-xl group-hover:bg-accent group-hover:text-dark transition-colors">
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Previous Area</div>
                  <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{prevAdvert.district}</div>
                </div>
              </Link>
            ) : <div />}
          </div>
          
          <div className="w-full sm:w-1/3 flex justify-center mt-4 sm:mt-0">
            <Link to="/service-areas" className="group flex items-center justify-center gap-2 text-dark/70 hover:text-accent font-bold transition-colors">
              <span>All Areas</span>
            </Link>
          </div>

          <div className="w-full sm:w-1/3 flex justify-end">
            {nextAdvert ? (
              <Link to={\`/service-areas/\${nextAdvert.district.toLowerCase().replace(/ /g, '-')}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full text-right">
                <div className="overflow-hidden">
                  <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Next Area</div>
                  <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{nextAdvert.district}</div>
                </div>
                <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-xl group-hover:bg-accent group-hover:text-dark transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
`;

content = content.replace(/      <\/div>\n    <\/div>\n    <\/>\n  \);\n}/, navBlock);
fs.writeFileSync(file, content, 'utf8');
console.log("Updated ServiceAreaDetails.tsx");
