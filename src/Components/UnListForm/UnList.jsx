import  Axios from 'axios';
import React, { useState } from 'react'

function UnList() {
    const [Address, setAddress] = useState('');
    const [Name, setName] = useState('');
    const HandleUnList = () => {
        Axios.post('http://localhost:3001/api/unlist',{
            Name:Name,
            Address:Address
        }).then(function(response){
            console.log(response);
            alert("Your Property Has Been Unlisted, Thanks For Choosing Our Services!!!!!")
        })
    }
    return (
        <div>
            <section class="vh-100" style={{ backgroundColor: '#eee' }}>
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black" style={{ borderRadius: "25px" }}>
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ fontSize: '25px' }}>UnList Your Property</p>

                                            <form class="mx-1 mx-md-4">

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-file-signature"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" class="form-control" onChange={(e) => { setName(e.target.value) }} />
                                                        <label class="form-label" for="form3Example1c">Property Name</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-map-marked"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" class="form-control" onChange={((e) => { setAddress(e.target.value) })} />
                                                        <label class="form-label" for="form3Example3c">Property Address</label>
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-center mb-3">
                                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label class="form-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>

                                                </div>

                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-2">
                                                    <button type="button" onClick={HandleUnList} style={{ backgroundColor: 'blue', width: '50%' }} class="btn btn-primary btn-lg">UnList</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div class="col-md-5 col-lg-5 col-xl-5 d-flex align-items-center order-1 order-lg-2">

                                            <img style={{height: '100%', width: '180%'}} src="https://img.freepik.com/premium-vector/delete-concept-deleting-data-move-unnecessary-files-trash-bin-illustration-vector_199064-472.jpg"
                                                class="img-fluid" alt="Sample" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UnList