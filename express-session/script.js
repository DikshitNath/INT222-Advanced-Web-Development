import express from "express";
import session from "express-session";

const app = express();

app.use(session({
    secret: 'mysecret',
    saveUninitialized: false,
    resave: false
}));

app.get('/login', (req, res) => {
    req.session.user = {username: 'testuser', role: 'admin'};
    res.send('User logged in');
})

app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`Welcome to your dashboard, ${req.session.user.username}`);
    } else {
        res.send('Please login first');
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error logging out');
        }
        res.send('Logged out successfully');
    });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})