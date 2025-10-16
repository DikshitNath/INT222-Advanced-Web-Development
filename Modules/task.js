import {Transform} from 'stream';
import fs from 'fs';

const writeStream = fs.createWriteStream('wstream.txt');

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});


process.stdin.pipe(upperCaseTransform).pipe(writeStream);