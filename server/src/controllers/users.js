import User from "../models/User.js";
import mongoose from "mongoose";

// === READ FUNCS ===
export const getUser = async (req, res) => {
    try{
        const {id} = req.params; //todo idk what req.params mean :(
        // console.log(req.params); todo try this
        const user = await User.findById(id);
        res.status(200).json(user);
    }catch (e){
        res.status(400).json({msg: e.message}); //todo idk why i cba rn to check but check if msg or message was used throughout my code
    }
}

export const getUserSets = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    //used `Promise.all` to make multiple API calls to mongo
    const sets = await Promise.all(
        user.sets.map ((id) => User.findById(id));
    );
    const formattedSets = sets.map(
        ({ _id, })
    )
}
