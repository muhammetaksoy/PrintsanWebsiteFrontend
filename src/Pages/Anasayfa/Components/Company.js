import "../../../App.css";
import classes from "./Company.module.css";
import { IoCheckmarkDone } from "react-icons/io5";

const Company = () => {
    return(
        <section className={classes.section}>
            <div className="container">
                <div className="row content">
                    <div className="col-md-6">
                        <h2 className={classes.h2}>FİRMAMIZIN GEÇMİŞİNE DAİR</h2>
                        <h3 className={classes.h3}>1994 yılından beri kalitemizi bozmadan size hizmet vermekteyiz</h3>
                    </div>
        
                    <div className="col-md-6">
                        <p>Printsan Emprime, 1994 yılından bu yana emprime parça baskı alanında hizmet vermektedir. 2006 yılında Beylikdüzü Organize Sanayi Bölgesindeki 4750 m2’lik tam otomasyonlu binada faaliyet göstermektedir. Günlük baskı kapasitesi 65.000 adet olup parça baskının haricinde gofre, enjeksiyon, frekans, flok, süblime ve taş üretimi yapmaktadır.</p>
                        
                        <span><IoCheckmarkDone/>Deneyimli Kadro</span>
                        <li><i className="ri-check-double-line">Kaliteli Ürünler</i></li>
                        <li><i className="ri-check-double-line">Müşteri Memnuniyeti</i></li>
                        
                        <p>Deneyimli kadrosu, kaliteli, hızlı ve ekonomik tarzıyla sektörün lideri konumundaki firmalar arasındadır. Üretilen ürünün, kalite kontrolü yerine kalitenin üretilmesini benimseyen Printsan emprime sıfır hatayı hedeflemiştir.</p>
                    </div>

                </div>
            </div>
        </section>
        
    ) 
    
    
}

export default Company;