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
      email: {
         type: 'String',
         required: true,
         unique: true,
         max: 50,
      },
      passwordHash: {
         type: 'String',
         required: true,
         unique: true,
         min: 6,
         max: 50,
      },
      studyStreak: {
         type: 'Date',
      },
   },
   {timestamps: true} // to enforce timestamps: dateCreated
);

const User = mongoose.model('User', UserSchema);
export default User;