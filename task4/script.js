import express from "express";
import cookieSession from "cookie-session";

const app = express();

app.use(cookieSession({
    name: 'mysession',
    keys: ['key1', 'key2'],
}));


app.get('/', (req, res) => {
    if (!req.session.count){
        req.session.count = 1;
    }else{
        req.session.count += 1;
    }

    res.send(`You have visited this page ${req.session.count} times`);
})

app.get('/logout', (req, res) => {
    req.session = null;
    res.redirect('/');
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})