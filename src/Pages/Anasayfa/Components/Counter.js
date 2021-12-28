import React, {useState,useEffect} from 'react';
import CountUp from 'react-countup';
import classes from './Counter.module.css';
import { FaTshirt,FaChartLine,FaBlackTie,FaUsers } from "react-icons/fa";
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {
    const [numberEmployee, setNumberEmployee] = useState([]);
    const [numberReferences, setNumberReferences] = useState([]);
    const [numberProduct, setNumberProduct] = useState([]);
    const [produceCapacity, setProduceCapacity] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetCounter")
            .then((response) => response.json())
            .then(response => {
                setNumberEmployee(response.NumberEmployee);
                setNumberReferences(response.NumberReferences)
                setNumberProduct(response.NumberProduct)
                setProduceCapacity(response.ProduceCapacity)
            })
            .catch(error => console.log(error))
            
    },[]);


    
    return(
        <section className={classes.section}>
            <div className={`container`}>
                <div className={`row text-center`}>
                    <div className="col-md-3">
                        <FaTshirt className={classes.icon}/>
                        <h2><CountUp end={Number(numberProduct)} duration={1.5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp></h2>
                        <h3>GÜNLÜK ÜRETİM</h3>
                    </div>
                    <div className="col-md-3">
                        <FaChartLine className={classes.icon} />
                        <h2><CountUp end={Number(produceCapacity)} duration={1.5} >
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
                        <h2><CountUp end={Number(numberReferences)} duration={1.5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}</CountUp></h2>
                        <h3>ANLAŞMALI MARKA</h3>
                    </div>
                    <div className="col-md-3 ">
                        <FaUsers className={classes.icon}/>
                        <h2><CountUp end={Number(numberEmployee)} duration={1.5}>
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