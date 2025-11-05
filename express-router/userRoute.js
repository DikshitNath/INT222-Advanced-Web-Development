import express from "express";

const router = express.Router();

router.get('/home', (req, res) => {
    res.send('This is first page')
})

router.get('/admissions', (req, res) => {
    res.send('This is admissions page')
})

export default router;