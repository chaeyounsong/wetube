import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoControllers";
import { getJoin, login, logout, postJoin, postLogin, getlogin } from "../controllers/userControllers";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getlogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home); 
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
