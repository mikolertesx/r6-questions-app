import 'database'
import User from 'models/User'

const loginSchema = {
  username: '[String] The name of the user you are trying to log into.',
  password: '[String] The password.',
}
/**
 * Asks for username and password and returns a [token, error] array.
 * @param  {String} username
 * @param  {String} password
 * @returns {[String, Error]} An array made of a token, and a error object.
 */
export async function loginUser(username, password) {
  const foundUser = await User.findOne({ username })

  if (!foundUser) {
    return [null, new Error(`No user found with ${username}`)]
  }

  const [token, error] = await foundUser.login(password)
  return [token, error]
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(400).json({
      error: 'Only POST requests are allowed on this route.',
      schema: loginSchema,
    })
  }

  if (req.headers['content-type'] !== 'application/json') {
    return res.json({ error: 'Only JSON is allowed.' })
  }

  const { username, password } = req.body

  if (!username) {
    return res.status(400).json({
      error: 'Username is missing',
      schema: loginSchema,
    })
  }

  if (!password) {
    return res.status(400).json({
      error: 'Password is missing',
      schema: loginSchema,
    })
  }
	
	const [token, error] = await loginUser(username, password);

  if (error) {
    return res.status(400).json({
      error: error.message,
    })
  }

  return res.status(200).json({ token })
}
