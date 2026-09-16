const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'src/pages/Careers.tsx', label: 'Careers' },
  { file: 'src/pages/Contact.tsx', label: 'Contact Us' },
  { file: 'src/pages/Faqs.tsx', label: 'FAQs' },
  { file: 'src/pages/Fleet.tsx', label: 'Our Fleet' },
  { file: 'src/pages/Gallery.tsx', label: 'Media Gallery' },
  { file: 'src/pages/Services.tsx', label: 'Our Services' },
];

for (const { file, label } of pages) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<Breadcrumbs')) continue;

  // Add import if missing
  if (!content.includes('import Breadcrumbs')) {
    content = content.replace(/(import .*?;)\n/, "$1\nimport Breadcrumbs from '@/components/ui/Breadcrumbs';\n");
  }

  // Add component at the beginning of the first main container
  // Look for something like `<main ...>` or similar, then `max-w-7xl` or similar container.
  
  // This is tricky to automate without breaking design, let's just insert it safely in the Hero section
  // Let's do it manually via a script that searches for a good insertion point.
}
