
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root123",
  DB: "demo_app",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
