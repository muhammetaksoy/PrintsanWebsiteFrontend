import React from 'react';
const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%","fontSize": "2.8rem" }}>İletişim</h2>
            <div className="container">

                <div className="row mt-5">

                    <div className="col-lg-4">
                        <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Adres:</h4>
                            <p>Bakır ve Prinç Sanayiciler Sitesi Karanfil Cad. No:10 Kat. 4-5-6 Beylikdüzü/İst.</p>
                        </div>

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@printsan.com</p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Telefon:</h4>
                            <p>+90 212 876 10 75</p>
                        </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form method="post" role="form">
                        <div className="row">
                            <div className="col-md-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="İsim Soyisim" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Konu" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Mesaj" required></textarea>
                        </div>
                       
                        <div className="text-center"><button type="submit">Mesajı Gönder</button></div>
                        </form>

                    </div>

                </div>
                <div>
                <iframe style={{"border":"0", "width": "100%" , "height": "600px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48179.06659923187!2d28.664391000000002!3d40.999178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfbe26bd5db89b987!2sPrintsan%20Emprime!5e0!3m2!1str!2str!4v1638023347472!5m2!1str!2str"></iframe>
                </div>

        </div>
    </section>
    )
}
export default Contact;