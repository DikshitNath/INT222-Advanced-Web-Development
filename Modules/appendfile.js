import fs from 'fs';

fs.appendFile('test.txt', 'data', (err) => {
    if (err) return console.log('Error in appending the file');;
    console.log('The file has been appended successfully');
});