import { useState } from 'react';
import reactLogo from './../assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import MoreArticles from './MoreArticles.jsx';
import Trending from './Trending.jsx';
import './../App.css';
import ai_iym from './../images/ai_iym.jpeg';
import ai_ite from './../images/ai_ite.jpg';
import ai_bew from './../images/ai_bew.jpg';
import ai_iyw from './../images/ai_iyw.jpg';


function Article(props) {
  const [count, setCount] = useState(0)
  console.log("!!")
  console.log(props.article.image)

  return (
    <>
      <Header />
      {/* add which tab this is*/}
      <div class="body">
        <Trending />
        <div class="mainContent">
          <div class="mainArticle">
            <h1>{props.article.title}</h1>
            <img src={props.article.image} width="20%" alt="Vite logo" />
            <div dangerouslySetInnerHTML={{ __html: props.article.content }} />;
          </div>
          <MoreArticles />
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default Article