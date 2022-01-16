const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    // const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);

    const queryText = `
    UPDATE "gallery"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;
    `;

    const queryParams = [req.params.id];

    // request update to database
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            console.log('added like');
            // tell client of success
            res.sendStatus(201);
        })
        .catch((err) => {
            // tell client of failure
            console.log('pool PUT ERROR', err);
            res.sendStatus(500);
        });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);

    const queryText = `
    SELECT * FROM "gallery"
    ORDER BY "id" ASC;
    `;

    // send request to database
    pool.query(queryText)
        .then((dbRes) => {
            console.log('data from database:', dbRes);
            res.send(dbRes.rows);
        })
        .catch((err) => {
            // tell client of failure
            console.log('DB GET ERROR', err);
            res.sendStatus(500);
        });
}); // END GET Route

// POST
router.post('/', (req, res) => {
    // check data sent
    console.log(req.body);

    queryText = `
    INSERT INTO "gallery"
    ("title", "url", "description")
    VALUES
    ($1. $2, $3);
    `;

    queryParams = [
        req.body.title,
        req.body.url,
        req.body.description
    ];

    // sent data to database
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            // tell client of success
            console.log('data from database', dbRes);
            res.sendStatus(201);
        })
        .catch((err) => {
            // tell client of failure
            console.log('pool POST ERROR', err);
            res.sendStatus(500);
        })
})

module.exports = router;