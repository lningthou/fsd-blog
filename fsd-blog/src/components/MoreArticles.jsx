import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx';
import Trending from './Trending.jsx';
import Article from './Article.jsx'
import './../App.css'
import ssmug from './../images/ssmug.jpg';
import usb from './../images/50usb.jpg';
import smtoast from './../images/smarttoast.jpg';
import smbelt from './../images/smbelt.jpg';
import brapp from './../images/brapp.jpg';


function MoreArticles() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="body">
        <br></br>
        <br></br>
        <br></br>
        <div className="moreArticles">
          <div className="softArticle">
              <img src={usb} width="200px" alt="Vite logo" />
              <h3>The Ultimate Guide to Charging Your Phone: Meet the 50-Port USB Hub You Never Knew You Needed</h3>
          </div>
          <div class="softArticle">
              <img src={smtoast} width="200px" alt="Vite logo" />
              <h3>Make Microwaves Jealous with the 'Smart Toaster' That Knows Your Deepest Desires</h3>
          </div>
          <div class="softArticle">
              <img src={smbelt} width="200px" alt="Vite logo" />
              <h3>The 'Smart Belt Buckle' That Monitors Your Waistline and Posts Updates on Social Media</h3>
          </div>
          <div class="softArticle">
              <img src={brapp} width="200px" alt="Vite logo" />
              <h3>Unleash Your Inner Influencer with the 'Hashtag Breathalyzer' App</h3>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default MoreArticles