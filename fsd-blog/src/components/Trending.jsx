import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx';
import Article from './Article.jsx'
import './../App.css'


function Trending() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="trending">
          <h2>Trending</h2>
          {/* each article should have an upvote and downvote button, which persists, and increases or decreases like count, and then article moves to top or bottom based on like count*/}
          {/* but for now I can implement the rest later, copy what I did for my personal website*/}
          <div className="trendingArticle">
            <h4>Would Siri or Alexa be the top in a hypothetical relationship?</h4>
            <h4>15 likes</h4>
          </div>
          <div className="trendingArticle">
            <h4>Should women stay in the kitchen?</h4>
            <h4>14 likes</h4>
          </div>
          <div className="trendingArticle">
            <h4>Cutting edge tech sounds like cooking, will tech become female dominated?</h4>
            <h4>14 likes</h4>
          </div>
          <div className="trendingArticle">
            <h4>Elon Musk changes X's name to Burrito</h4>
            <h4>3 likes</h4>
          </div>
          <div className="trendingArticle">
            <h4>Crypto and its role in new age communism</h4>
            <h4>2 likes</h4>
          </div>
          <div className="trendingArticle">
            <h4>Can people stop making so many f****** apps</h4>
            <h4>2 likes</h4>
          </div>
        </div>
    </>
  )
}

export default Trending