import { APIKEY } from "../utils/constants";

const fetchTopHeadlines = async (queryStringParams) => {
  const { page: pageNumber, pageSize, country, category} = queryStringParams || {};
  const newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${APIKEY}&page=${pageNumber}&pageSize=${pageSize}`;
  console.log(newsUrl);
  try {
    const fetchedNews = await fetch(newsUrl);
    const parsedFetchedNews = await fetchedNews.json();
    console.log(parsedFetchedNews)
    return parsedFetchedNews;
  } catch (error) {
    console.error(`An exception occurred while calling the top headlines url: ${newsUrl}`);
    // TODO:
    throw new Error(`An exception occurred while calling the top headlines url: ${newsUrl}`);
  }
}

export default fetchTopHeadlines;