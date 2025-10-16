
import fs from "fs"

// const filepath = 'test.txt'
const filepath = 'data.txt'

fs.readFile(filepath, {encoding: 'utf8', flag: 'w'}, function(err, data){
    if (err) return console.log(`the file does not exist : ${err}`);
    const newData = JSON.parse(data)
    console.log(newData);
})

// const data = fs.readFileSync('test.txt', 'utf8')
// console.log(data)

