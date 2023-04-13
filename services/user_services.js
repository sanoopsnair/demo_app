

const db = require("../models");
const Users = db.user;
// const Op = db.Sequelize.Op;

const getUserList = () => {
  const query = {
    order: ['name'],
    attributes: ['name', 'age', 'mobileNumber']
  }
  return Users.findAll(query)
}

module.exports = {
  getUserList
}
