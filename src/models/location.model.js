module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("Locations", {
      Location_id: {
        type: Sequelize.INTEGER
      },
      Location_name: {
        type: Sequelize.STRING
      },
      Location_city: {
        type: Sequelize.STRING
      },
      Location_state: {
        type: Sequelize.STRING
      },
      num_tickets: {
        type: Sequelize.INTEGER
      }
    });
  
    return Location;
  };