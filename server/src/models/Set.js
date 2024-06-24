import mongoose from "mongoose";

const SetSchema = new mongoose.Schema(
   {
      user: {
         type: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
         required: true,
         unique: true
      },
      name: {
         type: 'String',
         required: true,
         max: 60,
      },
      picPath: {
         type: 'String',
         default: '',
      },
      isPublic: {
         type: Boolean,
         default: false,
      },
      contents:{
         type: [{type: mongoose.Schema.Types.ObjectId, ref: "quizzes"}],
      }
   }, {timestamps: true}
);

const Set = mongoose.model('Set', SetSchema);
export default Set;