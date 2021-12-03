import React from "react";
import { Link } from 'react-router-dom';
import classes from './OpenPositionsCart.module.css';

const OpenPositionsCart = (props) => {
    return(
        <div className={classes.flex}>
            <div className={classes.content}>
                <p className={classes.title}>{props.title}</p>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.description}>{props.date}</p>
            </div>
            <Link className={classes.btn} to={`/AcikPozisyonlarForm/${props.id}`} >Başvur</Link>
            
        </div>
    )
}
export default OpenPositionsCart