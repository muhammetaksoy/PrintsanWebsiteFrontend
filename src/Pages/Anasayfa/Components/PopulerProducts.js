import React,{useState, useEffect} from 'react';
import ProductCart from './ProductCart';
const PopulerProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetPopularProducts")
            .then((response) => response.json())
            .then(response => setProducts(response))
    },[]);
    console.log(products)
    const populerProducts = products.map(item => (
        <ProductCart key={item.ProductId}  id={item.ProductId} image={item.PhotoUrlMain} categoryName={item.CategoryName} />
        
    ));
    console.log(populerProducts)
    return(
        
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="row portfolio-container">
                    {populerProducts}
                </div>

            </div>
        </section>
    )
}
export default PopulerProducts;