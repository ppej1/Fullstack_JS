import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {
    localsMiddleware
} from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

const app = express()
const PORT = 4000;

//middleware 
app.use(helmet());
app.set("view engine", "pug")
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan("dev"));

app.use(localsMiddleware);


//router
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;


//함수만들기
//방법1
// app.use((req, res, next) =>{
// })
// app.use(function(req, res, next){
// })
//방법3
//app.use(localsMiddleware);


//mixins란?