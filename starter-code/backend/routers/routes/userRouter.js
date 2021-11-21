const express = require("express");

const userRouter = express.Router();

const {getUser,getAllUser,updateUser,addNewUser} = require("../controllers/user");
const { user } = require("./Data");

userRouter.get('/',getAllUser);
userRouter.get('/:id',getUser);
userRouter.post('/',addNewUser);
userRouter.put('/user',updateUser);

module.exports={userRouter};