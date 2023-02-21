
const { log } = require('console');
const { Readable,Writable,Duplex,Transform, } = require('stream');

// Reading the data
const inStream = new Readable({

});

// Pushing the data to the stream
inStream.push('GeeksForGeeks : ');
inStream.push(
	'A Computer Science portal for Geeks');

// Indicates that no more data is
// left in the stream
inStream.push(null);

// Echoing data to the standard output

inStream.pipe(process.stdout);
