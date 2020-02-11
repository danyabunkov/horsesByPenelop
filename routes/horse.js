const express = require('express');
const router = express.Router();
const Horse = require('../readme-assets/models/horse')

router.get('/', async function(req, res, next) {
    let horses = await Horse.find();
    res.json(horses );
});

router.get('/new',async function(req, res, next) {
  const err = await req.flash('error')
    res.json({error: err});
});

router.post('/addNewHorse', function(req, res, next) {
    new Horse({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age
    }).save().then((horse) => {
        res.json(horse);
    }).catch(error => {
        req.flash('error', error.toString());
        res.redirect('/horses/new');
    });
});

router.get('/:id', async function(req, res, next) {
    let horse = await Horse.findById(req.params.id);
    res.json(horse)
});
module.exports = router;
