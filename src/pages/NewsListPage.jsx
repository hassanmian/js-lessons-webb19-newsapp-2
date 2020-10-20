import React, { useState, useEffect } from 'react'
import NewsItem from './../components/NewsItem';

export default function NewsListPage() {
  const [newsData, setNewsData] = useState([])
  const [expandedItem, setExpandedItem] = useState(null)

  function fetchNews() {
    fetch("https://mock-data-api.firebaseio.com/news/articles.json")
      .then(res => res.json())
      .then(data => {
        setNewsData(data)
      })
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <div className="container">
      <h1>My News App</h1>
      <div className="row">
        {newsData.map((articleData, index) => {
          return <NewsItem
            key={index}
            index={index}
            expandedItem={expandedItem}
            setExpandedItem={setExpandedItem}
            article={articleData}
          />
        })}
      </div>
    </div>
  )
}
