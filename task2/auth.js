export const auth = (req, res, next) => {
    if (req.body.name === 'admin' && req.body.password === 'admin') {
        next();
    } else {
        res.send('No Authentication')
    }
}