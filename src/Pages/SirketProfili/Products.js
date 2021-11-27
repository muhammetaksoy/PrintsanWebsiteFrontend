import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import classes from './Products.module.css';

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetActiveProducts")
            .then((response) => response.json())
            .then(response => setProducts(response))
    }, []);


    const productsAll = products.map(item => (
        <div>
            <div className="card border-0" >
                <div className={classes.wrap}>
                    <img className={classes.img} src={item.PhotoUrlMain} alt="Card cap" onMouseEnter={e => item.PhotoUrlFocused ? e.currentTarget.src = item.PhotoUrlFocused : e.currentTarget.src = item.PhotoUrlMain} onMouseLeave={e => e.currentTarget.src = item.PhotoUrlMain} />
                    <div className="card-body">
                        <h5 className="card-title text-center text-danger">{item.CategoryName}</h5>
                    </div>
                </div>
            </div>
            <br />
        </div>
    ))


    return (
        <section style={{ padding: "40px 0px", overflow: "hidden" }}>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%", "fontSize": "2.8rem" }}>Ürünler</h2>
            <div className="container-fluid " style={{ 'width': "85%" }} >
                <div className="d-flex justify-content-between flex-wrap ">
                    {productsAll}
                </div>

            </div>
        </section>

    )
}
