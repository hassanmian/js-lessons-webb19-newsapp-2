import React, { useState, useEffect } from 'react';

import { Switch, Route, Link } from "react-router-dom"
import NewsDetailPage from './pages/NewsDetailPage';
import NewsListPage from './pages/NewsListPage';

function App() {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news-list">News</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Switch>
        
        <Route path="/news/:news_id" component={NewsDetailPage}>
        </Route>

        <Route path="/news-list">
          <NewsListPage />
        </Route>

        <Route path="/about">
          <p>Det här en sida som innehåller lite nyheter</p>
        </Route>

        <Route path="/">
          <h1>Hej</h1>
        </Route>

      </Switch>
    </>
  );
}

export default App;
