import React,{useState,useEffect} from 'react';
import classes from './CreatePosition.module.css';

const ShowApplicants = () => {
    const token = getToken();
    function getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    }
    const [applicants,setApplicants] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Admin/GetJobApplications",{
            headers:{
                "A":"printsanAdmin",
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        })
        .then(response => response.json())
        .then(resp => setApplicants(resp))
        .catch(error => console.log(error))
    }, [])
    const applicant = applicants.map(item => <tr key={item.OpenPositionId} role="row" className="odd">
    <td className="table-column-pr-0">
    </td>
    <td className="table-column-pl-0" style={{"paddingRight":"125px"}}>{item.FullName}</td>
    <td className="table-column-pl-0" style={{"paddingRight":"125px"}}>{item.PhoneNumber}</td>
    <td className="table-column-pl-0" style={{"paddingRight":"125px"}}><a href={item.ResumeUrl} target="_blank" rel="noreferrer">Görüntülemek için tıklayın</a></td>

  </tr>)
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 "  >
                <div className="container-fluid ">
                <a href='http://localhost:3000/' className="nav-link " aria-current="page">
                    <img style={{ height: "90px", width: "220px" }} className="navbar-brand" alt="printsanlogo" src={require("../../images/printsanlogo.png").default} />
                </a>
                <a href='http://localhost:3000/BasvuruOlustur'  className={classes.title}>İş İlanı Oluştur</a>
                <a href="http://localhost:3000/Admin" className={classes.title}>Admin Paneli</a>
                </div>
            </nav>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%","fontSize": "2.8rem" }}>İlan Başvuruları</h2>
            <div className="container"> 
            <thead className="thead-light">
                <tr role="row"><th scope="col" className="table-column-pr-0 sorting_disabled" aria-label="" >
                </th>
                  <th className="table-column-pl-0 sorting_disabled" aria-label="image" style={{"paddingRight":"125px" }}>Başvuran</th>
                  <th className="table-column-pl-0 sorting_disabled" aria-label="image" style={{"paddingRight":"125px" }}>Tel No</th>
                  <th className="sorting" aria-controls="datatable" aria-label="Status: activate to sort column ascending" style={{ "paddingRight":"125px" }}>CV</th>
                </tr>
            </thead>
            <tbody>
                {applicant}
            </tbody>
        </div>
        </React.Fragment>
        
    )
}
export default ShowApplicants;