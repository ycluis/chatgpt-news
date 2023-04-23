// load env
require('dotenv').config()

const headlineInit = require('./headlineInit')

const scraperInit = async () => {
  const urls = process.env.URL_SET.split(', ')

  for (const url of urls) {
    await headlineInit(url)
  }
}

scraperInit()
