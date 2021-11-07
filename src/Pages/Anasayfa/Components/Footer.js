import "../../../App.css";
import classes from './Footer.module.css';
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerTop}>
                <div className="container">

                    <div className="d-flex justify-content-between">
                        <div className="footer-info">
                            <h3> <strong>Sailor</strong> </h3>
                            <p>
                                A108 Adam Street <br />
                                NY 535022, USA<br /><br />
                                <strong>Phone: </strong> +1 5589 55488 55<br />
                                <strong>Email: </strong> info @example.com<br />
                            </p>

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
                © Copyright <strong><span>Sailor</span></strong>. All Rights Reserved
            </div>


        </footer>

    )
}
export default Footer;