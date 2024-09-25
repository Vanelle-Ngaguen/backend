'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Newquotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Authors, { foreignKey: "quotesid" });

    }
  }
  Newquotes.init({
    id: {type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
},
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    collection: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Newquotes',
  });
  return Newquotes;
};