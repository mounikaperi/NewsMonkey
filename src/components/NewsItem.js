import React, { Component } from 'react'
import '../App.css'

export class NewsItem extends Component {
  render() {
    const { title, description, urlToImage: imageUrl, url: newsUrl, publishedAt, author, source } = this.props || {};
    const { name: sourceName } = source || {};
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col w-100">
          <div className="card mr-8 mb-4 pb-4">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute',right: '0'}}><span className="badge rounded-pill bg-danger">{sourceName}</span></div>
            <img src={imageUrl} className="img-fluid rounded" style={{maxWidth: "100%", minHeight: "250px", objectFit: "cover" }} alt={title} />
            <div className="card-body">
              <h5 className="card-title" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: 'ellipsis'}}>{title}
                <span class="position absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{sourceName}</span>
              </h5>
              <p className="card-text truncate-overflow">{description || title}</p>
              <a href={newsUrl} target="_blank" className="btn btn-secondary" rel="noreferrer">Read More...</a>
            </div>
            <div class="card-footer h-50" style={{borderTop: "0px"}}>
              <small class="text-muted text-center">Published on: {new Date(publishedAt).toGMTString()}</small><br />
              <small class="text-muted text-center">Author: {author || sourceName}</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

