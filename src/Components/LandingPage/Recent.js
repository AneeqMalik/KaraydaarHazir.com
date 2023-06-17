/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './recent.css'
import { useNavigate } from 'react-router-dom'

function Recent(props) {
  const Navigate = useNavigate();
  const ReadMore = () => {
    Navigate('/listing')

  }
  return (
    <div style={{width:"400px"}}>
      <div className="card text-center" style={{ width: '17rem', marginTop: '20px', marginLeft: '50px' }}>
            <img style={{ marginTop: '10px', height: '200px' }} src={props.image === 'null' || '' ? require('../../assests/download.jpg') : require(`../../assests/${props.image}`)} className="card-img-top" alt="Sunset Over the Sea" />
            <div className="card-header">{props.title}</div>
            <div className="card-body">
              <p className="card-text">{props.address}</p>
            </div>
            <button className="btn card_btn" onClick={ReadMore}>Read More</button>
          </div>
    </div>
  )
}

export default Recent
