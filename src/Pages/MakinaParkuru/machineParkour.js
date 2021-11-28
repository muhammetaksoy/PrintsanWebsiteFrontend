import React, { useEffect } from 'react';
import { useState } from 'react';
import classes from './MachineParkour.module.css';

const MachineParkour = () => {
    const [parkurs, setParkurs] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetMachineParkours")
            .then((response) => response.json())
            .then(response => setParkurs(response))
    }, []);

    return (
        <section className={classes.section}>

        </section>
    )

}
export default MachineParkour;