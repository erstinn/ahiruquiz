import express from "express";
import {login} from "../controllers/auth"
const router = express.Router();


export default router.post('/login', login)


