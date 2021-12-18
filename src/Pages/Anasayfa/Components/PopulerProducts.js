import React, { useState, useEffect } from 'react';
import ProductCart from './ProductCart';
import classes from './PopulerProduct.module.css';
const PopulerProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetPopularProducts")
            .then((response) => response.json())
            .then(response => setProducts(response))
    }, []);

    const populerProducts = products.map(item => (
        <ProductCart key={item.ProductId} id={item.ProductId} image={item.PhotoUrlMain} categoryName={item.CategoryName} />

    ));
    return (

        <section id="portfolio" className="portfolio">

            <div className={`container-fluid ${classes.populerContainer}`} >
                <h1 className={classes.h1}>Popüler Ürünler</h1>
                <div className="d-flex justify-content-center flex-wrap portfolio-container">
                    {populerProducts}
                </div>

            </div>
        </section>
    )
}
export default PopulerProducts;