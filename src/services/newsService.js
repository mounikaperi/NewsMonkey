import { APIKEY } from "../utils/constants";

const fetchNews = async (queryStringParams) => {
  const { page: pageNumber, pageSize} = queryStringParams || {};
  const newsUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}&page=${pageNumber}&pageSize=${pageSize}`;
  try {
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