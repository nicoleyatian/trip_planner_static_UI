var Sequelize = require('sequelize');
var db = require('./index.js');
var marked = require('marked');

var Hotel = db.define('hotel', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    amenities: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        set: function (value) {
            var array;

            if (typeof value === 'string') {
                array = value.split(',').map(function (s) {
                    return s.trim();
                });
                this.setDataValue('amenities', array);
            } else {
                this.setDataValue('amenities', value);
            }
        },
        get: function(){
            return this.getDataValue('amenities').join(',');
        }
    }
});

module.exports = Hotel;

