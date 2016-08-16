var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner');
var marked = require('marked');

var Place = db.define('place', {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
    }
});

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

var Activity = db.define('activity', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING
    },
});

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

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant,
  db: db
};
