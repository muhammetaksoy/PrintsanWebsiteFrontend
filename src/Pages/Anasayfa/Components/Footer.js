import "../../../App.css";
import classes from './Footer.module.css';
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import React from "react";
import { Link } from "react-router-dom";
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
                                <a href="https://www.google.com" className="me-2">
                                    <IoLogoFacebook className={classes.icon} />
                                </a>
                                <a href="https://www.google.com" className="me-2">
                                    <IoLogoInstagram className={classes.icon} />
                                </a>
                                <a href="https://www.google.com" className="me-2">
                                    <IoLogoYoutube className={classes.icon} />
                                </a>
                            </div>
                        </div>

                        <div className="footer-links w-25">

                            <ul className="list-unstyled">
                                <div className="row">
                                    <h3> <strong>Site Haritası</strong> </h3>
                                    <div className="col-md-6 p-0">
                                        <li className="my-2">
                                        </li>
                                        <li className="my-2">
                                            <Link to="/Politikalar" className="nav-link text-white text-decoration-none " aria-current="page">Politikalar</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/Urunler" className="nav-link text-white text-decoration-none " aria-current="page">Ürünler</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/Uretim" className="nav-link text-white text-decoration-none " aria-current="page">Üretim</Link>
                                        </li>
                                    </div>
                                    <div className="col-md-6 p-0">

                                        <li className="my-2">
                                            <Link to="/MakinaParkuru" className="nav-link text-white text-decoration-none " aria-current="page">Makina Parkuru</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/Medya" className="nav-link text-white text-decoration-none " aria-current="page">Medya</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/AcikPozisyonlar" className="nav-link text-white text-decoration-none " aria-current="page">Kariyer</Link>

                                        </li>
                                        <li className="my-2">
                                            <Link to="/Iletisim" className="nav-link text-white text-decoration-none " aria-current="page">İletişim</Link>
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