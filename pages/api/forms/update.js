import 'database'

import Form from 'models/Form'
import Questions from 'models/Questions'

const updateFormSchema = {
  id: '[String] The id of the form, this is the id you get when you either create the form or update it',
  form: '[Form Object] The data of the form, just use the same format when you request it, it will be used to spread the data across each object.',
}

export const updateFormServer = async (formId, data) => {
  try {
    const form = await Form.findOneAndUpdate(
      { _id: formId },
      {
        author: data.author,
      }
    )

    data.questions.forEach(async (question) => {
      if (question._id) {
        await Questions.findOneAndUpdate({ _id: question._id }, question)
      } else {
        const newQuestion = await Questions.create(question)
        await form.update({
          $push: { questions: newQuestion._id },
        })
      }
    })

    return [form, null]
  } catch (error) {
    return [null, error]
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.json({
      error: 'This route only allows for POST requests.',
    })
  }

  if (req.headers['content-type'] !== 'application/json') {
    return res.json({ error: 'Only JSON is allowed.' })
  }

  const { id, form } = req.body

  if (!id) {
    return res.json({ error: 'No id was provided.', schema: updateFormSchema })
  }

  if (!form) {
    return res.json({
      error: 'No form field was provided',
      schema: updateFormSchema,
    })
  }

  const [data, error] = await updateFormServer(id, form)

  if (error) {
    console.error(error)
    return res.json({
      error: "Couldn't update form",
    })
  }

  return res.json({
    form: data,
  })
}
