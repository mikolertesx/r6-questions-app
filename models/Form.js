import Mongoose from 'mongoose'

const formSchema = new Mongoose.Schema({
  author: Mongoose.Types.ObjectId,
  questions: [{ type: ObjectId, ref: 'Question' }],
})

const Form = Mongoose.model('Question', formSchema)

export default Form
