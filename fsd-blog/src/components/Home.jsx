import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx';
import Trending from './Trending.jsx';
import MoreArticles from './MoreArticles.jsx';
import Article from './Article.jsx'
import './../App.css'
import ssmug from './../images/ssmug.jpg';
import usb from './../images/50usb.jpg';
import smtoast from './../images/smarttoast.jpg';
import smbelt from './../images/smbelt.jpg';
import brapp from './../images/brapp.jpg';

function Home(props) {
  const latestArticle = props.latestArticle;
  const exclusiveArticle = props.exclusiveArticle;
  return (
    <>
      <Header />
      <div className="body">
        <Trending />
        <div className="mainContent">
          <div className="loudArticle">
            <nav>
              <Link to='/latest'>
                <div className="link">
                    <h3>Latest</h3>
                    <img src={latestArticle.image} width="50%" alt="Vite logo" />
                    <h1>{latestArticle.title}</h1>
                </div>
              </Link>
            </nav>
          </div>
          <div className="loudArticle">
          <nav>
              <Link to='/exclusive'>
                <div className="link">
                    <h3>Exclusive</h3>
                    <img src={exclusiveArticle.image} width="20%" alt="Vite logo" />
                    <h1>{exclusiveArticle.title}</h1>
                </div>
              </Link>
            </nav>
          </div>
          <MoreArticles />
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default Home