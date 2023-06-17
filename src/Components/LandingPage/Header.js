import React, { useState } from 'react';
import "./header.css";
import video from "./video.mp4";
import Login from './Login';
import NavBar from '../NavBar/NavBar';




function Header() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <div>

      <section className="showcase">
        <header  >
          <h2 className="logo">KARAYDAAR HAZIR</h2>
          <NavBar/>
        </header>
        <video src={video} type="video/mp4" muted loop autoPlay></video>

        <div className="overlay"></div>
        <div className="text" style={{top : '10px', left: '6%'}}>
          <Login isShowLogin={isShowLogin} />
          <br />
          <h2>Helping you find </h2>
          <h3>The property of your dreams</h3>
          <span onClick={handleLoginClick}><button>Listing</button></span>
        </div>
      </section>
    </div>

  )
}

export default Header
