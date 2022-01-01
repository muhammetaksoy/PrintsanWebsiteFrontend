import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import classes from './OpenPositionForm.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OpenPositionForm = () => {
    const { id } = useParams()
    const [enteredName, setEnteredName] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const formData = new FormData();

    const nameInputHandler = event => {
        setEnteredName(event.target.value);
    }
    const phoneInputHandler = event => {
        setEnteredPhone(event.target.value);
    }
    const emailInputHandler = event => {
        setEnteredEmail(event.target.value);
    }
    const fileInputHandler = event => {
        formData.append("file",event.target.files[0])
    }
    const submitHandler = (event) => {
        event.preventDefault();
         fetch("http://printsanaccess.online/api/Increase/PostJobApply", {
            method: 'POST',
            body: JSON.stringify({
                FullName: enteredName,
                PhoneNumber: enteredPhone,
                Email: enteredEmail,
                OpenPositionId: id
            }),
            headers:{
                "Content-Type":"application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => {
            fetch(`http://printsanaccess.online/api/Increase/PostJobApplyDocument?jobApplicationId=${data.JobApplicationId}`, {
            method: 'POST',
            body: formData
        }).then((response) => {
            if (response.status === 200) {
              toast.success('İlana Başvuru Başarılı', {
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
            if (response.status === 400) {
              toast.error('İlana Başvuru Başarısız', {
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
            
        })
        
        setEnteredName('');
        setEnteredPhone('');
        setEnteredEmail('');
        
    }
    return (
        <React.Fragment>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%","fontSize": "2.8rem" }}>İlan Başvuru Formu</h2>
            <div className="container">
            
                <form method="post" className={classes.form} onSubmit={submitHandler}>
                
                    <div className= {`form-group mt-3 ${classes.input}`}>
                        <input value={enteredName} type="text" className="form-control" name="name" id="name" placeholder="İsim Soyisim" required onChange={nameInputHandler}/>
                    </div>
                    <div className={`form-group mt-3 ${classes.input}`}>
                        <input value={enteredPhone} type="text" className="form-control" name="phone" id="phone" placeholder="Telefon(5xxxxxxxxx)" pattern="[1-9]{1}[0-9]{9}" required onChange={phoneInputHandler}/>
                    </div>
                    <div className={`form-group mt-3 ${classes.input}`}>
                        <input value={enteredEmail} type="email" className="form-control" name="email" id="email" placeholder="Email" required onChange={emailInputHandler}/>
                    </div>
                    <div className= {`form-group mt-3 ${classes.input}`}>
                        <input type="file" accept=".doc,.docx,.pdf" name="file" id="file" required onChange={fileInputHandler}/>
                    </div>
                    <div className="text-center"><button type="submit">Başvur</button></div>

                </form>

        </div>
        </React.Fragment>
        
        
    )
}
export default OpenPositionForm;