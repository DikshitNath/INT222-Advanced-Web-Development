import express from "express";
import path from 'path'
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

const app = express();

const __filename  = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true })) 

app.get('/showform',(req,res)=>{
  res.sendFile(path.join(__dirname, 'form.html'));

});

app.post('/submitform', (req, res) => {
  const { username, email } = req.body;
  const data = `Username: ${username}, Email: ${email}\n`;

  fs.appendFile("data.txt", data, (err) => {
    if (err) {
      console.error(err);
      return res.send("Error saving data!");
    }
    res.send(`<h2>Submitted Details are : ${username} and ${email}</h2>
              <h3>Data saved successfully!</h3>`);
  });
});

app.listen(3000,()=>{
  console.log("Server is running on 3000");
})