import React, { useState } from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './SignUp.css'

function SignUp (e) {
    const Navigate = useNavigate();
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Contact, setContact] = useState('');
    const [owner, setOwner] = useState(false);
    const [care, setCare] = useState(false);
    const [stenant, setStenant] = useState(false);
    const [ftenant, setFtenant] = useState(false);

    const submitLogin = (e) => {
        if (owner || care) {
            let type = owner === true ? 'Owner' : 'CareTaker Owner';
            Axios.post('http://localhost:3001/api/login/owner', {
                Name : Name,
                Email : Email,
                Password : Password,
                Contact : Contact,
                OwnerType : type
            }).then(() => {
                console.log('OK');
            });
            e.target.reset();
        }
        else if (stenant || ftenant) {
            let type = ftenant === true ? 'Family (Tenant)' : 'Single (Tenant)';
            Axios.post('http://localhost:3001/api/login/tenant', {
                Name : Name,
                Email : Email,
                Password : Password,
                Contact : Contact,
                TenantType : type
            }).then(() => {
                console.log('OK');
            });
            e.target.reset();
        }
        Navigate('/');
        e.target.reset();


    };


    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: '#eee' }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" onChange={(e) => {setName(e.target.value); console.log(Name)}} />
                                                        <label className="form-label" for="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" onChange={((e) => {setEmail(e.target.value)})} />
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control"  onChange={(e) => {setPassword(e.target.value)}} />
                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="tel" id="form3Example4cd" className="form-control" onChange={((e) => {setContact(e.target.value)})} />
                                                        <label className="form-label" for="form3Example4cd">Contact No</label>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '-18px' }} >
                                                    <input value={owner} disabled={ftenant || care || stenant === true ? true : false} onChange={(e) => { e.target.checked ? setOwner(true) : setOwner(false); console.log(owner) }} type="checkbox" />
                                                    <p style={{ marginTop: '15px' }}>Owner</p>
                                                    <input value={care} disabled={owner || ftenant || stenant === true ? true : false} onChange={(e) => { e.target.checked ? setCare(true) : setCare(false); console.log(care) }} type="checkbox" />
                                                    <p style={{ marginTop: '15px' }}>Caretaker Owner</p>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '-18px' }} >
                                                    <input value={stenant} disabled={owner || care || ftenant === true ? true : false} onChange={(e) => { e.target.checked ? setStenant(true) : setStenant(false); console.log(stenant) }} type="checkbox" />
                                                    <p style={{ marginTop: '15px' }}>Tenant (Single)</p>
                                                    <input value={ftenant} disabled={owner || care || stenant === true ? true : false} onChange={(e) => { e.target.checked ? setFtenant(true) : setFtenant(false); console.log(ftenant) }} type="checkbox" />
                                                    <p style={{ marginTop: '15px' }}>Tenant (Family)</p>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-3">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>

                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-2">
                                                    <button type="button" onClick={submitLogin} style={{ backgroundColor: 'blue', width: '50%' }} className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample" />

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

export default SignUp