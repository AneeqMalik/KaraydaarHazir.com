import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useSearchParams, createSearchParams } from 'react-router-dom'
import img from '../../assests/download.jpg';


function ListingFeatures(props) {
    const [add, setAdd] = useState();
    const [searchparams] = useSearchParams();
    const [title, setTitle] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState(null);
    const [bed, setBed] = useState('');
    const [bath, setBath] = useState('');
    const [p, setP] = useState(0);
    const [pe, setPe] = useState(0);
    const [f, setF] = useState(0);
    const [ci, setCi] = useState(0);
    const [c, setC] = useState(0);
    const [m, setM] = useState(0);
    const [price, setPrice] = useState(0);


    const showData = () => {
        console.log(searchparams.get("add"));
        setAdd(searchparams.get("add"));
        axios.get('http://localhost:3001/api/feature', {
            params: {
                add: add
            }
        }).then(function (response) {
            // setPriceData((response.data));
            console.log((response.data));
            response.data.map((val, key) => {
                // eslint-disable-next-line
                return (setTitle(val.PropertyAddress), setImage(val.ImageName)), setSize(val.Size), setBed(val.Bedrooms), setBath(val.Bathrooms), setP(val.Parking), setPe(val.PetFriendly), setF(val.Furnished), setCi(val.CityView), setC(val.Cooling), setM(val.MailBox)
            })

        })
        axios.get('http://localhost:3001/api/payment', {
            params: {
                add: add
            }
        }).then(function (response) {
            response.data.map((val, key) => {
                console.log(val.PropertyPrice);
                return setPrice(val.PropertyPrice);
            })
            
            console.log((price));
            Navigate({
                pathname: '/listingfeatures',
                search: createSearchParams({
                    price: price
                }).toString()
            });
        })

    }
    const Navigate = useNavigate();
    const Payment = () => {
        Navigate('/payment')
    }
    return (
        <div>
            <div>
                <section className="vh-100" style={{ backgroundColor: '#eee' }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ borderRadius: "25px" }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" onClick={showData} style={{ fontSize: '20px' }}>Property Details</p>
                                                <form className="mx-1 mx-md-4">

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="form3Example1c" className="form-control" />
                                                            <label className="form-label" for="form3Example1c">{title}</label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-map-marked"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="email" id="form3Example3c" className="form-control" />
                                                            <label className="form-label" for="form3Example3c">{size}</label>
                                                        </div>
                                                        <i className="fas fa-bed"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="form3Example1c" className="form-control" />
                                                            <label className="form-label" for="form3Example1c">{bed}</label>
                                                        </div>
                                                        <i className="fas fa-bath"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="form3Example1c" className="form-control" />
                                                            <label className="form-label" for="form3Example1c">{bath}</label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-parking"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input style={{ marginLeft: '10px' }} checked={p === 0 ? false : true} className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                        </div>
                                                        <i className="fas fa-dog"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input style={{ marginLeft: '10px' }} checked={pe === 1 ? true : false} className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                        </div>
                                                        <i className="fas fa-couch"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input style={{ marginLeft: '10px' }} checked={f === 1 ? true : false} className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-city"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input style={{ marginLeft: '10px' }} checked={ci === 0 ? false : true} className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                        </div>
                                                        <i className="fas fa-temperature-low"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input style={{ marginLeft: '10px' }} checked={c === 1 ? true : false} className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                        </div>
                                                        <i className="fas fa-mail-bulk"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input style={{ marginLeft: '10px' }} checked={m === 1 ? true : false} className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                        </div>
                                                    </div>
                                                    <button type="button" class="btn btn-primary" onClick={Payment}>RENT NOW</button>
                                                </form>
                                            </div>
                                            <div className="col-md-5 col-lg-5 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                                                {image !== null ? <img style={{ height: '100%', width: '180%' }} src={require(`../../assests/${image}`)}
                                                    className="img-fluid" alt="Sample" /> : <img style={{ height: '100%', width: '180%' }} src={img}
                                                        className="img-fluid" alt="Sample" />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ListingFeatures