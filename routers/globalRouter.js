import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoControllers";
import { getJoin, login, logout, postJoin, postLogin, getlogin } from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getlogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home); 
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
