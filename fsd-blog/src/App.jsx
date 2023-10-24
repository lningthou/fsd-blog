import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Article from './components/Article.jsx'
import Latest from './components/Latest.jsx'
import Exclusive from './components/Exclusive.jsx'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [exclusiveArticle, setExclusiveArticle] = useState(null);
  const [latestArticle, setLatestArticle] = useState(null);
  console.log(latestArticle)
  console.log(exclusiveArticle)

  useEffect(() => {
    axios.get('http://localhost:3000/articles')
      .then(response => {
        const articles = response.data;
        setExclusiveArticle(articles[0])
        setLatestArticle(articles[1])
      })
      .catch(error => {
        console.error('There was a problem fetching the articles:', error.message);
      });
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <BrowserRouter>
      {exclusiveArticle && latestArticle ? (
        <Routes>
          <Route exact path="/" element={<Home latestArticle={latestArticle} exclusiveArticle={exclusiveArticle} />} />
          <Route exact path="/latest" element={<Article article={latestArticle} />} />
          <Route exact path="/exclusive" element={<Article article={exclusiveArticle} />} />
        </Routes>
      ) : (
        <div>Loading articles...</div>
      )}
    </BrowserRouter>
  );
}

export default App;

