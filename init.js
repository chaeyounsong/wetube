import dotenv from "dotenv";
import "./db";
import app from "./app";
import "./models/Comment";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";
import "./models/Video";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);