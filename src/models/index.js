const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.locations = require("./location.model.js")(sequelize,Sequelize);
db.persons = require("./person.model.js")(sequelize,Sequelize);
db.tickets = require("./tickets.model.js")(sequelize,Sequelize);
db.weeds = require("./weeds.model.js")(sequelize,Sequelize);

module.exports = db;