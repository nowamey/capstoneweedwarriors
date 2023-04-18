

module.exports = (models) => {
    models.reports.hasMany(models.weeds,{
        foreignKey: 'catalog_number',
        onDelete: 'cascade'
    });
    models.reports.hasMany(models.volunteers,{
        foreignKey: 'recorded_by',
        onDelete: 'cascade'
    });
    models.reports.hasMany(models.media,{
        foreignKey: 'associated_media',
        onDelete: 'cascade'
    });
    models.reports.hasMany(models.severity,{
        foreignKey: 'severity',
        onDelete: 'cascade'
    });
    models.weeds.belongsTo(models.reports,{
        foreignKey: 'catalog_number'
    });
    models.media.belongsTo(models.reports,{
        foreignKey: 'associated_media'
    });
    models.volunteers.belongsTo(models.reports,{
        foreignKey: 'recorded_by'
    });
    models.severity.belongsTo(models.reports,{
        foreignKey: 'severity'
    });
}