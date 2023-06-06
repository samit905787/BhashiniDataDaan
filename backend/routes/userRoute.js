const express = require("express");
const userController = require("../controllers/userController");
const bodyParser = require("body-parser");
const cors = require("cors")

const route = express();

route.use(bodyParser.json());
route.use(cors())

route.post('/login', userController.userLogin);
route.post("/orgRegister", userController.createUser);



module.exports = route;
