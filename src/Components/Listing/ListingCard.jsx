import React from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'

function ListingCard(props) {
    const Navigate = useNavigate();
    const CardClick = () => {
        Navigate({pathname : '/listingfeatures',
            search: createSearchParams({
                add: props.description
            }).toString()
        });
        // console.log(props.title);
    }
    return (
        <div className="card text-center" style={{ width: '17rem', marginTop: '20px', marginLeft: '50px' }}>
            <img onClick={CardClick} style={{ marginTop: '10px' }} src={props.image === 'null' || '' ? require('../../assests/download.jpg') : require(`../../assests/${props.image}`)} className="card-img-top" alt="Sunset Over the Sea" />
            <div className="card-header">{props.title}</div>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer text-muted">Rs. {props.price}</div>
        </div>
    )
}

export default ListingCard