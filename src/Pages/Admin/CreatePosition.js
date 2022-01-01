import React, { useEffect, useState } from "react";
import classes from './CreatePosition.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {IoLogOutOutline} from "react-icons/io5";

const CreatePosition = () => {

    const token = getToken();

    function getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    }

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [openPositions, setOpenPositions] = useState([]);

    const titleInputHandler = event => {
        setEnteredTitle(event.target.value)
    }

    const descriptionInputHandler = event => {
        setEnteredDescription(event.target.value)

    }
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetOpenPositions")
            .then(response => response.json())
            .then(resp => setOpenPositions(resp))
            .catch(error => console.log(error))
    }, [])


    const deleteItem = event => {
        fetch(`http://printsanaccess.online/api/Admin/RemoveOpenPosition?openPositionId=${event.target.value}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.status === 200) {
                toast.success('İlan başarıyla silindi', {
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
                    window.location.assign("http://localhost:3000/BasvuruOlustur");
                }, 2000);
            }
            if (response.status === 400) {
                toast.error('İlan silme başarısız', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored'
                });
            }
            return response.json();
        })
    }
    let positions = []
    if (openPositions.length > 0) {
        positions = openPositions.map(item => <tr key={item.OpenPositionId} role="row" className="odd">
            <td className="table-column-pr-0">
            </td>
            <td className="table-column-pl-0" style={{ "paddingRight": "125px" }}>{item.JobTitle}</td>
            <td className="table-column-pl-0" style={{ "paddingRight": "125px" }}>
                {item.Description}
            </td>
            <td><button value={item.OpenPositionId} onClick={deleteItem}>Sil</button></td>
        </tr>)
    }


    const submitHandler = event => {
        event.preventDefault();
        console.log(enteredDescription)
        console.log(enteredTitle)
        fetch("http://printsanaccess.online/api/Admin/CreateNewOpenPosition", {
            method: 'POST',
            body: JSON.stringify({
                Description: enteredDescription,
                JobTitle: enteredTitle
            }),
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }

        }).then((response) => {
            if (response.status === 200) {
                toast.success('Yeni ilan eklendi', {
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
                    window.location.assign("http://localhost:3000/BasvuruOlustur");
                }, 2000);
            }
            if (response.status === 400) {
                toast.error('Yeni ilan ekleme başarısız', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored'
                });
            }
            return response.json();
        })
    }
    const logOutHandler = () => {
        sessionStorage.removeItem('token');
        window.location.assign("http://localhost:3000/")
      }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 "  >
                <div className="container-fluid ">
                    <a href='http://localhost:3000/' className="nav-link " aria-current="page">
                        <img style={{ height: "90px", width: "220px" }} className="navbar-brand" alt="printsanlogo" src={require("../../images/printsanlogo.png").default} />
                    </a>
                    <a href='http://localhost:3000/Basvurular' className={classes.title}>Başvurular</a>
                    <a href="http://localhost:3000/Admin" className={classes.title}>Admin Paneli</a>
                    <IoLogOutOutline className={classes.icon} onClick={logOutHandler}/>
                </div>
            </nav>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%", "fontSize": "2.8rem" }}>İlan Oluştur</h2>
            <div className="container">

                <form method="post" onSubmit={submitHandler}>

                    <div className={`form-group mt-3 `}>
                        <input value={enteredTitle} type="text" className="form-control" name="title" id="title" placeholder="Title" required onChange={titleInputHandler} />
                    </div>
                    <div className={`form-group mt-3`}>
                        <input value={enteredDescription} type="text" className="form-control" name="description" id="description" placeholder="Açıklama" required onChange={descriptionInputHandler} />
                    </div>

                    <div className="text-center"><button type="submit">İlan Oluştur</button></div>

                </form>

            </div>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%", "fontSize": "2.8rem" }}>Açık İlanlar</h2>
            <div className="container">
                <thead className="thead-light">
                    <tr role="row"><th scope="col" className="table-column-pr-0 sorting_disabled" aria-label="" >
                    </th>
                        <th className="table-column-pl-0 sorting_disabled" aria-label="image" style={{ "paddingRight": "125px" }}>Başlık</th>
                        <th className="sorting" aria-controls="datatable" aria-label="Status: activate to sort column ascending" style={{ "paddingRight": "125px" }}>Açıklama</th>
                    </tr>
                </thead>
                <tbody>
                    {positions}
                </tbody>
            </div>

        </React.Fragment>
    )
}
export default CreatePosition;