const sequelize = require("../config/connection").sequelize;
const { DataTypes } = require("sequelize");

const SensorData = sequelize.define("sensor", {
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sensor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  humidity: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  atmPressure: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  extSensor: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});


module.exports = {SensorData}
