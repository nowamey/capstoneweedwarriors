module.exports = (sequelize, Sequelize) => {
    const Media = sequelize.define("media", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      url: {
        type: Sequelize.STRING
      }
    },{timestamps: false});
    
    Media.associate = (models) => {
      Media.belongsTo(models.Reports,{
        as:'reports',
        foreignKey:'associated_media'
      })
    }
    console.log('ok')
    return Media;
  };