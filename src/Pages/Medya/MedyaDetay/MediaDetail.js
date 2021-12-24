// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classes from './MediaDetail.module.css';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/src/fancybox/fancybox.css'
const MediaDetail = () => {

    const { id } = useParams()
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`http://printsanaccess.online/api/Explore/GetSingleArticle?articleId=${id}`)
            .then((response) => response.json())
            .then(response => {
                console.log(response)
                setDetails(response)
            })
    }, [id]);

    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <div className='d-flex justify-content-between'>
                    <ReactFancyBox
                        className={classes.image}
                        image={details.PhotoUrl1} />
                    <ReactFancyBox
                        image={details.PhotoUrl2} />
                    <ReactFancyBox
                        image={details.PhotoUrl3} />
                    <ReactFancyBox
                        image={details.PhotoUrl4} />

                </div>

                <div className={classes.cardBody}>
                    <span className={classes.tagRed}>{details.PublishedDate}</span>
                    <h4>{details.Header}</h4>
                    <p>{details.Text}</p>
                </div>
                <div className={classes.cardFooter}>
                    <Link className={classes.button} to="/Medya" >
                        Geri Dön
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default MediaDetail;