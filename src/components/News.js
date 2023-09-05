import React, { Component } from 'react'
import NewsItem from './NewsItem'
import fetchNews from '../services/newsService';
import { setDefaultImage } from '../utils/commonUtils';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      status: '200',
      totalArticlesCount: 0,
      page: 1
    }
  }

  fetchArticlesNSetState = async (queryParams) => {
    const fetchedArticles = await fetchNews(queryParams);
    this.setState({
      status: fetchedArticles.status,
      articles: fetchedArticles.articles,
      totalArticlesCount: fetchedArticles.totalResults,
      page: queryParams.page
    })
  }

  async componentDidMount() {
    const queryParams = {
      page: this.state.page
    }
    await this.fetchArticlesNSetState(queryParams);
  }

  handlePreviousClick = async () => {
    const queryParams = {
      page: this.state.page - 1
    }
    await this.fetchArticlesNSetState(queryParams);
  }

  handleNextClick = async () => {
    const queryParams = {
      page: this.state.page + 1
    }
    await this.fetchArticlesNSetState(queryParams);
  }

  disablePreviousPage = () => {
    return (this.state.page <= 1) ? true : false;  
  }

  disableNextPage = () => {
    const totalNumberOfPages = Math.ceil(this.state.totalArticlesCount/15);
    return this.state.page < totalNumberOfPages - 1 ? false : true;
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>NewsMonkey - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((currentArticle) => {
              const { url, title, description, urlToImage } = currentArticle || {};
              return <div className="col-md-4" key={url}>
                <NewsItem title={title} description={description} urlToImage={setDefaultImage(urlToImage)} url={url} />
              </div>
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" disabled={this.disablePreviousPage()} onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" disabled={this.disableNextPage()} onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
