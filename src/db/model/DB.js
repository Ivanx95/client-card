const Sequelize = require("sequelize");

const dotenv = require('dotenv');
dotenv.config();

let dbName =process.env.DB_NAME;
let dbUser =process.env.DB_USER;
let dbPwd =process.env.DB_PWD;
let dbHost =process.env.DB_HOST;
console.log(`DB name: ${dbName}`);

const dataSource = new Sequelize(dbName,dbUser, dbPwd, 
	                            { host: dbHost,
								  dialect: 'mysql',
								  logging: false,
								  pool: {
								    max: 5,
								    min: 0,
								    idle: 10000
								  }});


let models = {};

models.User = dataSource.import(__dirname + "/User.js");
models.Brand = dataSource.import(__dirname + "/Brand.js");
models.Card = dataSource.import(__dirname + "/Card.js");

const bootstrap = dataSource.sync();

models.Brand.associate(models);
models.Card.associate(models);

console.log("Models sync up");

dataSource.models=models;
dataSource.bootstrap=bootstrap;
module.exports = dataSource;

