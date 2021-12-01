import React from "react";
import classes from './OpenPositionsCart.module.css';

const OpenPositionsCart = (props) => {
    return(
        <div className={classes.flex}>
            <div className={classes.content}>
                <p className={classes.title}>{props.title}</p>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.description}>{props.date}</p>
            </div>
            <button className={classes.btn}>Başvur</button>
        </div>
    )
}
export default OpenPositionsCart