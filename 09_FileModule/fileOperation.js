const fs = require('fs');

// Write a file
fs.writeFile('hello.txt', 'Hello, world!', (err) => {
  if (err) {
    return console.error('Write error:', err);
  }
  console.log('File written.');

  // Read the file
  fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
      return console.error('Read error:', err);
    }
    console.log('File content:', data);

    // Delete the file
    fs.unlink('hello.txt', (err) => {
      if (err) {
        return console.error('Delete error:', err);
      }
      console.log('File deleted.');
    });
  });
});
