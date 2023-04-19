
module.exports = (sequelize, Sequelize) => {
    const Report = sequelize.define("reports", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      catalog_number: {
        type: Sequelize.INTEGER//fkey to weed
      },
      location: {
        type: Sequelize.STRING
      },
      location_state: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.DATE
      },
      associated_media: {
        type: Sequelize.STRING //fkey to media
      },
      severity: {
        type: Sequelize.INTEGER //fkey to severity
      },
      comments: {
        type: Sequelize.STRING
      },
      recorded_by: {
        type: Sequelize.INTEGER //fkey to volunteer
      },
      verified: {
        type: Sequelize.BOOLEAN
      }
    },{timestamps: false});
    return Report;
  };