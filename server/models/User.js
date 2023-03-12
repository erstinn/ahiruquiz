import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: 'String',
            required: true,
            min: 6,
            max: 50,
            unique: true,
        },
        email:{
            type: 'String',
            required: true,
            unique: true,
            max: 50,
        },
        password:{
            type: 'String',
            required: true,
            unique: true,
            min: 6,
            max: 50,
        },
        studyStreak:{
            type: 'Date',
        },
        picPath:{
            type: 'String',
            default: '',
        },
    },
    {timestamps: true} // to enforce timestamps: dateCreated
);

const SetSchema = new mongoose.Schema(
    {
        username: {
            type: 'String',
            required: true,
            min: 6,
            max: 50,
            unique: true,
        },
        name:{
            type: 'String',
            required: true,
            max: 60,
        },
        contents:{
            type:
        }
    },
)

const User = mongoose.model('User', UserSchema);
export default User;