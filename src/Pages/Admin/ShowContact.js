import React, { useEffect, useState } from 'react';
import {IoLogOutOutline} from "react-icons/io5";
import classes from './CreatePosition.module.css';
import { toast } from 'react-toastify';
const ShowContact = () => {
    const token = getToken();
    function getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    }
    const [messages,setMessages] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Admin/GetContactForms",{
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        })
        .then(response => response.json())
        .then(resp => setMessages(resp))
        .catch(error => console.log(error))
    }, [])
    const message = messages.map(item => <tr key={item.ContactFormId}>
  
        <td>{item.FullName}</td>
        <td>{item.PhoneNumber}</td>
        <td>{item.Email}</td>
        <td>{item.Header}</td>
        <td>{item.Text}</td>
        <td>{item.CreatedOnStr}</td>
    
      </tr>)
    const logOutHandler = () => {
        sessionStorage.removeItem('token');
        toast.success('Admin oturumu kapatıldı', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        });
        setTimeout(() => {
          window.location.assign("http://localhost:3000/Anasayfa");
        },1000);
      }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 "  >
                <div className="container-fluid ">
                <a href='http://localhost:3000/' className="nav-link " aria-current="page">
                    <img style={{ height: "90px", width: "220px" }} className="navbar-brand" alt="printsanlogo" src={require("../../images/printsanlogo.png").default} />
                </a>
                <a href='http://localhost:3000/BasvuruOlustur'  className={classes.title}>İş İlanı Oluştur</a>
                <a href='http://localhost:3000/Basvurular'  className={classes.title}>Başvurular</a>
                <a href="http://localhost:3000/Admin" className={classes.title}>Admin Paneli</a>
                <IoLogOutOutline className={classes.icon} onClick={logOutHandler}/>
                </div>
            </nav>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%","fontSize": "2.8rem" }}>Mesajlar</h2>
            <table className="table table-responsive mx-auto table-hover" style={{ "width": "85%"}}>
                    <thead>
                        <tr>
                            <th scope="col">İsim Soyisim</th>
                            <th scope="col">Tel No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Konu</th>
                            <th scope="col">Açıklama</th>
                            <th scope="col">Tarih</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {message}

                    </tbody>
            </table>
        </React.Fragment>
    )
}
export default ShowContact;