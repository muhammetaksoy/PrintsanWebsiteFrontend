import classes from './Vision.module.css';
import { IoBriefcaseOutline, IoBarChartOutline, IoHeartOutline, IoInfiniteOutline, IoPersonOutline, IoTrendingUpSharp, IoLeafOutline } from "react-icons/io5";
import React from 'react';

const Vision = () => {
  return (
    <section id="vision" className={classes.services}>
      <div className="container">

        <div className="row">
          <div className="col-md-6">
            <div className={classes.iconBox}>
              <IoBriefcaseOutline className={classes.icon} />
              <h4 className={classes.h4}><a className={classes.a} href="#">VİZYON / MİSYON</a></h4>
              <p className={classes.p}>Printsan , başarılı geçmişiyle emprime sektöründe Türkiye’nin önde gelen firmaları arasında yer almaktadır. Ulaştığı başarının arkasında, müşteri odaklı ve verimliliği, güveni ve kaliteyi merkez alan bir yönetim yaklaşımı vardır.
                Hizmetlerini her zaman için müşteri memnuniyeti ve güven ilkelerini temel alarak sunmaktadır. Bunun sonucunda da emprime sektöründe saygın ve güvenilen bir kurum olmuştur.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className={classes.iconBox}>
              <IoBarChartOutline className={classes.icon} />
              <h4 className={classes.h4}><a className={classes.a} href="#">HEDEF VE İLKELERLE PRİNTSAN</a></h4>
              <p className={classes.p}>Çalışanlarıyla birlikte, sağlıklı gelişmeyi, evrensel kalite ve standartlarda ürün ve hizmetler sunmayı amaçlıyor. Bir yandan bu hedefler doğrultusunda çalışmaya devam ederken diğer yandan da ülkesi, müşterileri, ortakları ve tedarikçileri için güvenilirlik, devamlılık ve saygınlık simgesi olmayı hedeflemektedir.
                Bu doğrultuda printsan emprime hedef ve ilkelerini şu şekilde belirlemiştir.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className={classes.iconBox}>
              <IoHeartOutline className={classes.icon} />
              <h4 className={classes.h4}><a className={classes.a} href="#">MÜŞTERİLERİMİZ İÇİN DEĞER YARATMAK</a></h4>
              <p className={classes.p}>Beklentilerine kalite ve istikrarla karşılık vermek ilk önceliğimizdir.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className={classes.iconBox}>
              <IoInfiniteOutline className={classes.icon} />
              <h4 className={classes.h4}><a className={classes.a} href="#">DAİMA EN İYİ OLMAK, VAZGEÇİLMEZ HEDEFİMİZDİR</a></h4>
              <p className={classes.p}>Kalitede, hizmette, yenilikleri ilk önce piyasaya sunmakta, ikmal kaynaklarımız ve müşteri ilişkilerimizde, iş ortaklarımıza sunulan yatırım seçeneklerinde en iyi olmak ana hedefimizdir.
                Bu hedefe ulaşmak üzere faaliyet gösterilen alanlarda yönetimi üstlenmek ve piyasa liderlerinden biri olmak temel ilkemizdir.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className={classes.iconBox}>
              <IoPersonOutline className={classes.icon} />
              <h4 className={classes.h4}><a className={classes.a} href="#">EN ÖNEMLİ SERMAYEMİZ, İNSAN KAYNAĞIMIZDIR</a></h4>
              <p className={classes.p}>Ürün ve hizmetlerimizin kalitesi çalışanlarımızın kalitesiyle başlar. En iyi personel ve yetişkin insan gücünü istihdam etmek, insanımızın yeteneklerinden, gücünden ve yaratıcılığından azami fayda sağlamak;
                verimliliklerini artırmak, gelişmelerine imkan tanımak, iş birliği ve dayanışmanın yeşerdiği bir çalışma ortamı yaratmak seçtiğimiz yoldur.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className={classes.iconBox}>
              <IoTrendingUpSharp className={classes.icon} />
              <h4 className={classes.h4}><a className={classes.a} href="#">AMACIMIZ, SÜREKLİ GELİŞMEK İÇİN KAYNAK YARATMAKTIR</a></h4>
              <p className={classes.p}>Ürün ve hizmetlerimizin sürekliliğini sağlamak üzere, gerekli yatırımları gerçekleştirebilmek; küçük ve büyük tasarrufların birleşmesini teşvik etmek, toplumun ekonomik ve sosyal gelişmesine yardımcı olmak üzere,
                faaliyetlerden kaynak yaratmak ve tüm kaynakların akılcı kullanımını sağlayarak savurganlığa ödün vermemek ana ilkelerimizdendir.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className={classes.iconBox}>
              <IoLeafOutline className={classes.icon} />
              <h4 className={classes.h4}><a className={classes.a} href="#">DOĞAYA VE İNSAN SAĞLIĞINA ÖNEM VERMEK</a></h4>
              <p className={classes.p}>Üretilen ürünlerimizde kimyasal çevre bilincinde olup çevreye duyarlı üretim teknolojisi kullanılmaktadır. Temiz üretimͬ eko-verimlilik, geleneksel kirlilik kontrolü yöntemlerinin aksine atık oluşumunu kaynağında önleyerekͬ üretimden kaynaklanan çevresel etkileri ortadan kaldırmayı amaçlar.
                Global Organik Textile Standart (GOST) ve Okeo-Tex Standard 100 sertifikalarını alarak doğaya ve insan sağlığına verdiği önemi göstermiştir. Ayrıca faaliyet gösterdiği organize sanayi bölgesinde, arıtma tesisi bulunarak atıksu içilebilir hale getirilebilmektedir.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Vision;