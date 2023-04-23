const getResFromOpenAI = require('./getResFromOpenAI')

const getStraitstimesContent = async (page, url) => {
  try {
    await page.goto(url, { waitUntil: 'networkidle0' })

    const [, img] = await page.evaluate(() => {
      const data = []
      const img = document.querySelector('div.media-group figure.group-image-frame img')
      let items = document.querySelectorAll('div.layout__region div:nth-child(5) div.layout__region--content p')

      if (items[0]?.innerText === undefined || items[0]?.innerText === '') {
        items = document.querySelectorAll('div.layout__region div:nth-child(4) div.layout__region--content p')
      }

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

module.exports = getStraitstimesContent
