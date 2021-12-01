import * as React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css';
import { FaPlayCircle } from "react-icons/fa";
import classes from './Video.module.css';

export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (

        <div className="container-fluid" style={{ "width": "80%" }}>
            <div className="row " >


                <div className="col-lg-4 col-md-6 col-12 ">

                    <div style={{ textAlign: "center", "height": "100%", display: "flex", justifyContent: "center", "alignItems": "center" }}>
                        <p style={{ fontSize: 40, }}>
                            SANAL TUR
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 " >
                    <div style={{ textAlign: "center", "height": "100%", display: "flex", justifyContent: "center", "alignItems": "center" }}>
                        <React.Fragment>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="j-6I5VhjY2U" onClose={() => setOpen(false)} />
                            <FaPlayCircle className={classes.pointer} onClick={() => setOpen(true)} style={{ fontSize: "120", color: "#d9232d" }} />
                        </React.Fragment>

                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-12 " >

                    <img style={{ height: "400px", "width": "686px" }} alt="deneme" src={require("../../../images/bina.jpg").default} />
                </div>




            </div>


        </div>


    );
}
