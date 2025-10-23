import zlib from 'zlib';
import fs from 'fs';

const readStream = fs.createReadStream('test.txt.gz');
const writeStream = fs.createWriteStream('detest.txt');

const gunzip = zlib.createGunzip()
readStream.pipe(gunzip).pipe(writeStream);