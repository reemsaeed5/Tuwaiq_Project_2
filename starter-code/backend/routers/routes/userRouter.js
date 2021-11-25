const express = require("express");

const userRouter = express.Router();

const {
  getUser,
  getAllUser,
  updateUser,
  addNewUser,
  addNewVacation
} = require("../controllers/user");

const { user } = require("../Data");

userRouter.get("/", getAllUser);
userRouter.post("/", getUser);
userRouter.post("/user", addNewUser);
userRouter.put("/user", updateUser);

userRouter.post('/user/:id', addNewVacation);

// userRouter.get("/", getAllUser);
//userRouter.post("/employ", addNewUser);
module.exports = { userRouter };
