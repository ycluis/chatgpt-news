const getResFromOpenAI = require('./getResFromOpenAI')

const getMothershipContent = async (page, url) => {
  try {
    await page.goto(url, { waitUntil: 'networkidle0' })

    const [, img] = await page.evaluate(() => {
      const data = []
      const img = document.querySelector('div.home figure.featured-image img')
      const items = document.querySelectorAll('div.home div.main-item div.content-article-wrap p')

      items.forEach((item) => {
        data.push(item.innerText)
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

module.exports = getMothershipContent
