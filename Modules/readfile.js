
import fs from "fs"

// const filepath = 'test.txt'
const filepath = 'data.json'

fs.readFile(filepath, 'utf8', function(err, data){
    if (err) return console.log(`the file does not exist : ${err}`);
    const newData = JSON.parse(data)
    console.log(newData);
})

// const data = fs.readFileSync('test.txt', 'utf8')
// console.log(data)

