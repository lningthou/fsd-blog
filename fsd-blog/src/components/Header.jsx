import './Header.css';
import blogLogo from './../images/blogLogo.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Header() {
    return (
      <>
        <div class="headerWrap">
          <div class="header">
            <div class="leftMoney">
                <button>Tip</button>
                <button>Shop</button>
                <button>Subscribe</button>
            </div>
            <div class="blogLogo">
                <nav>
                    <Link to='/'>
                        <img src={blogLogo} class="blogLogoImg" alt="Blog logo" />
                    </Link>
                </nav>
            </div>
            <div class="rightLogin">
                <button>Login</button>
                <button>Register</button>
            </div>
          </div>
          <div class="bar">
            <Link to='/exclusive'>
                <button>Exclusives</button>
            </Link>
            <Link to='/latest'>
                <button>Latest</button>
            </Link>
            <button>News</button>
            <button>Tech</button>
            <button>Crypto</button>
            <button>AI</button>
          </div>
        </div>
      </>
    )
  }
  
  export default Header
  