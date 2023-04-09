const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const getResFromOpenAI = async (content) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Summarize this news article in 30 words\n\n' + content + '',
    temperature: 0.5,
    max_tokens: 2048,
    frequency_penalty: 0.8,
  })

  return response.data.choices[0].text.trim()
}

module.exports = getResFromOpenAI
