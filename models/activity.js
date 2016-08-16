var Sequelize = require('sequelize');
var db = require('./index.js');
var marked = require('marked');

var Activity = db.define('activity', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING
    },
});

module.exports = Activity;
