import React, { useEffect, useState } from 'react';
import classes from './Clients.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";



const Clients = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetReferences")
            .then((response) => response.json())
            .then(response => setImages(response))
    }, []);

    const referances = images.map(item => (
        <div key={item.ReferenceId} className="col-lg-2 col-md-4 col-6 ">
            <img className={classes.img} src={item.PhotoUrl} alt="aaa" />
        </div>
    ))


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
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
        ul {
            align-items: center !important;
        }
    `;

    return (
        <div>
            <h2 className={classes.h2}>REFERANSLAR</h2>
            <section className={classes.section}>

                <div className="container-fluid " style={{ "width": "85%" }}>

                    <div className="row mx-auto">
                        <StyledCarousel

                            infinite={true}
                            responsive={responsive}
                            autoPlay={true}
                            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        >

                            {referances}

                        </StyledCarousel>


                    </div>

                </div>
            </section>
        </div>

    )
}
export default Clients;