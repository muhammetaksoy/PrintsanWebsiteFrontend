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
                console.log(response)
                setMachineParkours(response)
            })
    }, []);


    const machineParkoursAll = machineParkours.map(item => (
        <div key={item.CategoryId} className="col-md-3" >
            <ul className={classes.ul}>
                <h3 className={classes.h3}>{item.CategoryHeader}</h3>
                {item.ParkourList.map(x =>
                    <li className={classes.li}><IoCheckmarkDone className={classes.icon} />{x.Text}</li>
                )}
            </ul>
        </div>
    ))


    return (
        <section style={{ padding: "40px 0px", overflow: "hidden" }}>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%", "fontSize": "2.8rem" }}>Makina Parkuru</h2>
            <div className="container-fluid " style={{ "width": "85%" }}>
                <div className="row">
                    {machineParkoursAll}
                </div>
            </div>
        </section>

    )
}
