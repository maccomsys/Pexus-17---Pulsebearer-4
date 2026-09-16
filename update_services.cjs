const fs = require('fs');

const services = [
  { file: 'src/pages/Towing.tsx', path: '/towing', title: 'Towing Services' },
  { file: 'src/pages/Haulage.tsx', path: '/haulage', title: 'Haulage & Heavy Transport' },
  { file: 'src/pages/Repairs.tsx', path: '/repairs', title: 'Auto Repairs' },
  { file: 'src/pages/BodyWorks.tsx', path: '/body-works', title: 'Body Works' },
  { file: 'src/pages/Parts.tsx', path: '/parts', title: 'Auto Parts' },
  { file: 'src/pages/Fleet.tsx', path: '/fleet', title: 'Our Fleet' }
];

for (let i = 0; i < services.length; i++) {
  const service = services[i];
  let content = fs.readFileSync(service.file, 'utf8');

  // Skip if already added
  if (content.includes('Previous Service') || content.includes('Next Service')) {
    continue;
  }

  const prev = i > 0 ? services[i - 1] : null;
  const next = i < services.length - 1 ? services[i + 1] : null;

  let prevHtml = '';
  if (prev) {
    prevHtml = `
            <div className="w-full sm:w-1/3 flex justify-start">
              <Link to="${prev.path}" className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full">
                <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Previous Service</div>
                  <div className="text-sm font-bold text-dark group-hover:text-accent truncate">${prev.title}</div>
                </div>
              </Link>
            </div>`;
  } else {
    prevHtml = `<div className="w-full sm:w-1/3"></div>`;
  }

  let nextHtml = '';
  if (next) {
    nextHtml = `
            <div className="w-full sm:w-1/3 flex justify-end">
              <Link to="${next.path}" className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full text-right">
                <div className="overflow-hidden">
                  <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Next Service</div>
                  <div className="text-sm font-bold text-dark group-hover:text-accent truncate">${next.title}</div>
                </div>
                <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            </div>`;
  } else {
    nextHtml = `<div className="w-full sm:w-1/3"></div>`;
  }

  const backHtml = `
            <div className="w-full sm:w-1/3 flex justify-center mt-4 sm:mt-0">
              <Link to="/services" className="group flex items-center justify-center gap-2 text-dark/70 hover:text-accent font-bold transition-colors">
                <span>All Services</span>
              </Link>
            </div>`;

  const navBlock = `
      <section className="py-8 bg-white border-t border-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            ${prevHtml}
            ${backHtml}
            ${nextHtml}
          </div>
        </div>
      </section>
  `;

  // Make sure we have ChevronRight in lucide imports
  if (!content.includes('ChevronRight')) {
    content = content.replace(/import {([^}]+)} from 'lucide-react';/, "import { $1, ChevronRight } from 'lucide-react';");
  }
  // Make sure Link is imported
  if (!content.includes("import { Link }") && !content.includes("import { Link,")) {
    content = content.replace(/(import .*?;\n)/, "$1import { Link } from 'react-router-dom';\n");
  }

  // Insert navBlock right before </main>
  content = content.replace(/(<\/main>)/, `${navBlock}\n    $1`);

  fs.writeFileSync(service.file, content, 'utf8');
  console.log(`Added navigation to ${service.file}`);
}
