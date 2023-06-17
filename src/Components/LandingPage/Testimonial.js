/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './testimonial.css'
import dave from './daveturner.webp'
import samantha from './samanthalewis.webp'
import chris from './chrismayne.webp'
import carrie from './carriesteiniger.webp'
import pointer from './pointer.png'
import testimonial from './testimonial.mp4'
import { useState, useEffect } from 'react'



const placeholderText = ["Karaydaar Haazir do a great job to find the perfect home. It’s very easy for every one to rent property we belive they continue their great service.",
  "The best real estate website I have ever used. Very professional, experienced and helpful agents and brokers. Highly recommend.",
  "We used Karaydaar Hazir to rent our Waterfront property in Creek Vista. Their approach was professional and positive. ",
  "We had an excellent experience working with Karaydaar Hazir finding our rental in Gulberg. Definitely recommend."];



function Testimonial() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = () => {

      setIndex(prevIndex => {
        if (prevIndex === placeholderText.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      })
    };
    setInterval(timer, 5500);


    return () => { clearInterval(timer); }
  }, []);


  return (
    <div>
      <div className="">
        <div className="page4-container1">
          <div className="page4-container2">
            <h1 className="page4-text">WHAT PEOPLE SAY</h1>
            <p className="page4-text01" >{placeholderText[index]}</p>
          </div>
        </div>
        <img
          alt="image"
          src={pointer}
          className="pointer"
          style={{ visibility: index === 0 ? "visible" : 'hidden' }}
        />
        <img
          alt="image"
          src={pointer}
          className="pointer1"
          style={{ visibility: index === 1 ? "visible" : 'hidden' }}
        />
        <img
          alt="image"
          src={pointer}
          className="pointer2"
          style={{ visibility: index === 3 ? "visible" : 'hidden' }}
        />
        <img
          alt="image"
          src={pointer}
          className="pointer3"
          style={{ visibility: index === 2 ? "visible" : 'hidden' }}
        />
        <img
          alt="image"
          src={dave}
          className="page4-image"

        />
        <img
          alt="image"
          src={carrie}
          className="page4-image1"
        />
        <img
          alt="image"
          src={samantha}
          className="page4-image2"
        />
        <img
          alt="image"
          src={chris}
          className="page4-image3"
        />
        <h3 className="page4-text02">
          <span></span>
          <span >Dave Turner</span>
        </h3>
        <h3 className="page4-text05">
          <span></span>
          <span>Carrie Steiniger</span>
        </h3>
        <h3 className="page4-text08">
          <span></span>
          <span>Chris Mayne</span>
        </h3>
        <h3 className="page4-text11">
          <span></span>
          <span>Samantha Lewis</span>
        </h3>
        <h3 className="page4-text14">
          <span></span>
          <span>Commercial Land Owner</span>
        </h3>
        <h3 className="page4-text17">
          <span></span>
          <span>Tenant</span>
        </h3>
        <h3 className="page4-text20">
          <span></span>
          <span>Penthouse Owner</span>
        </h3>
        <h3 className="page4-text23">
          <span></span>
          <span>Surveyer</span>
        </h3>
        <video
          src={testimonial} type="video/mp4" muted loop autoPlay

          className="page4-video"
        ></video>
      </div>
    </div>
  )
}

export default Testimonial