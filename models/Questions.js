import Mongoose from 'mongoose'

const questionSchema = new Mongoose.Schema({
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

const Question = Mongoose.models.Question || Mongoose.model('Question', questionSchema)

export default Question
