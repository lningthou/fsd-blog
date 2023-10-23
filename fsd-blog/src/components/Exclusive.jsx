import { useState } from 'react';
import reactLogo from './../assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Trending from './Trending.jsx';
import MoreArticles from './MoreArticles.jsx';
import './../App.css';
import ai_iym from './../images/ai_iym.jpeg';
import ai_ite from './../images/ai_ite.jpg';
import ai_bew from './../images/ai_bew.jpg';
import ai_iyw from './../images/ai_iyw.jpg';

function Exclusive() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* add which tab this is*/}
      <div class="body">
        <Trending />
        <div class="mainContent">
          <div class="mainArticle">
            <h1>TECH RULES - or does it?</h1>
            <img src={viteLogo} width="20%" alt="Vite logo" />
            <p>main content, should be long and fun and the onion like</p>
          </div>
          <MoreArticles />
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default Exclusive