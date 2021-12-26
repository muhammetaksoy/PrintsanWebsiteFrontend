import React,{useState} from "react";

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
        console.log(enteredTitle)
        
    }

    const descriptionInputHandler = event => {
        setEnteredDescription(event.target.value)
        
    }
    fetch("http://printsanaccess.online/api/Explore/GetOpenPositions")
    .then(response => response.json())
    .then(resp => setOpenPositions(resp))

    const positions = openPositions.map(item => <li key={item.OpenPositionId}><p>{item.JobTitle}</p><p>{item.Description}</p> </li>)

    const submitHandler = event => {
        event.preventDefault();
        fetch("http://printsanaccess.online/api/Admin/CreateNewOpenPosition",{
            method:'POST',
            body: JSON.stringify({
                JobTitle: enteredTitle,
                Description: enteredDescription
                
            }),
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json"
            }
            
        })
        .then(response => console.log(response))
    }
    return(
        <React.Fragment>
        <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%","fontSize": "2.8rem" }}>İlan Oluştur</h2>
        <div className="container">
        
            <form method="post" onSubmit={submitHandler}>
            
                <div className= {`form-group mt-3 `}>
                    <input value={enteredTitle} type="text" className="form-control" name="title" id="title" placeholder="Title" required onChange={titleInputHandler}/>
                </div>
                <div className={`form-group mt-3`}>
                    <input value={enteredDescription} type="text" className="form-control" name="description" id="description" placeholder="Açıklama" required onChange={descriptionInputHandler}/>
                </div>
               
                <div className="text-center"><button type="submit">İlan Oluştur</button></div>
                
            </form>

        </div>
        <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%","fontSize": "2.8rem" }}>Açık İlanlar</h2>
        <div className="row">
            <ul>
                {positions}
            </ul>
        </div>
        
    </React.Fragment>
    )
}
export default CreatePosition;