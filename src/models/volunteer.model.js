module.exports = (sequelize, Sequelize) => {
    const Volunteer = sequelize.define("volunteers", {
      id: {
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
    return Volunteer;
  };