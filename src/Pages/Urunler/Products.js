import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import classes from './Products.module.css';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [productCopy, setProductCopy] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetActiveProducts")
            .then((response) => response.json())
            .then(response => {
                setProducts(response) 
                setCategory(response)
                setProductCopy(response)
            })
    }, []);

    const onClickHandler = (e) => {
        //Products_active__ff4XP classı "classes.active" in tarayıcıda derlenmiş hali
        document.querySelector(".Products_active__1qF26").classList.remove("Products_active__1qF26")
        e.currentTarget.classList.add("Products_active__1qF26")
        if(e.currentTarget.innerText === "Tümü"){
            setProductCopy(products)
        }else{
            const filteredProducts = products.filter(x => x.CategoryName === e.currentTarget.innerText)
            setProductCopy(filteredProducts);
        }


    }

    const categories = new Set(category.map(item=> item.CategoryName));
    let categoryArray = Array.from(categories);
    const categoryList = categoryArray.map(item =><li value={item} className={`${classes.li} list-group-item`} key={item} onClick={onClickHandler}>{item}</li> )

    const productsAll = productCopy.map(item => (
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
                    <ul className="list-group"> 
                        <li className={`${classes.li} ${classes.active} list-group-item`}  onClick={onClickHandler}>Tümü</li>
                           {categoryList}
                        </ul>
                    </div>
                    <div className="col-md-10" style={{"width": "75%"}}>
                        <div className="d-flex flex-wrap " style={{"columnGap":"70px"}}>
                            {productsAll}
                        </div>
                    </div>
                </div>


            </div>
        </section>

    )
}
