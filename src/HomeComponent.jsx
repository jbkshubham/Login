import React from 'react';
import './style1.css';
import shope from './images/shopping-cart.png'
import add from './images/add.png'
import anti from './images/anti-virus.png'
import document from './images/document.png'
import filter from './images/filter.png'
import fire from './images/fire.png'
import notification from './images/notification.png'
import premium from './images/premium-badge.png'
import profile from './images/profile.png'
import technical from './images/technical-support.png'
import { useNavigate } from 'react-router-dom';


function Home1() {
   const navigate = useNavigate()
  return (
    <>
      <div className="navbar">
        <div className="logo">C.H.N.Y.D TRACE PVT LTD</div>
        <div className="title">VULNERABILITY ASSESSMENT AND PENTESTING</div>
        <div className="right-icons">
          <img src={notification} alt="Icon" className="icon" />
          <img src={profile} alt="Icon"  className="icon" />
          
        </div>
      </div>

      <div className="main">
        <div className="sidebar">
          <a href="#">
            <img src={premium} alt="Icon" className="icon" />
          </a>
          <a href="#">
            <img src={fire} alt="Fire" className="icon" />
          </a>
          <a href="#">
            <img src={document} alt="Document" className="icon" />
          </a>
          <a href="#">
            <img src={shope} alt="Cart" className="icon" />
          </a>
          <a href="#">
            <img src={technical} alt="Support" className="icon" />
          </a>
          <a href="#">
            <img src={filter} alt="Filter" className="icon filter" />
          </a>
        </div>
        {/* Content */}
        <div className="content">
          <div className="BelowNav">
            <h2>text</h2>
            <h2>text</h2>
            <h2>text</h2>
          </div>
          <div className="add-icon">
            <img src={add} alt="add" className="icon" />
          </div>
          <div className="Mainabove">
            <h1 className="Mainbelowicon">My name is subham </h1>
            <form action="traceid2.html">
              <button className="bttt" onClick={()=>navigate("/home")} type="submit">
                Start
              </button>
            </form>
          </div>
        </div>
        <div className="artical">
          <button className="btt"> start</button>
        </div>
      </div>
    </>
  );
}

export default Home1;
