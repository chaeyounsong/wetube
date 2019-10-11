import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express()

const PORT = 4000;
const handleListening = () => 
console.log(`Listening on : http://localhost:${PORT}`)

const handleHome = (req,res) => res.send('Hello! From home.');
const handleProfile = (req, res) => res.send('You are on my profile.');

app.use(cookieParse());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan("dev"));
app.use(helmet());

app.get("/",handleHome);
app.get("/profile",handleProfile);


app.listen(PORT, handleListening);