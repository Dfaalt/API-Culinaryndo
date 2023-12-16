const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Foods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Foods.hasMany(models.Bookmarks, {
        foreignKey: 'foodsId',
        as: 'bookmarks',
      });
      Foods.hasMany(models.Histories, {
        foreignKey: 'foodsId',
        as: 'histories',
      });
    }
  }

  Foods.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Foods',
  });
  return Foods;
};
