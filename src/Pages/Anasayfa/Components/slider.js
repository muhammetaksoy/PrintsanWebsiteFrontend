import React, { Component } from "react";
import classes from './Slider.module.css';
export default class Slider extends Component {
    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel  slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bg-danger" aria-current="true" aria-label="Slide 0"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active bg-danger" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="active bg-danger" aria-label="Slide 2"></button>
                    
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img alt="deneme" src={require("../../../images/1.jpg").default} className="d-block w-100" />
                        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                            <div className={classes.bg}>
                                
                                <h2>Printsan, başarılı geçmişiyle emprime sektöründe Türkiye’nin önde gelen firmaları arasında yer almaktadır..</h2>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img alt="deneme" src={require("../../../images/2.jpg").default} className="d-block w-100" />
                        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div className={classes.bg}>
                                
                                <h2> Ulaştığı başarının arkasında, müşteri odaklı ve verimliliği, güveni ve kaliteyi merkez alan bir yönetim yaklaşımı vardır.</h2>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img alt="deneme" src={require("../../../images/3.jpg").default} className="d-block w-100" />
                        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                        <div className={classes.bg}>
                                
                                <h2>Hizmetlerini her zaman için müşteri memnuniyeti ve güven ilkelerini temel alarak sunmaktadır. Bunun sonucunda da emprime sektöründe saygın ve güvenilen bir kurum olmuştur.</h2>
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
