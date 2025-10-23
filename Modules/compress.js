import zlib from 'zlib';
import fs from 'fs';

const readStream = fs.createReadStream('test.txt');
const writeStream = fs.createWriteStream('test.txt.gz');

const gzip = zlib.createGzip()
readStream.pipe(gzip).pipe(writeStream);