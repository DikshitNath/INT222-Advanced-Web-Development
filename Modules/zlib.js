import zlib from 'zlib';

const data =  'This is node JS class'

// zlib.gzip(data, (err, buffer)=>{
//     if (err) return console.log('Error in compression', err);
//     console.log('Compressed data: ', buffer.toString());
//     zlib.gunzip(buffer, (err, buffer)=>{
//         if (err) return console.log('Error in decompression', err);
//         console.log('Decompressed data: ', buffer.toString());
//     })
// })

zlib.deflate(data, (err, buffer)=>{
    if (err) return console.log('Error in compression', err);
    console.log('Compressed data: ', buffer.toString());
    zlib.inflate(buffer, (err, buffer)=>{
        if (err) return console.log('Error in decompression', err);
        console.log('Decompressed data: ', buffer.toString());
    })
})