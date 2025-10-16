import fs from 'fs';

const writeStream = fs.createWriteStream('wstream.txt', 'utf8');
writeStream.write("this is the data inserted using write stream");
writeStream.end();

writeStream.on('finish', () => {
    console.log('All data is written. Nothing left to write');
    const readStream = fs.createReadStream('wstream.txt', 'utf-8');
    
    readStream.on('data', (chunk) => {
        console.log(chunk);
    });
    
    readStream.on('end', () => {
        console.log('All data is read. Nothing left to read');
    });
    
    readStream.on('error', (err) => {
        if (err) return console.log("Error in reading the file.");
    });
    
});

writeStream.on('error', (err) => {
    if (err) return console.log("Error in writing the file.");
});