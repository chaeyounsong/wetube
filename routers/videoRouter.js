import express from "express";
import routes from "../routes";
import { videoDetail, editVideo, deleteVideo, getUpload, postUpload, getEditVideo, postEditVideo } from "../controllers/videoControllers";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//Upload Video
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;

