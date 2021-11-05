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
                        <ul className={classes.ul}>
                            <li ><IoCheckmarkDone className={classes.icon}/>Deneyimli Kadro</li>
                            <li><IoCheckmarkDone className={classes.icon}/>Kalite Ürünler</li>
                            <li><IoCheckmarkDone className={classes.icon}/>Müşteri Memnuniyeti</li>
                        </ul>
                        
                        
                        <i>Deneyimli kadrosu, kaliteli, hızlı ve ekonomik tarzıyla sektörün lideri konumundaki firmalar arasındadır. Üretilen ürünün, kalite kontrolü yerine kalitenin üretilmesini benimseyen Printsan emprime sıfır hatayı hedeflemiştir.</i>
                    </div>

                </div>
            </div>
        </section>
        
    ) 
    
    
}

export default Company;