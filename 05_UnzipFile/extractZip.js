const StreamZip = require('node-stream-zip');
const path = require('path');
const fs = require('fs');

// Path to your ZIP file
const zipFilePath = path.join(__dirname, 'file1.zip');

// Path where you want to extract the files
const outputDir = path.join(__dirname, 'unzipped');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const zip = new StreamZip.async({ file: zipFilePath });

(async () => {
    try {
        // Extract all files
        await zip.extract(null, outputDir);
        console.log(`Extracted to ${outputDir}`);
    } catch (err) {
        console.error('Failed to extract:', err);
    } finally {
        await zip.close();
    }
})();
