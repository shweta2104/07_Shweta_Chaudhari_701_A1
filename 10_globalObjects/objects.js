// Using Buffer global object to create a buffer from a string
const buf = Buffer.from('Hello, Node.js globals!');
console.log('Buffer content:', buf.toString());

// Using setImmediate to execute a callback immediately after I/O events
setImmediate(() => {
  console.log('This runs immediately after I/O events');
});

// Using process.env to access environment variables
console.log('Environment variable PATH:', process.env.PATH);

// Using clearImmediate to cancel a scheduled immediate callback
const immediateId = setImmediate(() => {
  console.log('You will NOT see this message because immediate is cleared');
});
clearImmediate(immediateId);

// Using require.main to check if this file is the main module
if (require.main === module) {
  console.log('This script is run directly from the command line');
} else {
  console.log('This script is required as a module');
}
