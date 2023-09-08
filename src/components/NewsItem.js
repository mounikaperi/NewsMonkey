import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    const { title, description, urlToImage: imageUrl, url: newsUrl, publishedAt } = this.props || {};
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col w-100">
          <div className="card mb-4 pb-4">
            <img src={imageUrl} className="img-fluid img-thumbnail" style={{ width: "100%", height: "15vw", objectFit: "cover" }} alt={title} />
            <div className="card-body">
              <h5 className="card-title" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: 'ellipsis' }}>{title}</h5>
              <p className="card-text" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: 'ellipsis' }}>{description || title}</p>
              <a href={newsUrl} target="_blank" className="btn btn-primary" rel="noreferrer">Read More...</a>
            </div>
            <div class="card-footer">
              <small class="text-muted text-center">Published on: {publishedAt}</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

