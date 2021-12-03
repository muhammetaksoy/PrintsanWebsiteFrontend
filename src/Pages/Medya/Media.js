import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Media.module.css';
const Media = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetArticles")
            .then((response) => response.json())
            .then(response => {
                console.log(response)
                setArticles(response)
            })
    }, []);

    return (
        <div className={classes.container}>
            <h2 className="text-center w-100  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%", "fontSize": "2.8rem" }}>Medya</h2>
            {
                articles.map(item => (
                    <div className={classes.card}>
                        <div>
                            <img src={item.PhotoUrl1} className={classes.img} alt="Medya Resim  " width="600" height="200" />
                        </div>
                        <div className={classes.cardBody}>
                            <span className={classes.tagRed}>{item.PublishedDate.slice(0, 10)}</span>
                            <h4>{item.Header}</h4>
                            <p>{item.Text.substring(0, 150)}...</p>
                        </div>
                        <div className={classes.cardFooter}>
                            <Link className={classes.button} to={`/MedyaDetay/${item.ArticleId}`} >
                                Detay
                            </Link>
                        </div>
                    </div>
                ))
            }

        </div>
    )

}
export default Media;