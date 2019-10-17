import routes from "./routes";

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "WeTube";
    res.locals.pageTitle = ""
    res.locals.routes = routes;
    next();
};

