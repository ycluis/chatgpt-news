# ChatGPT News Sumaraiza
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

ChatGPT News Sumaraiza is a web scraper that scrapes the latest news articles from [CNA](https://www.channelnewsasia.com/), [The Straits Times](https://www.straitstimes.com/) and [Mothership.sg](https://mothership.sg/). It then uses [OpenAI's completion API](https://platform.openai.com/docs/guides/completion) to summarize the news articles.

## Features

- Scrapes the latest news articles from CNA, The Straits Times and Mothership.sg
- Uses OpenAI's completion API to summarize the news articles
- Displays summarized news articles in a JSON format

## Example

The summarized news articles are displayed in a JSON format. Each article is listed as a separate JSON object, with the following properties:

```
{
  title: 'Asensio and Militao score to give Real Madrid 2-0 win against Celta',
  data: 'Real Madrid beat Celta Vigo 2-0 in a Spanish La Liga match, with goals from Marco Asensio and Eder Militao.',
  img: 'https://onecms-res.cloudinary.com/image/upload/s--ONC3goyd--/c_fill,g_auto,h_468,w_830/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/v1/one-cms/core/2023-04-22t211007z_1_lynxnpej3l08w_rtroptp_3_soccer-spain-mad-clv-report.jpg?itok=hkeYEWcq',
  url: 'https://www.channelnewsasia.com/sport/asensio-and-militao-score-give-real-madrid-2-0-win-against-celta-3437676',
  source: 'CNA'
},
{
  title: "S'pore Flyer offers discounted tickets at S$15 each on weekdays from now till May 31 for local residents",
  data: "The Singapore Flyer, a popular tourist destination, is offering an exclusive promotion for local residents. The promotion includes discounted tickets and special activities such as heritage tours and movie screenings. This promotion is part of the Flyer's efforts to encourage locals to visit the attraction.",
  img: 'https://static.mothership.sg/1/2023/04/Singapore-Flyer.png',
  url: 'https://mothership.sg/2023/04/singapore-flyer-local-residents-exclusive/',
  source: 'Mothership'
}
```

## Usage

1. Install Node.js on your system
2. Clone this repository
3. `cd scraper` and install dependencies by running `npm install`
4. Rename the `.env.sample` file to `.env`
5. Update the values in the `.env` file with your own API keys from OpenAI
6. Start the scraper by running `npm start`

## Demo
![](https://github.com/ycluis/chatgpt-news-samaraiza/blob/main/scraper/demo.gif)

## Disclaimer

The ChatGPT News Sumaraiza is intended for personal use only and is not intended for any commercial use.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
