import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Politics() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div >

            <Box className="container-fluid  my-5" style={{ "width": "85%" }} >
                <h2 className="text-center p-2 alert alert-danger border-0 rounded-0 ">Politikalar</h2>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Çerez Politikası" {...a11yProps(0)} />
                        <Tab label="Şirket Genel Politikası" {...a11yProps(1)} />
                        <Tab label="Çevre Politikası" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Çevremizi korumak ve sürekliliğini sağlamak için tüm çevre yasa ve yöntemlerine uyarak çevre etkilerini kontrol altında tutmak ve bu etkileri azaltarak çevresel performansımızı sürekli iyileştirmek firmamız için hayati önem taşımaktadır.

                    Yönetim olarak, hedeflerimize çalışanlarımız ile birlikte Çevre politikamızın benimsenmesi ve ciddiyetle uygulanması sayesinde ulaşabileceğimiz inancındayız.

                    Yaşanabilir bir doğayı gelecek nesillere bırakabilmek, dünya ve ülke ekonomisine katkıda bulunarak, çevreye saygı duyarak, doğal kaynaklara zarar vermeden üretim yapmaya özen gösteren bir prensiple üretim yapmayı amaçlıyoruz.

                    Aşağıdaki taahhütlerimiz bu amaçlarımıza ulaşmamızdaki prensiplerimizdir;

                    ⦁	Çevresel kirliliğine yol açacak atıkların geri kazanılması ve kontrollü bir şekilde bertaraf edilmesini sağlamak.

                    ⦁	Çevreye olan sorumluluklarımız konusunda tüm çalışmalarımızı, taşeronlarımız ve çevre halkını bilinçlendirerek katılımlarını sağlamak.

                    ⦁	Teknik ve ekonomik olanaklar çerçevesinde çevreye en az zarar veren uygun teknolojileri kullanıp ham madde kullanımını azaltarak, doğal kaynakların korunması sağlamak.

                    ⦁	Atıkları (Katı, sıvı, gaz) ve gürültü kirliliğini kontrol altına almak, faaliyetlerimizin çevre ve insan sağlığı üzerindeki olumsuz etkilerini azaltmak.

                    ⦁	Yükümlü  bulunduğumuz çevre ile ilgili tüm kanun ve yasal mevzuatlara uyum sağlamak.

                    ⦁	Çalışanlarımıza çevre bilincini artırmak üzere , ekip ruhunu geliştirecek, katılımları artıracak şekilde eğitim vermek ve teşvik edici faaliyetlerde  bulunmak.

                    ⦁	Çevresel performansımız sürekli  iyileştirmesi yönünde çevre yönetim sistemimizi geliştirmek.

                    ⦁	Tesis ve proses tasarımında çevresel etkileri göz önünde bulundurmak.

                    ⦁	İş sağlığı ve güvenliği kuralları çerçevesinde çevre ile ilgili acil durumlar için riskleri belirlemek ve bunları azaltmak.

                    ⦁	Ürünün çevresel etkilerinin iyileştirilebilmesi için tedarikçilerle ve müşterilerle sürekli iletişim içerisinde bulunmak.

                    ⦁	Üretim taşıma, stoklama, işletme ,arıtma ve bakım faaliyetleri sonucu oluşabilecek atık azaltarak geri dönüşüm ve yeniden değerlendirme alternatiflerini değerlendirmek.



                    PRİNTSAN EMPRİME SAN. TİC. LTD. ŞTİ. Ülke ekonomisine katkıda bulunan, toplumsal sorumluluklarının bilincinde, çevreye duyarlı ve saygılı, doğal kaynakları en iyi şekilde kullanan, çalışanlarına değer veren, işbirliği içindeki firmaların da bu konulara önem vermesini  sağlayan bir üretim prensibiyle ilerlemektedir.


                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>
        </div>

    )
}
