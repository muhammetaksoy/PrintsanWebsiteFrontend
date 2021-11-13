import { Alert } from '@mui/material';
import * as React from 'react';

export default function Video() {
    return (

        <div className="container-fluid ">
            <div className="row m-4">
                <div className="col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "#F8F9FA" }}>

                    <Alert icon={false} variant="outlined" severity="error">

                        <h2 style={{ fontSize: 40, fontStyle: "italic" }}>
                            PRİNTSAN TANITIM VİDEOUSU
                        </h2>
                    </Alert>
                </div>
                <div className="col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-center">
                    <iframe
                        allowFullScreen={true}
                        width="720" height="360"
                        src="https://www.youtube.com/embed/j-6I5VhjY2U"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                    </iframe>

                </div>
            </div>
        </div>

    );
}
