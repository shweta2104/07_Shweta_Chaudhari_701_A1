// first you need to install archiver using npm intall archiver cmd

const fs = require('fs');
const archiver = require('archiver');

function zipFolder(sourceFolder, outPath) {
  const output = fs.createWriteStream(outPath);  // <-- Make sure this line is present
  const archive = archiver('zip');

  output.on('close', () => {
    console.log(`Created zip file: ${outPath} (${archive.pointer()} bytes)`);
  });

  archive.on('error', err => {
    throw err;
  });

  archive.pipe(output);  // <-- use the output stream here

  archive.directory(sourceFolder, false);

  archive.finalize();
}

// Example usage:
zipFolder('myFolder', 'myFolder.zip');
