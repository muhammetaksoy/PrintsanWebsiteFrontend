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
                setDetails(response)
            })
            .catch(error => console.log(error))
    }, [id]);

    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <div className='d-flex justify-content-between'>
                    <div>
                        {
                            !details.PhotoUrl1 == " " &&
                            <ReactFancyBox
                                className={classes.image}
                                image={details.PhotoUrl1} />
                        }
                    </div>
                    <div>
                        {
                            !details.PhotoUrl2 == " " &&
                            <ReactFancyBox
                                className={classes.image}
                                image={details.PhotoUrl2} />
                        }
                    </div>
                    <div>
                        {
                            !details.PhotoUrl3 == " " &&
                            <ReactFancyBox
                                className={classes.image}
                                image={details.PhotoUrl3} />
                        }
                    </div>
                    <div>
                        {
                            !details.PhotoUrl4 == " " &&
                            <ReactFancyBox
                                className={classes.image}
                                image={details.PhotoUrl4} />
                        }
                    </div>


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