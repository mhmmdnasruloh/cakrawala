const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

function convertToWebP(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            convertToWebP(filePath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

                sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(outputPath)
                    .then(() => {
                        console.log(`✅ Converted: ${file} -> ${path.basename(outputPath)}`);
                    })
                    .catch(err => {
                        console.error(`❌ Error converting ${file}:`, err.message);
                    });
            }
        }
    }
}

console.log('Starting image conversion to WebP...\n');
convertToWebP(publicDir);
