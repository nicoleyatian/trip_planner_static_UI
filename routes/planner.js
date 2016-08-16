var express = require('express');
var router = express.Router();
var models = require('../models');
var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;
module.exports = router;
var Promise = require('bluebird');


// GET
router.get('/', function (req, res, next) {
    var array = [Hotel.findAll({}), Restaurant.findAll({}), Activity.findAll({})];
    var obj = {};


    Promise.all(array)
    .then(function(val){
        var hotels = val[0];
        var restaurants = val[1];
        var activities = val[2];

        res.render('home', {
            hotels: hotels,
            restaurants: restaurants,
            activities: activities
        })

    })
    .catch(next);
});


