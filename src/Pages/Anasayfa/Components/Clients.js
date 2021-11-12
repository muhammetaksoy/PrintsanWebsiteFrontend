import classes from './Clients.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";
import React from 'react';


const Clients = () => {
    let className = classes.img;
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const StyledCarousel = styled(Carousel)`
        li{
            width:414px !important;
        }
    `;

    return (
        <section className={classes.section}>

            <div className="container">
                <h2 className={classes.h2}>REFERANSLAR</h2>
                <div className="row">
                    <StyledCarousel

                        infinite={true}
                        responsive={responsive}
                        autoPlay={true}
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    >

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img className={className} src={require("../../../images/client-1.png").default} alt="aaa" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img className={className} src={require("../../../images/client-2.png").default} alt="aaa" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img className={className} src={require("../../../images/client-3.png").default} alt="aaa" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img className={className} src={require("../../../images/client-4.png").default} alt="aaa" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img className={className} src={require("../../../images/client-5.png").default} alt="aaa" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img className={className} src={require("../../../images/client-6.png").default} alt="aaa" />
                        </div>

                    </StyledCarousel>


                </div>

            </div>
        </section>
    )
}
export default Clients;