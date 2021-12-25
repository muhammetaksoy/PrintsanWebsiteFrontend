import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';


async function loginUser(credentials) {

    return fetch('http://printsanaccess.online/getToken', {
      
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'userName': credentials.userName,
        'password':credentials.password,
        'grant_type': 'password'
    })       
  })

  .then(response=>{
    if(response.status===200){
      window.location.assign("http://localhost:3000/Admin")
    }
    return response.json();
  }).then(data=>data.access_token)



} 


export default function Login({ setToken }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            userName,
            password,
            grant_type:"password"
        });
        
        setToken(token);
      }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit" >Submit</button>
      </div>
    </form>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}