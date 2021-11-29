import React from 'react';
import { IoLocationOutline,IoMailOutline,IoCallOutline } from "react-icons/io5";
import classes from './Contact.module.css';

const Contact = () => {
    return (
        <section className={classes.section}>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%","fontSize": "2.8rem" }}>İletişim</h2>
            <div className="container">

                <div className="row mt-5">

                    <div className="col-lg-4">
                        <div className="info">
                        <div className="address">
                            <IoLocationOutline className={classes.icon} />
                            <h4 className={classes.h4}>Adres:</h4>
                            <p className={classes.p}>Bakır ve Prinç Sanayiciler Sitesi Karanfil Cad. No:10 Kat. 4-5-6 Beylikdüzü/İst.</p>
                        </div>

                        <div className={classes.email}>
                            <IoMailOutline className={classes.icon} />
                            <h4 className={classes.h4}>Email:</h4>
                            <p className={classes.p}>info@printsan.com</p>
                        </div>

                        <div className={classes.phone}>
                            <IoCallOutline className={classes.icon} />
                            <h4 className={classes.h4}>Telefon:</h4>
                            <p className={classes.p}>+90 212 876 10 75</p>
                        </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form method="post" className={classes.form}>
                        <div className="row">
                            <div className="col-md-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="İsim Soyisim" required />
                            </div>
                            <div className="col-md-6 form-group">
                            <input type="tel" name="phone" className="form-control" id="phone" placeholder="Telefon (5xx xxx xxxx)" pattern="[0-9]{3} [0-9]{3} [0-9]{4}"/>
                            </div>
                            <div className="col-md-6 form-group mt-3 ">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Konu" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows={5} placeholder="Mesaj" required></textarea>
                        </div>
                       
                        <div className="text-center"><button type="submit">Mesajı Gönder</button></div>
                        </form>

                    </div>

                </div>
                <div>
                <iframe title="Prinstan" style={{"border":"0", "width": "100%" , "height": "500px", "marginTop": "40px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48179.06659923187!2d28.664391000000002!3d40.999178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfbe26bd5db89b987!2sPrintsan%20Emprime!5e0!3m2!1str!2str!4v1638023347472!5m2!1str!2str"></iframe>
                </div>

        </div>
    </section>
    )
}
export default Contact;