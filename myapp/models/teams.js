'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    version: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'teams',
    timetamps: true
  });
  Team.associate = function(models) {
    // associations can be defined here
  };
  return Team;
};