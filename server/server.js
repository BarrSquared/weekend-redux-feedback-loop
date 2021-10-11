const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');// calls to pool.js module

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/test', (req, res) => {
    console.log()
})

app.post('/prime_feedback', (req, res) => {
    let newReview = req.body;
    console.log('In server.js adding new review. newReview: ', newReview);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newReview.feeling, newReview.understanding, newReview.support, newReview.comments])
    .then((result) => {
        console.log('Success sending review! Result: ', result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error adding new review. New review data: ', newReview);
        res.sendStatus(500);
    });
});

// add app.use route for review feedback
// app.use('/prime_feedback', reviewToAdd);
// 


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});