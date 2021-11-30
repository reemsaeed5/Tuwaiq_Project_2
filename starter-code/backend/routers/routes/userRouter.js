const express = require("express");

const userRouter = express.Router();

const {
  getUser,
  getAllUser,
  updateUser,
  addNewUser,
  addNewVacation,
  addUser,
} = require("../controllers/user");

const { user } = require("../Data");

userRouter.get("/", getAllUser);
userRouter.post("/", getUser);
userRouter.post("/user", addNewUser);
userRouter.put("/user", updateUser);
userRouter.post("/employ/:id", addNewVacation);
userRouter.post("/user", addUser);
// userRouter.delete('/delete' , deleteUser);
// userRouter.get("/", getAllUser);
// userRouter.post("/employ", addNewUser);
module.exports = { userRouter };
