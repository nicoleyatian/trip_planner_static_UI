var Sequelize = require('sequelize');
var db = require('./index.js');
var marked = require('marked');

var Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        set: function (value) {
            var array;

            if (typeof value === 'string') {
                array = value.split(',').map(function (s) {
                    return s.trim();
                });
                this.setDataValue('cuisine', array);
            } else {
                this.setDataValue('cuisine', value);
            }
        },
        get: function(){
            return this.getDataValue('cuisine').join(',');
        }
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
});

module.exports = Restaurant;
