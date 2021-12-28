import React,{useState,useEffect} from "react";
import OpenPositionsCart from "./OpenPositionsCart";
import classes from './OpenPositions.module.css';

const OpenPositions = () => {
    const [positions,setPositions] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetOpenPositions")
            .then((response) => response.json())
            .then(response => setPositions(response))
            .catch(error => console.log(error))
    }, []);
    let positionsToPrint = [];
    if(positions.length>0){
        positionsToPrint = positions.map(item => <OpenPositionsCart id={item.OpenPositionId} key={item.OpenPositionId} title={item.JobTitle} description={item.Description} date={item.PublishedDate}/>)
    }
    
    return(
        <section className={classes.section}>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%","fontSize": "2.8rem" }}>İlanlar</h2>
            <div className="container">
                <div className="row">
                    {positionsToPrint}
                </div>
            </div>

        </section>
    )
}
export default OpenPositions;