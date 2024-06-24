import express from "express";
//importing controllers
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

// === READ ROUTES ===
router.get(":/id", verifyToken);

// === UPDATE ROUTES ===
// router.patch('/:id/:setID', verifyToken, addDeleteSets);

export default router;