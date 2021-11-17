import React,{useState} from "react";
import classes from './ProductCart.module.css';
const ProductCart = (props) => {
    const [hover, setHover] = useState(false);
    const [imgDescp, setImgDescp] = useState(" ");
    return(
        <div className="col-lg-4 col-md-6 portfolio-item filter-app mt-4" >
            <div className={classes.wrap}>
                <img src={props.image} className={classes.img} alt=""/>
                <h4 className={classes.h4}>{props.categoryName}</h4>                              
            </div>
         </div>
    )
}
export default ProductCart;