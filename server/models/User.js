import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: 'String',
            require: true,
            min: 6,
            max: 50,
        }
    }
)