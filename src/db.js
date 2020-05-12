// {
//     id:324391,
//     title: "video awesome",
//     description: "This is Izone I love",
//     views: 24,
//     videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator: {
//         id : "ppej1",
//         name:"time P",
//         email: "ppej@nav.com"
//     }
// }

import mongoose from "mongoose";
import dotenv from"dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = error => console.log(`X Error on DB Connection:${error}`)

db.once("open", handleOpen);
db.on("error", handleError);
