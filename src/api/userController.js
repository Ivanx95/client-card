const Logger = require("../logger/Logger.js");
const dataSource = require("../db/model/DB.js");
const User= dataSource.models.User;

const path ="/users";
const express = require("express");
const apiRouter = express.Router();
