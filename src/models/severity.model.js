module.exports = (sequelize, Sequelize) => {
    const Severity = sequelize.define("severity", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    threat_level: {
        type: Sequelize.STRING,
    }
},{timestamps: false});
    
  
    return Severity;
  };