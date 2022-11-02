module.exports = {
  HOST: "localhost",
  USER: "zobyer",
  PASSWORD: "z13",
  DB: "zobyerdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
