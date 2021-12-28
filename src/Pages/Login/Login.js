import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

async function loginUser(credentials) {
  return fetch("http://printsanaccess.online/getToken", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      userName: credentials.userName,
      password: credentials.password,
      grant_type: "password",
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        window.location.assign("http://localhost:3000/Admin");
      }
      return response.json();
    })
    .then((data) => data.access_token)
    .catch(error => console.log(error))
}

export default function Login({ setToken }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password,
      grant_type: "password",
    });

    setToken(token);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 ">
        <div className="container-fluid ">
          <img
            style={{ height: "90px", width: "220px" }}
            className="navbar-brand"
            alt="printsanlogo"
            src={require("../../images/printsanlogo.png").default}
          />

          
        </div>
      </nav>

      <form onSubmit={handleSubmit} className="login-wrapper">
        <h1 className="text-center">Admin Giriş Sayfası</h1>
        <div className="container">
          <label>
            <b>Kullanıcı Adı</b>
          </label>
          <input
            className="inputStyle"
            type="text"
            placeholder="Kullanıcı Adını giriniz"
            required
            onChange={(e) => setUserName(e.target.value)}
          />

          <label>
            <b>Şifre</b>
          </label>
          <input
            className="inputStyle"
            type="password"
            placeholder="Şifreyi Giriniz"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="buttonStyle" type="submit">
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
