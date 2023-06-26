const express = require("express");
const { userLogin } = require("../controller/login.controller");
const { userCreate, userUpdate } = require("../controller/Register.controller");
const upload = require("../middlewares/upload");
const { checkLogin } = require("../middlewares/checkLogion");
const { getUserControl } = require("../controller/user.controller");
const route = express.Router();

route.route("/singup").post(userCreate);
route.post("/login", userLogin);
route.get("/users", checkLogin, getUserControl);

route.put("/update/:email", upload.single("image"), userUpdate);

module.exports = route;
