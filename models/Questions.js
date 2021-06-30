import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
  text: String,
  type: String,
  minRange: {
    type: Number,
    required: false,
  },
  maxRange: {
    type: Number,
    required: false,
  },
  options: {
    type: [String],
    required: false,
  },
})

const Question = mongoose.models.Question || mongoose.model('Question', questionSchema)

export default Question
