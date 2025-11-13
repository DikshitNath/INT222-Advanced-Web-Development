import express from "express";
import session from "express-session";

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(session({
    secret: 'mysecret',
    saveUninitialized: false,
    resave: false
}));

app.get('/signin', (req, res) => {
    res.send(`
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    `);
})

app.post('/login', (req, res) => {
    if (req.body.username === 'admin' && req.body.password === 'password') {
        req.session.user = {username: 'admin', role: 'admin'};
        res.redirect('/dashboard');
    }
    else {
        res.redirect('/signin');
    }
})

app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`
            <h1>Welcome to your dashboard, ${req.session.user.username}</h1>
            <a href="/logout">Logout</a>
        `)
    } else {
        res.redirect('/signin');
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
