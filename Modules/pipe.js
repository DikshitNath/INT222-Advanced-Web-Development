import fs from 'fs';

const readStream = fs.createReadStream('rstream.txt');
const writeStream = fs.createWriteStream('wstream.txt');

readStream.pipe(writeStream);
