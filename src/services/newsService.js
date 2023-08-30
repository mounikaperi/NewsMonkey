import { APIKEY } from "../utils/constants";

const fetchNews = async (queryStringParams) => {
  const newsUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`;
  try {
    console.log(`newsUrl: ${newsUrl}`)
    const fetchedNews = await fetch(newsUrl);
    const parsedFetchedNews = await fetchedNews.json();
    return parsedFetchedNews;
  } catch (error) {
    console.error(`An exception occurred while calling the top headlines url: ${newsUrl}`);
    // TODO:
    throw new Error(`An exception occurred while calling the top headlines url: ${newsUrl}`);
  }
}

export default fetchNews;