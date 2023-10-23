import { useState } from 'react';
import reactLogo from './../assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Header.jsx';
import './../App.css';
import ai_iym from './../images/ai_iym.jpeg';
import ai_ite from './../images/ai_ite.jpg';
import ai_bew from './../images/ai_bew.jpg';
import ai_iyw from './../images/ai_iyw.jpg';

function Sidebar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="sidebar">
        <div class="softArticle">
          <img src={ai_bew} width="175px" alt="Vite logo" style={{marginTop: '4%'}} />
          <h3 style={{marginTop: '0%'}}>Will AI be the end of the world?</h3>
        </div>
        <div class="softArticle">
          <img src={ai_iyw} width="175px" alt="Vite logo" style={{marginTop: '4%'}} />
          <h3 style={{marginTop: '0%'}}>AI is your world</h3>
        </div>
        <div class="softArticle">
          <img src={ai_ite} width="175px" alt="Vite logo" style={{marginTop: '4%'}} />
          <h3 style={{marginTop: '0%'}}>AI is your life</h3>
        </div>
        <div class="softArticle">
          <img src={ai_iym} width="175px" alt="Vite logo" style={{marginTop: '4%'}}/>
          <h3 style={{marginTop: '0%'}}>AI is your master</h3>
        </div>
      </div>
    </>
  )
}

export default Sidebar