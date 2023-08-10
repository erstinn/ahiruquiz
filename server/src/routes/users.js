import express from "express";
//importing controllers
import {
    getUser,
    getUserSets,
    // getDeletedSets, //may not be needed, but good for restoring sets
    // addDeleteSets,
} from '../controllers/users.js';
import {verifyToken} from "../middleware/auth.js";
const router = express.Router();

// === READ ROUTES ===
router.get(":/id", verifyToken, getUser);
router.get(":/id/setID", verifyToken, getUserSets);

// === UPDATE ROUTES ===
// router.patch('/:id/:setID', verifyToken, addDeleteSets);

export default router;

