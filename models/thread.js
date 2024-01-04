'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Thread.belongsTo(models.User, {foreignKey : 'userId'})
      Thread.belongsTo(models.Channel, {foreignKey : 'channelId'})

      Thread.hasMany(models.Reply)
    }
  }
  Thread.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contentt: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    channelId : {
      type: DataTypes.UUID,
      allowNull: false
    },
    status  : {
      type : DataTypes.ENUM('UNSOLVED', 'SOLVED'),
      allowNull: false,
      defaultValue: 'UNSOLVED'
    },
    isLocked : {
      type : DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    LastRepliedAt : {
      type : DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Thread',
  });
  return Thread;
};