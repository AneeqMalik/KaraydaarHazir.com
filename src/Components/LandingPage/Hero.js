/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react'
import images from './hero_def.JPG'
import image from './hero_show.png'
import './hero.css'

function Hero() {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    window.addEventListener("scroll", reveal);
  }, [])
  
  return (
    <div className='hero-page reveal'>
      <div id="main">

        <div class="page-container">
          <div class="page-hero">
            <img
              alt="image"
              src={image}
              class="page-image"
            />
            <img
              src={images}
              alt="image"
              class="page-image1"
            />
            <div class="page-container1">
              <h1 class="page-text">
                <span>We Provide Right Choice of Properties that You need.</span>

              </h1>
              <span class="page-text3">
                <span>
                  <span>
                    Huge number of propreties availabe here for buy, sell and Rent.
                    Also you find here co-living property so lots opportunity you have
                    to choose here and enjoy huge discount.
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero

