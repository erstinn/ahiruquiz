import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url"
import {register } from "./controllers/auth.js"

// === INIT ROUTES ===
import authRoutes from "./routes/auth.js";
import {verifyToken} from "./middleware/auth.js";


//  ===CONFIGS===
// only when you use `type modules`
const __filename =  fileURLToPath(import.meta.url); //to be able to use dir names
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true }));
app.use(cors());
// todo after the course, change the config below to store it somewhere e.g. in the cloud (mongoatlas)
app.use("/assets", express.static(path.join(__dirname, 'public/assets'))); //sets dir where we keep our assets; e.g. images we will store

// === FILE STORAGE ===
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/assets')
    },
    filename: function (req,file, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });
// app.post('/auth/register', upload.single('picture'), verifyToken, register); todo uncomment when username and stuff are implemented
app.post('/auth/register', upload.single('picture'),  register);

// === MOUNT ROUTES ===
app.use('/auth', authRoutes);


// === MONGOOSE SETUP ===
const PORT = process.env.PORT || 5172;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`))