import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  question: {
     type: String,
     required: true,
  },
   choices: {
     type: Array,
      required: true,
   },
   answer : {
     type: String,
      required: true,
   }
})

const Quiz = mongoose.model('Quiz', QuizSchema);
export default Quiz;