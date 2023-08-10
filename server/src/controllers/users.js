import User from "../models/User.js";
import mongoose from "mongoose";
//todo
// [] user set progress
// [] set picture
// create user?

// === Create FUNCS ===
// export const createSet = async (req, res) => {
//     try {
//
//     } catch (e) {
//         res.status(409)
//     }
// }

// === READ FUNCS ===
export const getUser = async (req, res) => {
    //concept here is easy if you're stuck it's ur prob
    try{
        const {id} = req.params; //from req.params, {id} parameter is extracted
        const user = await User.findById(id);
        res.status(200).json(user);
    }catch (e){
        res.status(400).json({message: e.message});
    }
}

export const getUserSets = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);

        //used `Promise.all` to make multiple API calls to mongo
        const sets = await Promise.all(
            user.sets.map((id) => User.findById(id))
        );
        const formattedSets = sets.map( //TODO
            ({_id,})
        )
    } catch (e) {
        res.status(400).json({ message: err.message})
    }
}

// === UPDATE FUNCS ===
//todo finish:
export const addRemoveSet = async (req, res) => {
    // [] if other users can add others' sets => not for now
    try {
        const { id, setID } = req.params;
        const user = await User.findById(id);
        const set = await User.findById(setID);

        if (user.sets.includes(setID)) {
            user.sets = user.sets.filter((id) => id !== setID);
            set.sets = set.usernames.filter((id) => id !== id);
        } else {
            user.sets.push(setID);
            set.usernames.push(id);
        }
        await user.save();
        await set.save();

        const sets = await Promise.all(
            user.sets.map((id) => User.findById(id))
        );

        //formatting for the frontend
        const formattedSets = sets.map( //TODO
            ({_id, username, })
        )

    } catch (e) {
        res.status(400).json({ message: err.message });
    }
}
