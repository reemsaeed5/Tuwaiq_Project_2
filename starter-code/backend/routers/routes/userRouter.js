const express = require("express");

const userRouter = express.Router();

const {getUser,getAllUser,updateUser,addNewUser} = require("../controllers/user");
const { user } = require("../Data");

userRouter.get('/',getAllUser);
userRouter.post('/',getUser);
userRouter.post('/user',addNewUser);
userRouter.put('/user',updateUser);

module.exports={userRouter};