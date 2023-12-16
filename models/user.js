const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Bookmarks, {
        foreignKey: 'userId',
        as: 'bookmarks',
      });
      User.hasMany(models.Histories, {
        foreignKey: 'userId',
        as: 'histories',
      });
    }
  }
  User.init({
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    urlImage: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
