import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.static('public'));

app.get('/set-theme/:mode', (req, res) => {
    const theme = req.params.mode === 'dark' ? 'dark' : 'light';
    res.cookie('theme', theme)

    res.redirect('/');
})


app.get('/', (req, res) => {
    const theme = req.cookies.theme || 'light';
    res.send(`
        <html>
        <head>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body class="${theme}">
            <h1>Welcome to Themed Page</h1>
            <h5>Theme set is ${theme}</h5>
            <a href = '/set-theme/light'>Light Theme</a><br>
            <a href = '/set-theme/dark'>Dark Theme</a>
        </body>
        </html>
    `);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})