import React, { useEffect, useState } from "react";
import classes from './AboutUs.module.css';

const AboutUs = () => {
    const [certificates, setCertificates] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetCertificates")
            .then((response) => response.json())
            .then(response => setCertificates(response))
    }, []);

    const certificateAll = certificates.map(item => (
        <div className="col-lg-4 text-center " key={item.CertificateId}>

            <a href={item.PDFUrl} target="_blank" rel="noreferrer">
                <img src={item.PhotoUrl} alt={item.Description} className={classes.img} /></a>


        </div>
    ))
    return (
        <section className={classes.section} >
            <div className="container-fluid" style={{ "width": "85%"}}>
                <div className="row">
                    <h2 className="text-center p-2 alert alert-danger border-0 rounded-0 " style={{"fontSize": "2.8rem" }}>Hakkımızda</h2>
                    <p>Printsan Emprime, 1994 yılından bu yana emprime parça baskıalanında hizmet vermektedir. 2006 yılında Beylikdüzü Organize Sanayi Bölgesindeki 4750 m2’lik tam otomasyonlu binada faaliyet göstermektedir.
                        Günlük baskı kapasitesi 65.000 adet olup parça baskının haricinde gofre, enjeksiyon, frekans, flok, süblime ve taş üretimi yapmaktadır.</p>
                    <p>Deneyimli kadrosu, kaliteli, hızlı ve ekonomik tarzıyla sektörün lideri konumundaki firmalar arasındadır.
                        Üretilen ürünün, kalite kontrolü yerine kalitenin üretilmesini benimseyen Printsan emprime sıfırhatayıhedeflemiştir.</p>
                    <p>Gelecek nesillere yaşanabilir bir çevre bırakmanın ancak bugün ki çabalarla mümkün olacağınınbilincinde olan Printsan, üretimde çevreye ve insan sağlığınazararsız ekolojik ürünler kullanmaktadır.
                        Bu anlamda Global Organik Textile Standard (GOST) ve Oeko-Teks Standard 100 sertifikalarını alarak doğaya ve insan sağlığınaverdiği önemi göstermiştir.</p>
                </div>
                <h2 className={classes.h2}>SERTİFİKALARIMIZ</h2>
                <div className="mx-auto d-flex justify-content-center flex-wrap ">
                    {certificateAll}
                </div>

            </div>

        </section>
    )
}

export default AboutUs;