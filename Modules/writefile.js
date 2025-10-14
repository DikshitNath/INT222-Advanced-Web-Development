import fs from "fs"

const data = {
    name: "Dikshit",
    age: 22,
    city: "Guwahati"
};

const newData = JSON.stringify(data);

fs.writeFile('test.txt', data, (err) => {
    if (err) return console.log(err);
    console.log('data hase been stored successfully');
})