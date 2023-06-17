import "./form.css"
import list from "./listinghero.JPG"
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function hideDef() {
    document.getElementById("basic").style.display = "block";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("address").style.display = "none";
    document.getElementById("feature").style.display = "none";
    document.getElementById("detail").style.display = "none";
    document.getElementById("checked").style.display = "none";
    document.getElementById("checked1").style.display = "none";
    document.getElementById("checked2").style.display = "none";
    document.getElementById("checked3").style.display = "none";
    document.getElementById("checked4").style.display = "none";
    document.getElementById("checked5").style.display = "none";

    document.getElementById("basicbound").style.display = "block";
    document.getElementById("gallerybound").style.display = "none";
    document.getElementById("addressbound").style.display = "none";
    document.getElementById("featurebound").style.display = "none";
    document.getElementById("detailbound").style.display = "none";
}
function basic() {
    document.getElementById("basic").style.display = "block";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("address").style.display = "none";
    document.getElementById("feature").style.display = "none";
    document.getElementById("detail").style.display = "none";

    document.getElementById("basicbound").style.display = "block";
    document.getElementById("gallerybound").style.display = "none";
    document.getElementById("addressbound").style.display = "none";
    document.getElementById("featurebound").style.display = "none";
    document.getElementById("detailbound").style.display = "none";
}
function gallery() {
    document.getElementById("basic").style.display = "none";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("address").style.display = "none";
    document.getElementById("feature").style.display = "none";
    document.getElementById("detail").style.display = "none";

    document.getElementById("basicbound").style.display = "none";
    document.getElementById("gallerybound").style.display = "block";
    document.getElementById("addressbound").style.display = "none";
    document.getElementById("featurebound").style.display = "none";
    document.getElementById("detailbound").style.display = "none";
}
function address() {
    document.getElementById("basic").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("address").style.display = "block";
    document.getElementById("feature").style.display = "none";
    document.getElementById("detail").style.display = "none";


    document.getElementById("basicbound").style.display = "none";
    document.getElementById("gallerybound").style.display = "none";
    document.getElementById("addressbound").style.display = "block";
    document.getElementById("featurebound").style.display = "none";
    document.getElementById("detailbound").style.display = "none";
}
function feature() {
    document.getElementById("basic").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("address").style.display = "none";
    document.getElementById("feature").style.display = "block";
    document.getElementById("detail").style.display = "none";

    document.getElementById("basicbound").style.display = "none";
    document.getElementById("gallerybound").style.display = "none";
    document.getElementById("addressbound").style.display = "none";
    document.getElementById("featurebound").style.display = "block";
    document.getElementById("detailbound").style.display = "none";
}
function detail() {
    document.getElementById("basic").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("address").style.display = "none";
    document.getElementById("feature").style.display = "none";
    document.getElementById("detail").style.display = "block";

    document.getElementById("basicbound").style.display = "none";
    document.getElementById("gallerybound").style.display = "none";
    document.getElementById("addressbound").style.display = "none";
    document.getElementById("featurebound").style.display = "none";
    document.getElementById("detailbound").style.display = "block";
}


