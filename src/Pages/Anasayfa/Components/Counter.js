import React from 'react';
import CountUp from 'react-countup';
import classes from './Counter.module.css';
import { IoHappyOutline,IoAccessibilityOutline,IoAnalyticsOutline } from "react-icons/io5";

const Counter = () => {
   
    return(
        <section className={classes.section}>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3">
                        <IoAnalyticsOutline className={classes.icon}/>
                        <h2><CountUp end={45000} duration={1}/></h2>
                        <h3>GÜNLÜK ÜRETİM</h3>
                    </div>
                    <div className="col-md-3">
                        <IoAnalyticsOutline className={classes.icon} />
                        <h2><CountUp end={1300000} duration={1}/></h2>
                        <h3>AYLIK ÜRETİM</h3>
                    </div>
                    <div className="col-md-3">
                        <IoHappyOutline className={classes.icon}/>
                        <h2><CountUp end={200} duration={1}/></h2>
                        <h3>ANLAŞMALI MARKA</h3>
                    </div>
                    <div className="col-md-3">
                        <IoAccessibilityOutline className={classes.icon}/>
                        <h2><CountUp end={50} duration={1}/></h2>
                        <h3>ÇALIŞAN</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter;