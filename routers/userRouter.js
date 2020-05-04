import express from "express";
import routes from "../routes";
import { userDetail, editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile,editProfile);
userRouter.get(routes.userDetail(),userDetail);
userRouter.get(routes.changePassword,changePassword);

export default userRouter;


//라우터란 ?

// M data
// V how does the data look
// C function that looks for the data

