import React, { useState } from "react";
import classes from './OpenPositionForm.module.css'
const JobAplly = () => {
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
                OpenPositionId: 0
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
        })
        .catch(error => console.log(error))
            
        })
        
        setEnteredName('');
        setEnteredPhone('');
        setEnteredEmail('');
        
    }
    return (
        <React.Fragment>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%","fontSize": "2.8rem" }}>Bizimle Çalışmak İster Misiniz?</h2>
            <div className="container">
            
                <form method="post" className={classes.form} onSubmit={submitHandler}>
                
                    <div className= {`form-group mt-3 ${classes.input}`}>
                        <input value={enteredName} type="text" className="form-control" name="name" id="name" placeholder="İsim Soyisim" required onChange={nameInputHandler}/>
                    </div>
                    <div className={`form-group mt-3 ${classes.input}`}>
                        <input value={enteredPhone} type="text" className="form-control" name="phone" id="phone" pattern="[1-9]{1}[0-9]{9}" placeholder="Telefon(5xxxxxxxxx)" required onChange={phoneInputHandler}/>
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
export default JobAplly;