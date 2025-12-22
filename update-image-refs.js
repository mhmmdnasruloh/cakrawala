const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

// Extensions to look for in source files
const sourceExtensions = ['.js', '.jsx', '.ts', '.tsx', '.css'];
// Image extensions to replace
const imageExtensions = ['.jpg', '.jpeg', '.png'];

let totalReplacements = 0;

function updateReferences(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory() && !file.includes('node_modules')) {
            updateReferences(filePath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (sourceExtensions.includes(ext)) {
                let content = fs.readFileSync(filePath, 'utf8');
                let modified = false;

                // Replace image extensions with .webp
                for (const imgExt of imageExtensions) {
                    // Match patterns like "/image.jpg", "image.png", etc
                    const regex = new RegExp(`(\\/[^"'\\s]+|"[^"]+|'[^']+)(${imgExt.replace('.', '\\.')})`, 'gi');
                    const newContent = content.replace(regex, '$1.webp');

                    if (newContent !== content) {
                        content = newContent;
                        modified = true;
                        totalReplacements++;
                    }
                }

                if (modified) {
                    fs.writeFileSync(filePath, content);
                    console.log(`✅ Updated: ${file}`);
                }
            }
        }
    }
}

console.log('Updating image references to WebP...\n');
updateReferences(srcDir);
console.log(`\n✅ Total files updated with WebP references!`);
