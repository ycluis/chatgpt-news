const getResFromOpenAI = require('./getResFromOpenAI')

const getCnaContent = async (page, url) => {
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 })

    const [, img] = await page.evaluate(() => {
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

    // const res = await getResFromOpenAI(data.join(' ').trim())
    const res = await getResFromOpenAI(url)

    return {
      data: res.replace(': ', '').replace('- ', ''),
      img,
    }
  } catch (err) {
    console.error(err)
    await page.browser().close()
    process.exit(1)
  }
}

module.exports = getCnaContent
