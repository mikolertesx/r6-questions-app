import Question from 'models/Questions'
import 'database'

export default async function handler(req, res) {
  const { method } = req
  const { id } = req.query
  switch (method) {
    case 'GET':
      try {
        const questions = await Question.findOne({ _id: id })
        console.log(questions)
        res.status(200).json({ data: questions })
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
      break
  }
}
