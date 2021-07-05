import 'database'
import User from 'models/User'
import { apiHandler } from 'next-api-simple-handler'

export default async function handler(req, res) {
  apiHandler(
    req,
    res,
    {
      methods: ['GET'],
    },
    async (req, res) => {
      const { userId } = req.query
      const user = await User.findById(userId)
      const result = await user.findForms()
      return res.json(result)
    }
  )
}
