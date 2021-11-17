import React, { Component } from 'react'
import classes from './AboutUs.module.css';

export default class AboutUs extends Component {
    render() {
        return (
            <section className={classes.section}>
                <div className="container">
                    <div className="row">
                        <h2>Hakkımızda</h2>
                        <p>Printsan Emprime, 1994 yılından bu yana emprime parça baskıalanında hizmet vermektedir. 2006 yılında Beylikdüzü Organize Sanayi Bölgesindeki 4750 m2’lik tam otomasyonlu binada faaliyet göstermektedir.
                        Günlük baskı kapasitesi 65.000 adet olup parça baskının haricinde gofre, enjeksiyon, frekans, flok, süblime ve taş üretimi yapmaktadır.</p>
                        <p>Deneyimli kadrosu, kaliteli, hızlı ve ekonomik tarzıyla sektörün lideri konumundaki firmalar arasındadır.
                        Üretilen ürünün, kalite kontrolü yerine kalitenin üretilmesini benimseyen Printsan emprime sıfırhatayıhedeflemiştir.</p>
                        <p>Gelecek nesillere yaşanabilir bir çevre bırakmanın ancak bugün ki çabalarla mümkün olacağınınbilincinde olan Printsan, üretimde çevreye ve insan sağlığınazararsız ekolojik ürünler kullanmaktadır.
                        Bu anlamda Global Organik Textile Standard (GOST) ve Oeko-Teks Standard 100 sertifikalarını alarak doğaya ve insan sağlığınaverdiği önemi göstermiştir.</p>
                    </div>
                    
                </div>
        
            </section>
        )  
    }
}
