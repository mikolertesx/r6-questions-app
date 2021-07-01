import 'database'
import User from 'models/User'

const registerSchema = {
  username: '[String] The name of the user you are trying to create.',
  password: '[String] The password.',
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(400).json({
      error: 'Only POST requests are allowed on this route.',
      schema: registerSchema,
    })
  }

  if (req.headers['content-type'] !== 'application/json') {
    return res.json({ error: 'Only JSON is allowed.' })
  }

  const { username, password } = req.body

  if (!username) {
    return res.status(400).json({
      error: 'Username is missing',
      schema: registerSchema,
    })
  }

  if (!password) {
    return res.status(400).json({
      error: 'Password is missing',
      schema: registerSchema,
    })
  }

  // Password verification.
  // TODO Add proper password verification
  if (password.trim().length === 0) {
    return res.status(400).json({
      error: 'Incorrect password format',
      schema: registerSchema,
    })
  }

  const [token, error] = await User.createUser(username, password)

  if (error) {
    return res.status(400).json({
      error: error.message,
      schema: registerSchema,
    })
  }

  return res.status(200).json({
    token,
  })
}
