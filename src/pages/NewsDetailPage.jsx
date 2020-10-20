import React, {useEffect, useState} from 'react'

export default function NewsDetailPage(props) {
  const newsId = props.match.params.news_id
  const [newsItem, setNewsItem] = useState(null)

  function fetchNewsItem() {
    const url = `https://mock-data-api.firebaseio.com/news/articles/${newsId}.json`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setNewsItem(data)
    })
  }

  useEffect(() => {
    fetchNewsItem()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {newsItem && (
            <>
              <h5>{ newsItem.title }</h5>
              <img src={newsItem.urlToImage} className="img-fluid" />
              <p>{newsItem.content}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
