import Form from 'models/Form'
import 'database'

export default async function handler(req, res) {
  const { method } = req
  const { id } = req.query
  switch (method) {
    case 'GET':
      try {
        const forms = await Form.findOne({ _id: id })
        console.log(forms)
        res.status(200).json({ data: forms })
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
      break
  }
}
