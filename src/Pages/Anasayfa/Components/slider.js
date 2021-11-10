import React, { Component } from "react";
export default class Slider extends Component {
    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel  slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bg-danger" aria-current="true" aria-label="Slide 0"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active bg-danger" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="active bg-danger" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className="active bg-danger" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img alt="deneme" src={require("../../../images/Slider4.jpeg").default} alt="aaa" className="d-block w-100" />
                        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                            <div>
                                <h1>Welcome To Printsan</h1>
                                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img alt="deneme" src={require("../../../images/Slider1.jpeg").default} alt="aaa" className="d-block w-100" />
                        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                            <div>
                                <h1>Welcome To Printsan</h1>
                                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="" className="btn btn-danger text-white rounded">Read More</a>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img alt="deneme" src={require("../../../images/Slider2.jpeg").default} alt="aaa" className="d-block w-100" />
                        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                            <div>
                                <h1>Welcome To Printsan</h1>
                                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img alt="deneme" src={require("../../../images/Slider3.jpeg").default} alt="aaa" className="d-block w-100" />
                        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                            <div>
                                <h1>Welcome To Printsan</h1>
                                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            </div>

                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}
