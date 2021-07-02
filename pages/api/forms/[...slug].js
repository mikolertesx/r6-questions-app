import Form from 'models/Form'
import Questions from 'models/Questions'
import 'database'

export const createQuestion = async (formId) => {
  try {
    const form = await Form.findById(formId)
    if (!form) {
      return [null, new Error("Couldn't find Form.")]
    }

    const newQuestion = await Questions.create({})

    if (!newQuestion) {
      return [null, new Error("Couldn't create Question.")]
    }

    form.questions.push(newQuestion._id)
    await form.save()

    return [newQuestion, null]
  } catch (err) {
    console.log(err)
    return [null, new Error("Coudln't create form.")]
  }
}

const findFormRoute = async (req, res) => {
  const { slug } = req.query
  const [id] = slug
  try {
    const form = await Form.findOne({ _id: id })
		console.log(form);
    const populatedForms = await form.execPopulate('questions')
    return res.status(200).json({ data: populatedForms })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const createQuestionRoute = async (req, res) => {
  const { slug } = req.query
  const [id, action] = slug
  if (action !== 'add-question') {
    return res.json({ error: `You can\'t use action "${action}"` })
  }
  const [data, error] = await createQuestion(id)
  if (error) {
    return res.json({ error: error.message })
  }

  return res.json(data)
}

export default async function handler(req, res) {
  const { method } = req
  const { slug } = req.query
  if (method !== 'GET') {
    return res.json({ error: 'This route only allows for get the get method.' })
  }

  if (slug.length === 1) {
    return findFormRoute(req, res)
  }

  if (slug.length === 2) {
    return createQuestionRoute(req, res)
  }

  return res.json({
    error: 'Unknown query length',
  })
}
