import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';
import "./login.css";

const Login = ({ isShowLogin }) => {
  const Navigate = useNavigate();
  const [owner, setOwner] = useState(false);
  const [tenant, setTenant] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [datao, setDatao] = useState([]);
  const [datat, setDatat] = useState([]);


  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/owner')
      .then((res) => {
        setDatao(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get('http://localhost:3001/api/get/tenant')
      .then((res) => {
        setDatat(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Login = (e) => {
    e.preventDefault();
    if (owner) {
      const searchObject = datao.find((datao) => datao.OwnerName === name && datao.OwnerPassword === password);
      if (searchObject) {
        Navigate('/listingform')
      }
      else {
        console.log("Owner Not Found")
      }
    }

    else if (tenant) {
      const searchObject = datat.find((datat) => datat.TenantName === name && datat.TenantPassword === password);
      if (searchObject) {
        Navigate('/listing')
      }
      else {
        console.log("Tenant Not Found")
      }
    }
  }

  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Sign In</h1>
            <label>Username</label>
            <br></br>
            <input type="text" name="username" onChange={(e) => { setName(e.target.value) }} className="login-box" />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" onChange={(e) => { setPassword(e.target.value) }} />
            <br />
            <div style={{ display: 'flex' }}>
              <input value={owner} onChange={(e) => { e.target.checked ? setOwner(true) : setOwner(false); console.log(owner) }} type="checkbox" />
              <label>Owner</label>
              <input value={tenant} onChange={(e) => { e.target.checked ? setTenant(true) : setTenant(false); console.log(tenant) }} type="checkbox" />
              <label>Tenant</label>
            </div>
            <br />
            <input type="submit" value="LOGIN" onClick={Login} className="login-btn" />
            <Link className="Link" style={{ width: "150px", fontSize: '10px', marginBottom: '10px' }} to="/signup">SignUp</Link>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
