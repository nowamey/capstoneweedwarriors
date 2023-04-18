
module.exports = (sequelize, Sequelize) => {
    const Report = sequelize.define("reports", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      catalog_number: {
        type: Sequelize.INTEGER//fkey to catalog
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
        type: Sequelize.STRING
      },
      severity: {
        type: Sequelize.ENUM ,
        values: ['low','moderate','high']
      },
      comments: {
        type: Sequelize.STRING
      },
      recorded_by: {
        type: Sequelize.INTEGER //fkey to people
      },
      verified: {
        type: Sequelize.BOOLEAN
      }
    },{timestamps: false});

    Report.associate = (models) => {
      Report.HasMany(models.media,{
        as:'media',
        foreignKey: 'associated_media',
      });
      Report.HasMany(models.volunteer,{
        as:'volunteers',
        foreignKey: 'recorded_by'
      });
      Report.HasMany(models.weed,{
        as:'weeds',
        foreignKey: 'catalog_number'
      })
    }
    

    return Report;
  };