import React from 'react';
import CountUp from 'react-countup';
import classes from './Counter.module.css';
import { IoHappyOutline,IoAccessibilityOutline,IoAnalyticsOutline } from "react-icons/io5";
import { FaTshirt,FaChartLine,FaBlackTie,FaUsers } from "react-icons/fa";
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {
   
    return(
        <section className={classes.section}>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3">
                        <FaTshirt className={classes.icon}/>
                        <h2><CountUp end={45000} duration={1.5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp></h2>
                        <h3>GÜNLÜK ÜRETİM</h3>
                    </div>
                    <div className="col-md-3">
                        <FaChartLine className={classes.icon} />
                        <h2><CountUp end={1300000} duration={1.5} >
                                {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                                )}
                            </CountUp></h2>
                        <h3>AYLIK ÜRETİM</h3>
                    </div>
                    <div className="col-md-3">
                        <FaBlackTie className={classes.icon}/>
                        <h2><CountUp end={200} duration={1.5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp></h2>
                        <h3>ANLAŞMALI MARKA</h3>
                    </div>
                    <div className="col-md-3">
                        <FaUsers className={classes.icon}/>
                        <h2><CountUp end={50} duration={1.5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp></h2>
                        <h3>ÇALIŞAN</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter;