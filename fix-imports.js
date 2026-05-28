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

      // Replace Link import
      if (content.includes("import { Link } from 'react-router-dom';")) {
        content = content.replace("import { Link } from 'react-router-dom';", "import Link from 'next/link';");
        changed = true;
      }

      if (content.includes("import { useParams, Link } from 'react-router-dom';")) {
         content = content.replace("import { useParams, Link } from 'react-router-dom';", "import Link from 'next/link';\nimport { useParams } from 'next/navigation';");
         changed = true;
      }
      
      if (content.includes("import { Link, useLocation } from 'react-router-dom';")) {
         content = content.replace("import { Link, useLocation } from 'react-router-dom';", "import Link from 'next/link';\nimport { usePathname as useLocation } from 'next/navigation';");
         changed = true;
      }
      
      if (content.includes("import { useLocation, Link } from 'react-router-dom';")) {
         content = content.replace("import { useLocation, Link } from 'react-router-dom';", "import Link from 'next/link';\nimport { usePathname as useLocation } from 'next/navigation';");
         changed = true;
      }

      if (content.includes("'react-router-dom'")) {
         // Fallback replacement if there are other variations
         content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]react-router-dom['"];/g, (match, imports) => {
            let nextImports = [];
            let navImports = [];
            imports.split(',').forEach(i => {
                const name = i.trim();
                if (name === 'Link') nextImports.push(name);
                else if (name === 'useLocation') navImports.push('usePathname as useLocation');
                else if (name === 'useParams') navImports.push(name);
                else if (name === 'useNavigate') navImports.push('useRouter as useNavigate');
                else navImports.push(name);
            });
            let res = '';
            if (nextImports.length > 0) res += "import Link from 'next/link';\n";
            if (navImports.length > 0) res += `import { ${navImports.join(', ')} } from 'next/navigation';\n`;
            return res.trim();
         });
         changed = true;
      }

      // Replace <Link to="..."> with <Link href="...">
      if (content.includes("<Link to=")) {
        content = content.replace(/<Link\s+to=/g, "<Link href=");
        changed = true;
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
