import Mongoose from 'mongoose'
import Questions from 'models/questions'
import types from 'constants/options'

const formSchema = new Mongoose.Schema({
  author: Mongoose.Types.ObjectId,
  questions: [{ type: Mongoose.Types.ObjectId, ref: 'Question' }],
})

formSchema.methods.addMultipleQuestion = async function (text, options) {
  const newQuestion = await Questions.create({
    text,
    options,
    type: types.MULTIPLE,
  })
  this.questions.push(newQuestion._id)
  return newQuestion
}

formSchema.methods.addRangeQuestion = async function (
  text,
  minRange,
  maxRange
) {
  const newQuestion = await Questions.create({
    text,
    minRange,
    maxRange,
    type: types.RANGE,
  })
  this.questions.push(newQuestion._id)
  return newQuestion
}

formSchema.methods.addOpenQuestion = async function (text) {
  const newQuestion = await Questions.create({ text, type: types.OPEN })
  this.questions.push(newQuestion._id)
  return newQuestion
}

formSchema.methods.addCheckboxQuestion = async function (text, options) {
  const newQuestion = await Questions.create({
    text,
    options,
    type: types.CHECKBOX,
  })
  this.questions.push(newQuestion._id)
  return newQuestion
}

formSchema.methods.addBooleanQuestion = async function (text) {
  const newQuestion = await Questions.create({
    text,
    options: ['YES', 'NO'],
    type: types.BOOLEAN,
  })
  this.questions.push(newQuestion._id)
  return newQuestion
}

const Form = Mongoose.model('Form', formSchema)

export default Form
