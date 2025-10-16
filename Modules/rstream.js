import fs from 'fs';

const readStream = fs.createReadStream('rstream.txt', {encoding: 'utf8', start: 0, end: 4});

readStream.on('data', (chunk) => {
    console.log(chunk);
});

readStream.on('end', () => {
    console.log('All data is read. Nothing left to read');
});

readStream.on('error', (err) => {
    if (err) return console.log("Error in reading the file.");
});
