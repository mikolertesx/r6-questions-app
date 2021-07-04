import 'database'
import { apiHandler } from 'next-api-simple-handler'
import Form from 'models/Form'

export default async function handler(req, res) {
  apiHandler(
    req,
    res,
    {
      methods: ['GET'],
    },
    async () => {
      try {
        const newForm = await Form.create({})
        return res.status(200).json(newForm)
      } catch (err) {
        console.error(err)
        return res.status(400).json({ error: err.message })
      }
    }
  )
}
