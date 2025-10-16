import fs from 'fs';

fs.copyFile('data.txt', 'data1.txt', (err) => {
    if (err) return console.log('Some error: ', err);
    console.log('The file has been copied successfully');
});