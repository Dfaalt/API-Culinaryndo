const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Histories.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Histories.belongsTo(models.Foods, {
        foreignKey: 'foodsId',
        as: 'foods',
      });
    }
  }
  Histories.init({
    foodsId: DataTypes.STRING,
    userId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Histories',
  });
  return Histories;
};
