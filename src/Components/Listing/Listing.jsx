import React, { useState } from 'react'
import ListingCard from './ListingCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListingCarousel from './ListingCarousel';
import FooterE from '../Footer/FooterE';
import Axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

function Listing() {

    useEffect(() => {
        Axios.get('http://localhost:3001/api/pricing')
            .then(function (response) {
                setdata(response.data);
                console.log(response.data);
            })
    }, [])

    const [details, setdata] = useState([]);
    const [max, setMax] = useState(0);
    const [type, setType] = useState('');
    const [count, setCount] = useState(0);
    const [pricedata, setPriceData] = useState(undefined);

    const Search = (e) => {
        e.preventDefault();
        Axios.get('http://localhost:3001/api/get/pricing', {
            params: {
                type: type,
            }
        }).then(function (response) {
            // (response.data).length > 0 ? setCount((response.data).length) : setCount(0);
            console.log(response.data);
            response.data.map((val, key) => {
                if (val.COUNT > 0) {
                    return setCount(val.COUNT);
                }
                else {
                    return setCount(0);
                }
            })
            console.log(count);
        })
        Axios.get('http://localhost:3001/api/get/pricedata', {
            params: {
                max: max,
                type: type
            }
        }).then(function (response) {
            setPriceData((response.data));
            console.log((response.data));
        })
        if (pricedata.length !== undefined) {
            document.getElementById('success').style.display = 'block';
        }
    }
    
    return (
        <>
            {/* {details.slice(0, 1).map((val,key) => {
                return (
                    <ListingCarousel key={key} title={val.PropertyType} add={val.PropertyAddress} image={val.ImageName} />

                )
            })} */}
            <ListingCarousel details={details}/>
            <div class="card" style={{ marginTop: '20px', marginLeft: '10px', marginRight: '10px' }}>
                <div class="card-body" style={{ display: 'flex', gap: '100px', justifyContent: 'center' }}>
                    <select class="form-select" style={{ width: "150px", height: "50px" }} onChange={(e) => { setType(e.target.value) }}>
                        <option value="House" selected>House</option>
                        <option value="Flat">Flat</option>
                        <option value="Single Room">Single Room</option>
                    </select>
                    <div style={{ display: 'flex', gap: '100px', marginTop: '10px' }}>
                        <div class="input-group mb-3" style={{ width: '150px' }}>
                            <span class="input-group-text" id="basic-addon1">MIN</span>
                            <input type="text" class="form-control" aria-label="MIN" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3" style={{ width: '150px' }}>
                            <span class="input-group-text" id="basic-addon1">MAX</span>
                            <input type="text" class="form-control" aria-label="MAX" onChange={(e) => { setMax(e.target.value) }} aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <Button variant="primary" onClick={Search} style={{ width: "150px", height: '40px', marginTop: '10px' }}>Search</Button>
                </div>
            </div>
            <div className="container">
                <h2 style={{textAlign: 'center', marginTop: '5%', fontWeight: '800'}}>Properties On Rent</h2>
                <Alert id="success" key={'success'} style={{ textAlign: "center", marginTop: "10px", display: 'none' }} variant={count !== 0 ? 'success' : 'danger'}> We Found {count} Properties!
                </Alert>


                <div className="row">

                    {
                        pricedata !== undefined ?
                            pricedata.map((val, key) => {
                                return (
                                    <ListingCard key={key} title={val.PropertyType} description={val.PropertyAddress} price={val.PropertyPrice} image={val.ImageName} />
                                )
                            })
                            :

                            details.map((val, key) => {
                                return (
                                    <ListingCard key={key} title={val.PropertyType} description={val.PropertyAddress} price={val.PropertyPrice} image={val.ImageName} />
                                )
                            })
                    }
                </div>
            </div>
            <div style={{ height: '100px' }}>
                {/* Yaha per Footer dala hai per thora change kya layout issues thay us walay per */}
                <FooterE />
            </div>
        </>

    )
}

export default Listing