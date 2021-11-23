import { Alert } from '@mui/material';
import { width } from '@mui/system';
import * as React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css';
import { FaPlayCircle } from "react-icons/fa";

export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (

        <div className="container-fluid w-75">
            <div className="row " >


                <div className="col-lg-4 col-md-6 col-12 ">

                    <div style={{ textAlign: "center", "height": "100%", display: "flex", justifyContent: "center", "alignItems": "center" }}>
                        <p style={{ fontSize: 40, }}>
                            PRİNTSAN TANITIM
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 " >
                    <div style={{ textAlign: "center", "height": "100%", display: "flex", justifyContent: "center", "alignItems": "center" }}>
                        <React.Fragment>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="j-6I5VhjY2U" onClose={() => setOpen(false)} />
                            <FaPlayCircle onClick={() => setOpen(true)} style={{ fontSize: "120", color: "#d9232d" }} />
                        </React.Fragment>

                    </div>

                </div>
                <div className="col-lg-4 col-md-6 col-12 " >

                    <img style={{ height: "400px", "width": "100%" }} alt="deneme" src={require("../../../images/bina.png").default} />
                </div>




            </div>


        </div>


    );
}
