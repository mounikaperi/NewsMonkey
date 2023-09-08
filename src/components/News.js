import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import fetchTopHeadlines from '../services/newsService';
import { capitalizeFirstLetter, setDefaultImage } from '../utils/commonUtils';
import { TOGGLE_MODE_MAP } from '../utils/constants';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
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
    console.log(queryParams)
    const fetchedArticles = await fetchTopHeadlines(queryParams);
    this.setState({
      status: fetchedArticles.status,
      articles: fetchedArticles.articles,
      totalArticlesCount: fetchedArticles.totalResults,
      page: queryParams.page,
      loading: false
    })
  }

  async componentDidMount() {
    const queryParams = {
      page: this.state.page,
      country: this.props.country,
      category: this.props.category,
      pageSize: this.props.pageSize
    }
    this.setState({loading: true});
    await this.fetchArticlesNSetState(queryParams);
  }

  handlePreviousClick = async () => {
    const queryParams = {
      page: this.state.page - 1,
      country: this.props.country,
      category: this.props.category,
      pageSize: this.props.pageSize
    }
    this.setState({loading: true});
    await this.fetchArticlesNSetState(queryParams);
  }

  handleNextClick = async () => {
    const queryParams = {
      page: this.state.page + 1,
      country: this.props.country,
      category: this.props.category,
      pageSize: this.props.pageSize
    }
    this.setState({loading: true});
    await this.fetchArticlesNSetState(queryParams);
  }

  disablePreviousPage = () => {
    return (this.state.page <= 1);  
  }

  disableNextPage = () => {
    const totalNumberOfPages = Math.ceil(this.state.totalArticlesCount/15);
    return this.state.page >= totalNumberOfPages - 1;
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center" style={{margin: "40px 0px"}}>NewsMonkey - {capitalizeFirstLetter(this.props.category)} Top Headlines</h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((currentArticle) => {
              const { url, title, description, urlToImage, publishedAt } = currentArticle || {};
              return <div className="col-md-4" key={url}>
                <NewsItem title={title} description={description} urlToImage={setDefaultImage(urlToImage)} url={url} publishedAt={publishedAt}/>
              </div>
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className={`btn btn-${TOGGLE_MODE_MAP[this.props.mode]}`} disabled={this.disablePreviousPage()} onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className={`btn btn-${TOGGLE_MODE_MAP[this.props.mode]}`} disabled={this.disableNextPage()} onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
