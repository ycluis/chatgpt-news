// load env
require('dotenv').config()

// load puppeteer
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')

const scraperInit = async function () {
  try {
    puppeteer.use(StealthPlugin())
    puppeteer.use(AdblockerPlugin({ blockTrackers: true }))

    const args = [
      '--headless',
      '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
    ]

    const browser = await puppeteer.launch({
      ignoreHTTPSErrors: true,
      headless: false,
      args,
    })

    const page = await browser.newPage({ ignoreHTTPSErrors: true })

    await page.goto(process.env.CNA_URL, { waitUntil: 'networkidle0' })

    // capture screenshot
    // await page.screenshot({ path: 'CNA_HOME.png' })

    const pageData = await page.evaluate(() => {
      const data = []
      // capture latest news title and its links
      const items = document.querySelectorAll('article div div.layout--onecol:nth-child(2) a.list-object__heading-link')

      items.forEach((item, index) => {
        data.push({ [item.innerText]: item.href })
      })

      return data
    })
    await browser.close()

    console.log(pageData)
  } catch (err) {
    process.exit(1)
  }
}

scraperInit()
