import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { IoCheckmarkDone } from 'react-icons/io5';
import classes from './MachineParkour.module.css';

export default function MachineParkour() {
    const [machineParkours, setMachineParkours] = useState([]);

    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetMachineParkours")
            .then((response) => response.json())
            .then(response => {
                setMachineParkours(response)
            })
            .catch(error => console.log(error))
    }, []);

    let machineParkoursAll =[];
    if(machineParkours.length>0){
        machineParkoursAll = machineParkours.map(item => (
            <div key={item.CategoryId} className="col-md-6" >
                <div className={classes.wrapCollabsible} >
                    <input id={item.CategoryId} className={classes.toggle} type="checkbox" />
                    <label htmlFor={item.CategoryId} className={classes.lblToggle}>{item.CategoryHeader}</label>
                    <div className={classes.collapsibleContent}>
                        <div className={classes.contentInner} >
                            <ul className={classes.ul}>
                                {item.ParkourList.map(x =>
                                    <li key={item.MachineParkourId} className={classes.li}><IoCheckmarkDone className={classes.icon} />{x.Text}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
    
            </div>
        ))
    }
    


    return (
        <section style={{ padding: "40px 0px", overflow: "hidden" }}>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%", "fontSize": "2.8rem" }}>Makina Parkuru</h2>
            <div className="container-fluid " style={{ "width": "85%" }}>
                <div className="text-center">
                    <iframe
                        width="860"
                        height="450"
                        src="https://www.youtube.com/embed/YwGO5q4rhS8"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </iframe>
                </div>

                <div className="row " style={{ marginTop: "100px", "marginBottom": "100px" }}>
                    {machineParkoursAll}
                </div>
            </div>

        </section>

    )
}
