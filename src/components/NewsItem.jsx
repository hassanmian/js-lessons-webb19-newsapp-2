import React from 'react'

export default function NewsItem(props) {

  function handleOnClick() {
    if(props.index === props.expandedItem) {
      props.setExpandedItem(null)  
    } else {
      props.setExpandedItem(props.index)
    }
  }

  function isCurrentExpanded() {
    return props.expandedItem === props.index
  }

  return (
    <div className={`col-md-12 p-4 ${isCurrentExpanded() ? "bg-light": "" } border-bottom`} onClick={handleOnClick}>
      <h5 >{props.article.title}</h5>
      <p><small>{props.article.description}</small></p>
      <p>
        <span className="badge badge-primary">{props.article.source.name}</span> <br/>
        <span className="badge badge-secondary">{props.article.author}</span>
      </p>
      {isCurrentExpanded() && (
        <>
          <img alt={props.article.description} className="img-fluid" src={props.article.urlToImage} />
          <p>{props.article.content}</p>
          <a href={props.article.url} rel="noopener noreferrer" target="_blank">Read more...</a>
        </>
      )}

    </div>
  )
}