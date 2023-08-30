import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    const { title, description, urlToImage: imageUrl, url: newsUrl } = this.props || {};
    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} target="_blank" className="btn btn-primary" rel="noreferrer">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
