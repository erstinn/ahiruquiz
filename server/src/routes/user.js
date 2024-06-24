import express from "express";
//importing controllers
import {getUser, getUserSets,} from '../controllers/user.js';
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

// === READ ROUTES ===
router.get(":/id", verifyToken, getUser);
router.get(":/id/setID", verifyToken, getUserSets);

// === UPDATE ROUTES ===
// router.patch('/:id/:setID', verifyToken, addDeleteSets);

export default router;