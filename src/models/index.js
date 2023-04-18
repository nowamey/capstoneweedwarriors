const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: 'mysql',
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

const Report = sequelize.define("reports", {
  report_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  /*catalog_number: {
    type: Sequelize.INTEGER//fkey to weed
  },*/
  location: {
    type: Sequelize.STRING
  },
  location_state: {
    type: Sequelize.STRING
  },
  timestamp: {
    type: Sequelize.DATE
  },
  /*associated_media: {
    type: Sequelize.STRING //fkey to media
  },*/
  /*severity: {
    type: Sequelize.INTEGER //fkey to severity
  },*/
  comments: {
    type: Sequelize.STRING
  },
  /*recorded_by: {
    type: Sequelize.INTEGER //fkey to volunteer
  },*/
  verified: {
    type: Sequelize.BOOLEAN
  }
},{timestamps: false});
const Volunteer = sequelize.define("volunteers", {
  volunteer_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
},{timestamps: false});
const Media = sequelize.define("media", {
  media_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  url: {
    type: Sequelize.STRING
  }
},{timestamps: false});
const Weed = sequelize.define("weeds", {
      
  weed_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  latin_name: {
    type: Sequelize.STRING
  },
  common_name: {
    type: Sequelize.STRING
  },
  usda_link: {
    type: Sequelize.STRING
  }
},{timestamps: false});
const Severity = sequelize.define("severity", {
  severity_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
  },
  threat_level: {
      type: Sequelize.STRING,
  }
},{timestamps: false});
//making associations

Report.belongsTo(Weed,{
  as:'catalog_numbers',
  foreignKey: 'weed_id',
  onDelete: 'cascade' 
});
Report.belongsTo(Media,{
  foreignKey: 'media_id',
  onDelete: 'cascade' 
});
Report.belongsTo(Volunteer,{
  foreignKey: 'volunteer_id',
  onDelete: 'cascade' 
});
Report.belongsTo(Severity,{
  foreignKey: 'severity_id',
  onDelete: 'cascade'
});





db.reports = Report
db.volunteers = Volunteer
db.media = Media
db.weeds = Weed
db.case_severity = Severity




db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;