import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get('/', (req,res) => res.send('Users'));
userRouter.get(routes.userDetail, (req,res) => res.send('User Datail'));
userRouter.get(routes.editProfile, (req,res) => res.send('Edit Profile'));
userRouter.get(routes.changePassword, (req,res) => res.send('Change Password'));

export default userRouter;

