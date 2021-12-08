import React from 'react';
import { IoCheckmarkDone } from "react-icons/io5";
import classes from './Process.module.css';

const Process = () => {
    return (
        <section className={classes.section}>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%" ,"fontSize": "2.8rem" }}>Üretim</h2>
            <div className={`${classes.grid} ${classes.container} `}>
            <div>    
                <h3 className={classes.h3}>DESEN BÖLÜMÜ</h3>
                <ul className={classes.ul}>
                    <li ><IoCheckmarkDone className={classes.icon} />Müşteri temsilcisi tarafından desen teslim alınır.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Desenle ilgili tüm detaylar, müşteri temsilcisi aracılığıyla muhatap kişiden alınır. (Baskı cinsi, termin tarihi vb…)</li>
                    <li><IoCheckmarkDone className={classes.icon} />Spesiyal desenlerde; müşteri temsilcisi, numuneci, kalıpçı, desinatör, boyacı ve işletme şefinin iştirak edeceği küçük bir toplantı tertip edilir.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Desenle ilgili tüm detaylar gözden geçirilir ve desenin istenilen düzgünlükte basılabilmesi için neler yapılması gerektiği tartışılır. (kaç numara ipeğe çekilecek, hangi boya kullanılacak vb…) </li>
                    <li><IoCheckmarkDone className={classes.icon} />Desinatör tarafından desen hazırlanır ve gerekli detaylar yazılır. (kaç numara ipeğe çekileceği, kaç renk olduğu vb...)</li>
                    <li><IoCheckmarkDone className={classes.icon} />Desen; son kontroller yapıldıktan sonra kalıp bölümüne ve boyahaneye aktarılır.</li>
                </ul>
            </div>
            <div className={classes.box}>
                <img
                src={require("../../../src/images/Desen.jpg").default}
                alt="Desen bölümü"
                className={classes.img}
                />
            </div>
            <div className={classes.box}>
                <img
                src={require("../../../src/images/Kalıphane.png").default}
                alt="Kalıphane"
                className={classes.img}
                />
            </div>
            <div>         
                <h3 className={classes.h3}>KALIPHANE BÖLÜMÜ</h3>
                <ul className={classes.ul}>
                    <li ><IoCheckmarkDone className={classes.icon} />Desenin teknik özelliklerine göre kalıba emisyon çekerek karanlık odada bekletir.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Negatifleri desen dairesinden teslim alır.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Pozlandıracağı kalıbın tansiyonunu kontrol eder.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Tansiyon metre 15 Newton’un altını gösteriyorsa kalıp iptal olur. (min 20-25 Newton) </li>
                    <li><IoCheckmarkDone className={classes.icon} />Kalıbı pozlandırır ve son rötuşu yapar.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Kalıbın üzerine firma bilgisini, kalıp no‘sunu ve ipek no’sunu yazar.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Tüm işlemler; pozlanma süresi, pozlanma uzaklığı, kalıp gerginliği, kalıp no’su kaydedildikten sonra kalıp rafa kaldırılır.</li>
                </ul>
            </div>

            <div>
                <h3 className={classes.h3}>BOYAHANE BÖLÜMÜ</h3>
                <h4>Desenle ilgili bilgiler geldiğinde;</h4>
                <ul className={classes.ul}>
                    <li ><IoCheckmarkDone className={classes.icon} />Desen formundaki bilgiler doğrultusunda hangi boyayı hazırlayacağına karar verir.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Hazırladığı boyayı palaska ile kumaşa basarak renk kontrolü yapar.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Rengi tutan boyayı 500 gr’lık kaplarda muhafaza eder.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Boya hazırlama aşamasındaki tüm detaylar(reçeteler, hangi boyanın kullanıldığı vb...) kayıt altına alınır. </li>
                    <li><IoCheckmarkDone className={classes.icon} />Hazırlanmış boyalar numune sorumlusuna teslim edilir.</li>
                </ul>
            </div>

            <div className={classes.box}>
                <img
                src={require("../../../src/images/Boyahane.jpg").default}
                alt="Boyahane"
                className={classes.img}
                />
            </div>

            <div className={classes.box}>
                <img
                src={require("../../../src/images/Numune.jpg").default}
                alt="Numune"
                className={classes.img}
                />
            </div>
            <div>         
                <h3 className={classes.h3}>NUMUNE BASKI BÖLÜMÜ</h3>
                <ul className={classes.ul}>
                    <li ><IoCheckmarkDone className={classes.icon} />Müşteriye verilen termine göre (kalıp, boya, kumaş, ölçü kalıbı gibi) hazırlık yapar</li>
                    <li><IoCheckmarkDone className={classes.icon} />Desenin hangi masada, hangi numuneci tarafından basılacağına Ana Numune Şefi  karar verir.</li>
                    <li><IoCheckmarkDone className={classes.icon} />1 adet deneme kumaşı serilip basılır.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Renkler, ölçüler vs. kontrol edilir ve seri üretime geçilir. </li>
                    <li><IoCheckmarkDone className={classes.icon} />Fikseden geçen malın son kontrolü yapıldıktan sonra müşteriye teslim edilir.</li>
                </ul>
            </div>

            <div>
                <h3 className={classes.h3}>MAL KABUL BÖLÜMÜ</h3>
                <ul className={classes.ul}>
                    <li ><IoCheckmarkDone className={classes.icon} />Gelen mallar görevli tarafından teslim alınır.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Tüm torbalar ya da kasalar sayılarak kontrol edilir. Gerekirse terazide tüm malların sayım kontrolü yapılır.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Bir nüshası müşteriye olmak üzere; irsaliye imzalanarak muhasebeye teslim edilir.</li>
                </ul>
            </div>

            <div className={classes.box}>
                <img
                src={require("../../../src/images/Imalat.jpg").default}
                alt="MalKabul"
                className={classes.img}
                />
            </div>

            <div className={classes.box}>
                <img
                src={require("../../../src/images/Imalat.jpg").default}
                alt="Imalat"
                className={classes.img}
                />
            </div>
            <div>         
                <h3 className={classes.h3}>İMALAT BÖLÜMÜ</h3>
                <ul className={classes.ul}>
                    <li ><IoCheckmarkDone className={classes.icon} />Gelen malın bilgisi İşletme Şefine verilir.</li>
                    <li><IoCheckmarkDone className={classes.icon} />İşletme Şefi gerekli ön hazırlıkları yapar.(kalıpların kontrolü, numune formu, okeyli numune, baskı şablonu, boya reçetesi, makine seçimi, ragle seçimi vb...)</li>
                    <li><IoCheckmarkDone className={classes.icon} />Numunenin basılış şekli göz önüne alınarak, verilen termine uygun makineye kalıplar bağlanır ve numuneler basılır.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Basılan numunenin Light Box’da renkleri kontrol edilir, müdahale edilmesi gerekiyor ise müdahale edilir.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Desen, muhatap firma yetkilisince okeylenir ve üretime geçilir.</li>
                </ul>
            </div>

            <div>
                <h3 className={classes.h3}>KALİTE KONTROL BÖLÜMÜ</h3>
                <ul className={classes.ul}>
                    <li ><IoCheckmarkDone className={classes.icon} />Üretilen her ürün makineci ve fikseci tarafından tek tek kontrol edilir.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Seri üretimden çıkan ürünlerden birisi, istenilen şartlar doğrultusunda çamaşır makinesine atılır.</li>
                    <li><IoCheckmarkDone className={classes.icon} />İlk yıkamanın sonucu çamaşır makinesinden alınıp kontrol edilir. Kurutulduktan sonra tekrar yıkanır.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Yıkanmış numuneler, numune formuna yıkanmamış bir parçayla birlikte yapıştırılıp dosyasına konulur.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Bitmiş ürünün tekrar tasnifi yapılır, çıkan bozukluklar tamir edilip tekrar yerine konulur.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Kurtarılamayacak durumda olan ürünlerin adeti ve beden dağılımları alınıp irsaliyeye not edilir,müşteri bilgilendirilir.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Bozuk ürünler üzerinde ‘bozuk’ olduğunu gösteren bir yazıyla torbalanır.</li>
                </ul>
            </div>

            <div className={classes.box}>
                <img
                src={require("../../../src/images/Kalitekontrol.png").default}
                alt="Kalite Kontrol"
                className={classes.img}
                />
            </div>

            <div className={classes.box}>
                <img
                src={require("../../../src/images/Sevkiyat.png").default}
                alt="Sevkiyat"
                className={classes.img}
                />
            </div>
            <div>         
                <h3 className={classes.h3}>ÜRÜN SEVKİYAT BÖLÜMÜ</h3>
                <ul className={classes.ul}>
                    <li ><IoCheckmarkDone className={classes.icon} />Tasnifi yapılmış sorunsuz ürünler, mal sevkiyat bölümündeki raylara yerleştirilir.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Gelen muhatap firma yetkilisine fatura kesilip, irsaliye imzalatıldıktan sonra ürünler teslim edilir.</li>
                </ul>
            </div>

            <div>
                <h3 className={classes.h3}>LABORATUAR BÖLÜMÜ</h3>
                <ul className={classes.ul}>
                    <li ><IoCheckmarkDone className={classes.icon} />Basılan her ürün: <br/>
                        Günde 2 kez yıkanmalı, gerekiyorsa yaş ve kuru sürtme haslık testleri yapılmalı.<br/>
                        Renk için 2 saatte bir ışık kabininde kontrol edilmeli <br/>
                        2 saatte bir  kayma, deve , çatlama , sünme vb bakımından kontrol edilmeli.
                    </li>
                    <li><IoCheckmarkDone className={classes.icon} />Basılan ürünün testlerden herhangi birinden kalması durumunda makine durdurulmalı.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Problem kayıt altına alınmalı ve dosyaya iliştirilmeli.</li>
                    <li><IoCheckmarkDone className={classes.icon} />Tüm bu işlemler dosyaya kaydedilmeli.</li>
                </ul>
            </div>

            <div className={classes.box}>
                <img
                src={require("../../../src/images/Labaratuvar.jpg").default}
                alt="Labaratuvar"
                className={classes.img}
                />
            </div>
        </div>
      </section>
    )

}
export default Process;