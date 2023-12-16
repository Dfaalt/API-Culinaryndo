const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bookmarks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bookmarks.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Bookmarks.belongsTo(models.Foods, {
        foreignKey: 'foodsId',
        as: 'foods',
      });
    }
  }
  Bookmarks.init({
    foodsId: DataTypes.STRING,
    userId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Bookmarks',
  });
  return Bookmarks;
};
