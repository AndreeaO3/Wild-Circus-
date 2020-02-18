'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tickets = sequelize.define('Tickets', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    performance: DataTypes.STRING,
    age: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  Tickets.associate = function(models) {
    // associations can be defined here
  };
  return Tickets;
};