'use strict';
const connection = require('../models/index');
const Horse = require('../models/horse');


Horse.insertMany([
    {
        name: 'Patricia',
        breed: 'Arabian',
        age: 15,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Pepe',
        breed: 'Thoroughbred',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Priscilla',
        breed: 'Pony',
        age: 17,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Paula',
        breed: 'Andalusian',
        age: 24,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Polly',
        breed: 'Peruvian Paso',
        age: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Pablo',
        breed: 'Icelandic',
        age: 8,
        createdAt: new Date(),
        updatedAt: new Date()
    },
]).then(() => {
    connection.close();
});
