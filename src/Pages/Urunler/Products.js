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
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "fontSize": "2.8rem" }}>Ürünler</h2>
            <div className="container-fluid "  >
                <div className="row">
                    <div className="col-md-2">
                        <ul className="list-group ">
                            <li className="list-group-item active ">Emprime Baskı</li>
                            <li className="list-group-item">Enjeksiyon</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex justify-content-between flex-wrap ">
                            {productsAll}
                        </div>
                    </div>
                </div>


            </div>
        </section>

    )
}
