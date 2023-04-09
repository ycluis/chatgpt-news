const getResFromOpenAI = require('./getResFromOpenAI')

const getNewsContent = async (page, url) => {
  try {
    await page.goto(url, { waitUntil: 'networkidle0' })

    const newsContent = await page.evaluate(() => {
      const data = []
      const content = document.querySelectorAll('section article div.content div:last-child p')
      const img = document.querySelector('section article div.content div:nth-child(3) picture.image img')

      content.forEach((item) => {
        if (item !== ' ') {
          data.push(item.innerText)
        }
      })

      return [data, img?.src]
    })

    // const res = await getResFromOpenAI(newsContent[0].join(' ').trim())
    const res = await getResFromOpenAI(url)

    return {
      data: res,
      img: newsContent[1],
    }
  } catch (err) {
    console.error(err)
    await page.browser().close()
    process.exit(1)
  }
}

module.exports = getNewsContent
