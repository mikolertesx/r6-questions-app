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
    return [null, new Error("Coudln't create form.")]
  }
}

export const getAnswers = async (formId) => {
  try {
    const form = await Form.findById(formId)
    if (!form) {
      return [null, new Error("Couldn't find Form.")]
    }

    const answers = await form.clientsAnswers()
    return [answers, null]
  } catch (err) {
    console.error(err)
    return [null, err]
  }
}

const findFormRoute = async (req, res) => {
  const { method } = req
  if (method !== 'GET') {
    return res.json({ error: 'This route only allows for get the get method.' })
  }
  const { slug } = req.query
  const [id] = slug
  try {
    const form = await Form.findOne({ _id: id })
    const populatedForms = await form.execPopulate('questions')
    return res.status(200).json({ data: populatedForms })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const createQuestionRoute = async (req, res) => {
  const { method } = req
  const { slug } = req.query
  const [id, action] = slug
	
  if (action !== 'add-question' && action !== 'see-answers') {
    return res.json({ error: `You can\'t use action "${action}"` })
  }

  switch (action) {
    case 'add-question':
      if (method !== 'GET') {
        return res.json({
          error: 'This route only allows for get the get method.',
        })
      }
      const [data, error] = await createQuestion(id)
      if (error) {
        return res.json({ error: error.message })
      }
      return res.json(data)
    case 'see-answers':
      if (method !== 'GET') {
        return res.json({
          error: 'This route only allows for get the get method.',
        })
      }

      const [answersData, answersError] = await getAnswers(id)
      if (answersError) {
        return res.json({
          error: answersError,
        })
      }

      return res.json(answersData)
  }
}

const deleteQuestionRoute = async (req, res) => {
  const { slug } = req.query
  const [formId, action, questionId] = slug

  if (action !== 'remove-question') {
    return res.json({
      error: `Action ${action} doesn't exist. Try remove-question`,
    })
  }

  try {
    const form = await Form.findById(formId)
    if (!form) {
      return [null, new Error("Couldn't find Form.")]
    }

    form.questions.remove(questionId)
    await form.save()

    return res.json({
      error: 'Successfully deleted',
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: 'Something went wrong' })
  }
}

export default async function handler(req, res) {
  const { slug } = req.query

  if (slug.length === 1) {
    return findFormRoute(req, res)
  }

  if (slug.length === 2) {
    return createQuestionRoute(req, res)
  }

  if (slug.length === 3) {
    return deleteQuestionRoute(req, res)
  }

  return res.json({
    error: 'Unknown query length',
  })
}
