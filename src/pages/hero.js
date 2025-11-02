import React from "react";
import Typed from 'react-typed';
import { ReactTyped } from "react-typed";
import {isMobile} from 'react-device-detect';

const hero = (props) => {
  return (
    <div
      id="hero"
      className="hero route bg-image"
      style={{backgroundImage : isMobile ?   `url(assets/img/hero-bg1.png)` : `url(assets/img/hero-bg.png)` }}
    >
      <div className="overlay-itro" />
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Vismay Gamit</h1>
            
            <p className="hero-subtitle">
            <ReactTyped
                    strings={['Full Stack Developer', 'Front-end Developer', 'Back-end Developer', 'Freelancer', 'AI Developer', 'Youtuber', 'Video Editor']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /><br/>
              {/* <span className="typed" data-typed-items="Full Stack Developer, Freelancer, Youtuber, Video Editor"></span> */}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
