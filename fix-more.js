const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Fix component imports
      if (content.includes("../../components")) {
        content = content.replace(/\.\.\/\.\.\/components/g, "@/components");
        changed = true;
      }
      if (content.includes("../../../components")) {
        content = content.replace(/\.\.\/\.\.\/\.\.\/components/g, "@/components");
        changed = true;
      }
      
      // Fix Footer lucide icons
      if (fullPath.includes('Footer.tsx')) {
         if (content.includes('Facebook')) {
             content = content.replace(/Facebook/g, 'Star');
             changed = true;
         }
         if (content.includes('Instagram')) {
             content = content.replace(/Instagram/g, 'Heart');
             changed = true;
         }
         if (content.includes('Twitter')) {
             content = content.replace(/Twitter/g, 'Share2');
             changed = true;
         }
      }

      // Fix layout globals.css
      if (fullPath.includes('layout.tsx')) {
         if (content.includes('"./globals.css"')) {
             content = content.replace('"./globals.css"', '"@/style/globals.css"');
             changed = true;
         }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir('./app');
processDir('./components');
