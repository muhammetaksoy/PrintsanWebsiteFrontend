import "../../../App.css";
import classes from './Footer.module.css';
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import React from "react";
const Footer = () => {
    return (
        <footer className={classes.footer} >
            <div className={classes.footerTop}>
                <div className="container-fluid w-75">
                    <div className="d-flex justify-content-between">
                        <div className="footer-info">
                            <h3> <strong>Printsan Emprime Sanayi ve Ticaret Ltd.Şti.</strong> </h3>
                            <p>
                                Bakır ve Prinç Sanayiciler Sitesi Karanfil Cad. No:10 Kat. 4-5-6 Beylikdüzü/İst.<br /><br />
                                <strong>Telefon: </strong>+90 212 876 10 75 <br />
                                <strong>Email: </strong>info@printsan.com<br />
                            </p>
                            <div className={classes.socialLinks}>
                                <a href="" className="me-2">
                                    <IoLogoFacebook className={classes.icon} />
                                </a>
                                <a href="" className="me-2">
                                    <IoLogoInstagram className={classes.icon} />
                                </a>
                                <a href="" className="me-2">
                                    <IoLogoYoutube className={classes.icon} />
                                </a>
                            </div>
                        </div>

                        <div className="footer-links w-25">
                            <h3> <strong>Site Haritası</strong> </h3>
                            <ul className="list-unstyled">
                                <div className="row">
                                    <div className="col-md-6">
                                        <li className="my-2">
                                            <a className="text-white text-decoration-none " href="#">Hakkımızda</a>
                                        </li>
                                        <li className="my-2">
                                            <a className="text-white text-decoration-none" href="#">Politikalar</a>
                                        </li>
                                        <li className="my-2">
                                            <a className="text-white text-decoration-none" href="#">Ürünler</a>
                                        </li>
                                        <li className="my-2">
                                            <a className="text-white text-decoration-none" href="#">Üretim</a>
                                        </li>
                                    </div>
                                    <div className="col-md-6">

                                        <li className="my-2">
                                            <a className="text-white text-decoration-none" href="#">Makina Parkuru</a>
                                        </li>
                                        <li className="my-2">
                                            <a className="text-white text-decoration-none" href="#">Medya</a>
                                        </li>
                                        <li className="my-2">
                                            <a className="text-white text-decoration-none" href="#">Kariyer</a>
                                        </li>
                                        <li className="my-2">
                                            <a className="text-white text-decoration-none" href="#">İletişim</a>
                                        </li>
                                    </div>
                                </div>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className={classes.copyright}>
                Copyright <strong><span>Printsan</span></strong> Emprime 2021 | Tüm Hakları Saklıdır.
            </div>


        </footer>

    )
}
export default Footer;