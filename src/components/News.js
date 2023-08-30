import React, { Component } from 'react'
import NewsItem from './NewsItem'
import fetchNews from '../services/newsService';
import { trimTitleNDescription, setDefaultImage } from '../utils/commonUtils';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    const fetchedArticles = await fetchNews();
    this.setState({
      status: fetchedArticles.status,
      articles: fetchedArticles.articles,
      totalArticlesCount: fetchedArticles.totalResults
    })
  }

  render() {
    return (
      <div>
        <div className = "container my-3">
          <h2>NewsMonkey - Top Headlines</h2>
          <div className = "row">
          {this.state.articles.map((currentArticle) => {
            console.log(`state articles`);
            const { url, title, description, urlToImage } = currentArticle || {};
            const { shortTitle, shortDescription } = trimTitleNDescription(title, description) || {};
            return <div className = "col-md-4" key = {url}>
            <NewsItem title={shortTitle} description={shortDescription} urlToImage = {setDefaultImage(urlToImage)} url = {url}/>
          </div>
          })}
          </div>
        </div>
      </div>
    )
  }
}

export default News
