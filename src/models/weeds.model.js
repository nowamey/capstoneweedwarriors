module.exports = (sequelize, Sequelize) => {
    const Weeds = sequelize.define("Weeds", {
      Weed_id: {
        type: Sequelize.INTEGER
      },
      Weed_name: {
        type: Sequelize.STRING
      },
      weed_frequency: {
        type: Sequelize.INTEGER
      },
      Threat_level: {
        type: Sequelize.INTEGER
      },
    });
  
    return Weeds;
  };