// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classes from './MediaDetail.module.css';
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
                <div>
                    <img src={details.PhotoUrl1} className={classes.img} alt="Medya Resim" width="600" height="300" />
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