/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './partner.css'
import partners from './partners.JPG'

function Partner() {
  
  return (
    <div>
      <div className="page5-container">
        <span className="page5-text">
          <span>Our Partners</span>
          <span className="page5-text2"></span>
        </span>
        <span className="page5-text3">Reliable Partners</span>
        <img
          src={partners}
          alt="image"
          className="page5-image"
        />
      </div>
    </div>
  )
}

export default Partner
