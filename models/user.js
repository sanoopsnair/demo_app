'use strict';
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    name: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    mobileNumber: {
      type: Sequelize.STRING,
      defaultValue: null
    }
  }, {});
  return User;
};