function SubmitListing() {
    const SubmitPrice = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('avatar', userInfo.file);
        axios.post('http://localhost:3001/api/send', formdata, {
            headers: { "Content-Type": "multipart/form-data" },
        }).then(
            console.log("Image")
        );
        axios.post('http://localhost:3001/api/price', {
            add: add,
            type: type,
            price: price
        })
        axios.post('http://localhost:3001/api/ck', {
            id : id,
            pid : pid
        })

    }
    const SubmitFeatures = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('avatar', userInfo.file);
        axios.post('http://localhost:3001/api/send', formdata, {
            headers: { "Content-Type": "multipart/form-data" },
        }).then(
            console.log("Image")
        );
        axios.post('http://localhost:3001/api/features', {
            add: add,
            space: space,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            park: park,
            cc: cc,
            cv: cv,
            mail: mail,
            state: state,
            province: province,
            land: land,
            pet: pet,
            fur: fur,
            year: year

        })

    }
    const SubmitDetails = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/detail', {
            name: name,
            descrip: descrip,
            add : add,
            category: category,
            space: space,
            type: type
        })
    };
    // const [file, setfile] = useState();
    const [userInfo, setuserInfo] = useState({
        file: [],
        filepreview: null,
    });

    const handleInputChange = (event) => {
        event.preventDefault();
        setuserInfo({
            ...userInfo,
            file: event.target.files[0],
            filepreview: URL.createObjectURL(event.target.files[0]),
        });

    }
    const GetID = () => {
        axios.get('http://localhost:3001/api/id', {
            params: {
                contact: contact,
            }
        }).then(function (res) {
            console.log(res.data);
            res.data.map((val, key) => {
                return (document.getElementById('conid').value = val.OwnerID, setid(val.OwnerID)
                )
            })

        })
    }
    const GetPID = () => {
        axios.get('http://localhost:3001/api/add', {
            params: {
                add: add,
            }
        }).then(function (res) {
            console.log(res.data);
            res.data.map((val, key) => {
                return (document.getElementById('add').value = val.PropertyID, setpid(val.PropertyID)
                )
            })

        })
    }
    const [contact, setContact] = useState(0);
    const [name, setName] = useState('');
    const [descrip, setDescrip] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [space, setSpace] = useState(0);
    const [price, setPrice] = useState(0);
    const [add, setAdd] = useState('');
    const [state, setState] = useState('');
    const [land, setLand] = useState('');
    const [province, setProvince] = useState('');
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [year, setYear] = useState(0);
    const [cc, setCC] = useState(false);
    const [pet, setPet] = useState(false);
    const [fur, setFur] = useState(false);
    const [cv, setCv] = useState(false);
    const [park, setPark] = useState(false);
    const [mail, setMail] = useState(false);
    const [id, setid] = useState(0);
    const [pid, setpid] = useState(0);
    const ccvalue = () => {
        cc === false ? setCC(true) : setCC(false);
        console.log(cc);
        if (cc === true) {
            document.getElementById('checkccv').style.border = "3px dotted lightblue";
        }
        else {
            document.getElementById('checkccv').style.border = "none";
        }
    }
    const pavalue = () => {
        park === false ? setPark(true) : setPark(false);
        console.log(park)
        if (park === true) {
            document.getElementById('checkpark').style.border = "3px dotted lightblue";
        }
        else {
            document.getElementById('checkpark').style.border = "none";
        }
    }

    const mailvalue = () => {
        mail === false ? setMail(true) : setMail(false);
        if (mail === true) {
            document.getElementById('checkmails').style.border = "3px dotted lightblue";
        }
        else {
            document.getElementById('checkmails').style.border = "none";
        }
    }
    const petvalue = () => {
        pet === false ? setPet(true) : setPet(false);
        if (pet === true) {
            document.getElementById('checkpet').style.border = "3px dotted lightblue";
        }
        else {
            document.getElementById('checkpet').style.border = "none";
        }
    }
    const cvvalue = () => {
        cv === false ? setCv(true) : setCv(false);
        if (cv === true) {
            document.getElementById('checkcvv').style.border = "3px dotted lightblue";
        }
        else {
            document.getElementById('checkcvv').style.border = "none";
        }
    }
    const furvalue = () => {
        fur === false ? setFur(true) : setFur(false);
        if (fur === true) {
            document.getElementById('checkfurn').style.border = "3px dotted lightblue";
        }
        else {
            document.getElementById('checkfurn').style.border = "none";
        }
    }
    const Navigate = useNavigate();
    const UnList = () => {
        Navigate('/unlistProperty')
    }
    return (
        <div >
            <div onLoad={hideDef}>

                <div className="page8-container">
                    <img
                        alt=""
                        src={list}
                        className="page8-image"
                        style={{ height: '250px' }}
                    />

                    <button type="button" style={{ width: "15%", marginLeft: "50%", marginTop: '12px' }} className="btn btn-light btn-rounded" onClick={UnList}>UnList YOUR PROPERTY</button>
                    <div id="basic">
                        <input
                            style={{ marginRight: '12%' }}
                            type="text"
                            placeholder="   Property Space (Sqft)"
                            className="page8-textinput input"
                            onChange={(e) => { setSpace(e.target.value) }}
                        />
                        <textarea
                            placeholder="   Property Description"
                            className="page8-textarea textarea"
                            onChange={(e) => setDescrip(e.target.value)}
                        ></textarea>
                        <input
                            type="text"
                            placeholder="  Property Name"
                            className="page8-textinput1 input"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <select className="page8-select" style={{ marginRight: '12%' }} onChange={(e) => { setCategory(e.target.value) }}>
                            <option value="Commercial" selected>Commercial</option>
                            <option value="Residential">Residential</option>
                        </select>
                        <input
                            type="text"
                            placeholder="  Price( Rs/- )"
                            className="page8-textinput2 input"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <select className="page8-select1" onChange={(e) => { setType(e.target.value) }}>
                            <option value="House" selected>House</option>
                            <option value="Flat">Flat</option>
                            <option value="Single Room">Single Room</option>
                        </select>
                        <h1 className="page8-text"><span>Property Description</span></h1>
                        <h1 className="page8-text02"><span>Property Price</span></h1>
                        <h1 className="page8-text04"><span>Property Type</span></h1>
                        <h1 className="page8-text06" style={{ marginLeft: '60px' }}><span>Property Space (Sqft)</span></h1>
                        <h1 className="page8-text08" style={{ marginLeft: '60px' }}><span>Property Category</span></h1>
                        <h1 className="page8-text10">
                            <span>Property Name</span>
                            <span className="page8-text12"></span>
                        </h1>
                        
                    </div>

                    <div id="gallery">
                        <div style={{ marginLeft: '360%', marginRight: '20px', marginTop: '60%' }}>
                            <label className='label1' style={{ color: 'black' }}>
                                <i className="fas fa-cloud-upload-alt"></i>
                                Upload Image
                                <input type="file" className='input1' name="upload_file" onChange={handleInputChange} />
                            </label>
                            <br />
                        </div>
                        <div style={{ marginLeft: '350%', marginRight: '20px', width: "200px" }}>
                            {userInfo.filepreview !== null ?
                                // <p style={{width:"200px"}}>Image Has been Uploaded</p>
                                <img src={userInfo.filepreview} style={{ width: "200px", height: "100px" }} alt="Uploaded" />
                                : null}

                        </div>
                    </div>
                    <div id="address">
                        <input type="text" style={{ marginRight: '13%' }} onChange={(e) => { setProvince(e.target.value) }} placeholder="  Province" className="textinput input" />
                        <input type="text" onChange={(e) => { setLand(e.target.value) }} placeholder="  Landmark" className="textinput1 input" />
                        <input
                            type="text"
                            placeholder="  Full Address"
                            className="textinput2 input"
                            onChange={(e) => { setAdd(e.target.value) }}
                        />
                        <input type="text" onChange={(e) => { setState(e.target.value) }} placeholder="  State" className="textinput3 input" />
                        <h1 className="text" style={{ marginLeft: '-30%' }}><span>Nearest Landmark</span></h1>
                        <h1 className="text2">State</h1>
                        <h1 className="text3" style={{ marginLeft: '5%' }}><span>Province</span></h1>
                        <h1 className="text5"><span>Full Address</span></h1>
                        <Button style={{ width: '180px', marginLeft: '430%', marginBottom: '-620%' }} onClick={SubmitDetails} variant="primary">
                            <span>
                                <span className="dtext06">Submit Details</span>
                                <span className="dtext07"></span>
                            </span>
                        </Button>
                    </div>

                    <button type="button" className="page8-button button" onClick={gallery} ></button>
                    <button type="button" className="page8-button1 button" onClick={detail}></button>
                    <button type="button" className="page8-button2 button" onClick={basic}></button>
                    <h1 className="page8-text13">Submit Listings</h1>
                    <button type="button" className="page8-button3 button" onClick={address}></button>
                    <button type="button" className="page8-button4 button" onClick={feature}></button>
                    {/* <div id="basicbound" classNameName="basic"></div>
                    <div id="gallerybound" classNameName="gallery"></div>
                    <div id="addressbound" classNameName="address"></div>
                    <div id="featurebound" classNameName="feature"></div>
                    <div id="detailbound" classNameName="detail"></div> */}
                </div>

                <div id="feature" className="container">
                    <div className="row">
                        <button className="buttons button" id="checkpet" style={{ marginLeft: '50px' }} onClick={petvalue}></button>
                        <button className="button1 button" id="checkfurn" style={{ marginLeft: '100px' }} onClick={furvalue}></button>
                        <button className="button2 button" id="checkmails" style={{ marginRight: '80px' }} onClick={mailvalue}></button>
                        <button className="button3 button" id="checkpark" style={{ marginRight: '80px' }} onClick={pavalue}></button>
                        <button className="button4 button" id="checkcvv" style={{ marginLeft: '100px' }} onClick={cvvalue}></button>
                        <button className="button5 button" id="checkccv" style={{ marginLeft: '50px' }} onClick={ccvalue}></button>
                    </div>
                    <Button style={{ width: '180px', marginLeft: '56%', marginTop: '-17%' }} onClick={SubmitFeatures} variant="primary">
                        <span>
                            <span className="dtext06">Submit Features</span>
                            <span className="dtext07"></span>
                        </span>
                    </Button>
                </div>
            </div>

            <div id="detail">
                <input
                    type="text"
                    placeholder="  Contact No"
                    className="dtextinput input"
                    style={{ marginLeft: '25%', marginTop: '-8%' }}
                    onChange={(e) => { setContact(e.target.value) }}
                />
                <input
                    type="text"
                    placeholder="  OWNER ID"
                    className="dtextinput input"
                    style={{ marginLeft: '25%' }}
                    id="conid"
                />
                <button className="dtextinput input" style={{ width: '140px', marginLeft: '45%' }} onClick={GetID}>GET YOUR ID</button>
                <input
                    type="text"
                    placeholder="  No. of Bathroom"
                    className="dtextinput input"
                    onChange={(e) => { setBathrooms(e.target.value) }}
                />
                <input type="text" onChange={(e) => { setYear(e.target.value) }} placeholder="  Year" className="dtextinput1 input" />
                <input
                    type="text"
                    placeholder="  GET PROPERTY ID"
                    className="dtextinput1 input"
                    style={{ marginLeft: '25%' }}
                    id="add"
                />
                <button className="dtextinput1 input" style={{ width: '140px', marginLeft: '45%' }} onClick={GetPID}>GET PROPERTY ID</button>
                <input
                    type="text"
                    placeholder="  No. of Beds"
                    className="dtextinput2 input"
                    onChange={(e) => { setBedrooms(e.target.value) }}
                />
                <span className="dtext"><span>Bathrooms</span></span>
                <span className="dtext02"><span>Year Built</span></span>
                <div>
                    <input type="checkbox" checked="true" className="dcheckbox" />
                    <span className="dtext04">
                        I Agree to the terms &amp; Conditions of Property Submission
                    </span>
                </div>
                <Button style={{ width: '180px', marginLeft: '52%', marginTop: '-10%' }} onClick={SubmitPrice} variant="primary">
                    <span>
                        <span className="dtext06">Submit Listing</span>
                        <span className="dtext07"></span>
                    </span>
                </Button>
                <span className="dtext08">
                    <span>Beds</span>
                    <span style={{ marginLeft: '300%' }}>ContactNo</span>
                    <span className="dtext10"></span>
                </span>
            </div>
        </div>
    );
}

export default SubmitListing;
