const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const openAIParams = {
  model: 'text-davinci-003',
  temperature: 0.5,
  max_tokens: 2048,
  frequency_penalty: 0.8,
}

const getResFromOpenAI = async (content) => {
  const response = await openai.createCompletion({
    ...openAIParams,
    prompt: content + '\n\n' + 'Tl;dr',
  })

  return response.data.choices[0].text.trim()
}

module.exports = getResFromOpenAI
