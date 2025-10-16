import fs from 'fs';

const writeStream = fs.createWriteStream('wstream.txt', 'utf8');
writeStream.write("this is the data inserted using write stream");
writeStream.end();

writeStream.on('finish', () => {
    console.log('All data is written. Nothing left to write');
});

writeStream.on('error', (err) => {
    if (err) return console.log("Error in writing the file.");
});