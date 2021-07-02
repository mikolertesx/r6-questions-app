import mongoose from 'mongoose'

const answerSchema = new mongoose.Schema({
  name: String,
  form: { type: mongoose.Types.ObjectId, ref: 'Form' },
  answers: [ String ]
})

const Answers = mongoose.models.Answers || mongoose.model('Answers', answerSchema)

export default Answers