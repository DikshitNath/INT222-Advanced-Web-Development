import express from "express";
import cookieSession from "cookie-session";

const app = express();

app.use(cookieSession({
    name: 'mysession',
    keys: ['key1', 'key2'],
}));

app.get('/login', (req, res) => {
    req.session.user = 'Dikshit';
    res.send(`Session set for user ${req.session.user}`);
})

app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`Welcome to your dashboard, ${req.session.user}`);
    } else {
        res.send('Please login first');
    }
})

app.get('/logout', (req, res) => {
    req.session = null;
    res.send('Logged out successfully');
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})