
module.exports = (sequelize, Sequelize) => {
    const Weed = sequelize.define("weeds", {
      
      id: {
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
    return Weed;
  };