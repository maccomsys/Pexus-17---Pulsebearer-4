const fs = require('fs');

const pagesToUpdate = [
  { file: 'src/pages/Careers.tsx', label: 'Careers' },
  { file: 'src/pages/Contact.tsx', label: 'Contact Us' },
  { file: 'src/pages/Faqs.tsx', label: 'FAQs' },
  { file: 'src/pages/Fleet.tsx', label: 'Our Fleet' },
  { file: 'src/pages/Gallery.tsx', label: 'Media Gallery' },
  { file: 'src/pages/Services.tsx', label: 'Our Services' },
];

for (const { file, label } of pagesToUpdate) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<Breadcrumbs')) continue;

  // Add import
  content = content.replace(
    /(import .*?;)\n/,
    `$1\nimport Breadcrumbs from '@/components/ui/Breadcrumbs';\n`
  );

  // Add Breadcrumbs in the hero section
  // Typically: <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
  // We'll insert it right after that line.
  
  const searchStr = 'relative z-20">';
  const idx = content.indexOf(searchStr);
  if (idx !== -1) {
    const insertIdx = idx + searchStr.length;
    const breadcrumbHtml = `\n          <div className="mb-6">\n            <Breadcrumbs items={[{ label: '${label}' }]} variant="light" />\n          </div>`;
    content = content.slice(0, insertIdx) + breadcrumbHtml + content.slice(insertIdx);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    // some might not have 'relative z-20">'
    const searchStr2 = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">';
    const idx2 = content.indexOf(searchStr2);
    if (idx2 !== -1) {
      const insertIdx2 = idx2 + searchStr2.length;
      const breadcrumbHtml = `\n          <div className="mb-6">\n            <Breadcrumbs items={[{ label: '${label}' }]} variant="light" />\n          </div>`;
      content = content.slice(0, insertIdx2) + breadcrumbHtml + content.slice(insertIdx2);
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file} (fallback search)`);
    } else {
      console.log(`Could not find insertion point for ${file}`);
    }
  }
}
