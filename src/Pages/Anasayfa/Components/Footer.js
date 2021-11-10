import "../../../App.css";
import classes from './Footer.module.css';
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerTop}>
                <div className="container">

                    <div className="d-flex justify-content-between">
                        <div className="footer-info">
                            <h3> <strong>Printsan</strong> </h3>
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


                        <div className="footer-links">
                            <h3> <strong>Usefull Links</strong> </h3>
                            <ul className="list-unstyled">
                                <li className="my-2">
                                    <a className="text-white text-decoration-none " href="#">Web Design</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-white text-decoration-none" href="#">Web Development</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-white text-decoration-none" href="#">Product Management</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-white text-decoration-none" href="#">Marketing</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-white text-decoration-none" href="#">Graphic Design</a>
                                </li>

                            </ul>
                        </div>

                        <div className="footer-links">
                            <h3> <strong>Our Services</strong> </h3>
                            <ul className="list-unstyled">
                                <li className="my-2">
                                    <a className="text-white text-decoration-none " href="#">Web Design</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-white text-decoration-none" href="#">Web Development</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-white text-decoration-none" href="#">Product Management</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-white text-decoration-none" href="#">Marketing</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-white text-decoration-none" href="#">Graphic Design</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>


            <div className={classes.copyright}>
                © Copyright <strong><span>Printsan</span></strong>. All Rights Reserved
            </div>


        </footer>

    )
}
export default Footer;