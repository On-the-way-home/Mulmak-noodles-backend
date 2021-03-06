const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Kid = require('./kid')(sequelize, Sequelize);
db.Card = require('./card')(sequelize, Sequelize);
db.Center = require('./center')(sequelize, Sequelize);

db.User.hasMany(db.Kid);
db.Kid.belongsTo(db.User);

db.User.hasMany(db.Card);
db.Card.belongsTo(db.User);

db.Center.hasMany(db.Kid);
db.Kid.belongsTo(db.Center);

module.exports = db;
