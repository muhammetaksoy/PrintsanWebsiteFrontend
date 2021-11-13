import React from 'react';
import classes from './PopulerProducts.module.css';
import { useState } from 'react';

const PopulerProducts = () => {
    
    const [hover, setHover] = useState(false);
    const [imgDescp, setImgDescp] = useState(" ");
    
    return(
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" onMouseEnter={()=>{setHover(true);setImgDescp("img1")}} onMouseLeave={()=> {setHover(false);setImgDescp(" ")}}>
                        <div>
                            <img src={require("../../../images/client-1.png").default} className={hover && imgDescp === "img1"? classes.imgHover : classes.img } alt=""/>
                            <div className="portfolio-info">
                                <h4 className={hover && imgDescp === "img1" ? classes.h4Hover : classes.h4}>App 1</h4>                               
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" onMouseEnter={()=>{setHover(true);setImgDescp("img2")}} onMouseLeave={()=> {setHover(false);setImgDescp(" ")}}>
                        <div>
                            <img src={require("../../../images/client-2.png").default} className={hover && imgDescp === "img2"? classes.imgHover  : classes.img } alt=""/>
                            <div className="portfolio-info">
                                <h4 className={hover && imgDescp === "img2" ? classes.h4Hover : classes.h4}>App 1</h4>                               
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" onMouseEnter={()=>{setHover(true);setImgDescp("img3")}} onMouseLeave={()=> {setHover(false);setImgDescp(" ")}}>
                        <div>
                            <img src={require("../../../images/client-3.png").default} className={hover && imgDescp === "img3"? classes.imgHover  : classes.img } alt=""/>
                            <div className="portfolio-info">
                                <h4 className={hover && imgDescp === "img3" ? classes.h4Hover : classes.h4}>App 1</h4>                               
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" onMouseEnter={()=>{setHover(true);setImgDescp("img4")}} onMouseLeave={()=> {setHover(false);setImgDescp(" ")}}>
                        <div>
                            <img src={require("../../../images/client-4.png").default} className={hover && imgDescp === "img4"? classes.imgHover  : classes.img} alt=""/>
                            <div className="portfolio-info">
                                <h4 className={hover && imgDescp === "img4" ? classes.h4Hover : classes.h4}>App 1</h4>                               
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" onMouseEnter={()=>{setHover(true);setImgDescp("img5")}} onMouseLeave={()=> {setHover(false);setImgDescp(" ")}}>
                        <div>
                            <img src={require("../../../images/client-5.png").default} className={hover && imgDescp === "img5"? classes.imgHover : classes.img} alt=""/>
                            <div className="portfolio-info">
                                <h4 className={hover && imgDescp === "img5" ? classes.h4Hover : classes.h4}>App 1</h4>                               
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" onMouseEnter={()=>{setHover(true);setImgDescp("img6")}} onMouseLeave={()=> {setHover(false);setImgDescp(" ")}}>
                        <div>
                            <img src={require("../../../images/client-6.png").default} className={hover && imgDescp === "img6"? classes.imgHover: classes.img} alt=""/>
                            <div className="portfolio-info">
                                <h4 className={hover && imgDescp === "img6" ? classes.h4Hover : classes.h4}>App 1</h4>                               
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" onMouseEnter={()=>{setHover(true);setImgDescp("img7")}} onMouseLeave={()=> {setHover(false);setImgDescp(" ")}}>
                        <div>
                            <img src={require("../../../images/client-1.png").default} className={hover && imgDescp === "img7"? classes.imgHover : classes.img} alt=""/>
                            <div className="portfolio-info">
                                <h4 className={hover && imgDescp === "img7" ? classes.h4Hover : classes.h4}>App 1</h4>                               
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" onMouseEnter={()=>{setHover(true);setImgDescp("img8")}} onMouseLeave={()=> {setHover(false);setImgDescp(" ")}}>
                        <div>
                            <img src={require("../../../images/client-2.png").default} className={hover && imgDescp === "img8"? classes.imgHover : classes.img} alt=""/>
                            <div className="portfolio-info">
                                <h4 className={hover && imgDescp === "img8" ? classes.h4Hover : classes.h4}>App 1</h4>                               
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" onMouseEnter={()=>{setHover(true);setImgDescp("img9")}} onMouseLeave={()=> {setHover(false);setImgDescp(" ")}}>
                        <div>
                            <img src={require("../../../images/client-3.png").default} className={hover && imgDescp === "img9"? classes.imgHover: classes.img} alt=""/>
                            <div className="portfolio-info">
                                <h4 className={hover && imgDescp === "img9" ? classes.h4Hover : classes.h4}>App 1</h4>                               
                                
                            </div>
                        </div>
                    </div>

        </div>

      </div>
    </section>
    )
}
export default PopulerProducts;