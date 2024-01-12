import Modal from "./components/Modal/Modal";
import styles from "./App.module.scss";
import { useState } from "react";
import { FiMail, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Home() {
  const [isOpenMail, setIsOpenMail] = useState(false);
  const [isOpenEvaModal, setIsOpenEvaModal] = useState(false);
  const [isOpenSugarModal, setIsOpenSugarModal] = useState(false);
  const [isOpenGoogleModal, setIsOpenGoogleModal] = useState(false);

  const instaLink = "https://instagram.com/berkaykynr";
  const gitLink = "https://github.com/berkaykynr";
  const linkedinLink = "https://www.linkedin.com/in/berkay-k-60b88720b/";
  const mail = "berkay.kaynar65@gmail.com";
  const aboutMe1 = `
  Merhaba, ben Berkay. İstanbul Altınbaş Üniversitesi'nde Bilgisayar Mühendisliği bölümü üçüncü sınıf öğrencisiyim. Yazılım dünyasına lise son sınıfta Python ile adım attım. BTK Akademi'deki derslerle başlangıçta Python, ardından Java ve Kotlin dillerini öğrenerek bu alanlardaki sertifikalarımı aldım. Okulumun 1. sınıfında C dilini öğrenme fırsatı buldum.
  `;
  const aboutme2 = `
  2. sınıfta, okulum bünyesinde yer alan EVA Team kulübüne katıldım. Bu kulüpte, otonom insansız hava araçlarının yazılım bölümünde görev aldım. Teknofest Uluslararası İnsansız Hava Araçları yarışmasında geliştirdiğimiz Döner Kanat İHA ve Sabit Kanat İHA araçlarıyla katıldık ve her iki araçta da performans ödülü almaya hak kazandık.
  Ayrıca, Google Oyun ve Uygulama Akademisi'ne başvurarak akademi bursiyeri olma şansı elde ettim. Bu akademide Dart dilini öğrenerek Flutter ile birlikte mobil uygulamalar geliştirdim. Bu süreçte edindiğim bilgi ve deneyimlerle kendimi sürekli geliştirmeye odaklanıyorum.
  `;
  const aboutMe3 = `
  Ayrıca, okulumun 2. sınıfında bölüm ikinciliğimi elde ettim, bu başarılarla birlikte hem akademik hem de projelerdeki aktif rolümle gelecekteki başarılarıma sağlam bir temel oluşturmayı hedefliyorum.
  `;

  const evaContent = [
    `Üniversite eğitimim süresince aktif olarak katıldığım İnsansız Hava Araçları (İHA) Kulübü, beni geniş bir teknik bilgi ve uygulama yelpazesi ile donatmıştır. Bu kulüpte geçirdiğim süre zarfında, Pixhawk uçuş kontrol kartı üzerinde yoğunlaşarak İHA'ların uçuş dinamikleri ve kontrol sistemleri konusunda derin bir anlayış geliştirdim. Ayrıca, otonom uçuş algoritmalarının tasarımı ve uygulanması süreçlerinde aktif rol aldım.`,
    `Telemetri sistemleriyle olan etkileşimi anlamak adına Pixhawk'a çeşitli senaryolarda telemetri ile iletişim kurma deneyimim oldu. Bunun yanı sıra, araçlarımıza entegre ettiğimiz Jetson ve Raspberry gibi mini bilgisayarlar aracılığıyla kablolu bağlantı sağlama becerisi edindim. Bu süreçte, özellikle bu mini bilgisayarların içinde barındırdığı Linux tabanlı işletim sistemleri ile çalışmak, sorun giderme yeteneklerimi geliştirdi.`,
    `En dikkat çekici projelerimden biri, bu yıl içinde kulüp olarak başlattığımız yerli bir masaüstü uygulaması oldu. Bu uygulama, Pixhawk uçuş kontrol kartının bütün parametre ayarlarını gerçekleştirebilmemizi ve otonom uçuş kodunu yükleyip çalıştırabilmemizi sağlayacak bir araç olarak tasarlandı. Bu projede, Electron.js kullanarak kullanıcı arayüzünü geliştirme ve Python ile araçla iletişimi sağlama sorumluluklarını üstlendim.`,
    `Bu süreçlerin yanı sıra, Linux tabanlı sistemlerle ilgili geniş bir deneyim kazandım. Telemetri sistemlerinde ve mini bilgisayarlarda Linux tabanlı işletim sistemleri üzerinde çalışarak, sistem yönetimi ve sorun giderme konularında yetkinlik kazandım. İHA Kulübü'nde edindiğim bu tecrübeler, sadece teknik becerilerimi değil, aynı zamanda ekip çalışması, liderlik ve projeleri etkili bir şekilde yönetme yeteneklerimi de geliştirmeme büyük katkı sağladı.`,
  ];
  const sugarTechContent = [
    `Biruni Teknopark'ta gerçekleştirdiğim 3 aylık staj süreci, yazılım geliştirme alanında kapsamlı bir deneyim ve öğrenme fırsatı sunmuştur. Sugar Technology şirketinde stajyer yazılım geliştirici olarak görev aldım ve bu süre zarfında çeşitli teknolojilere dair geniş bir bilgi yelpazesi edindim.`,
    `Staj kapsamında özellikle React, React Native, Unity ve Java Spring gibi popüler teknolojileri kullanarak projelerde yer aldım. React ile web uygulamalarının geliştirilmesi, React Native ve Unity kullanılarak mobil uygulamaların ön yüz tasarımlarının oluşturulması, Java Spring framework'ü ile bu uygulamaların back-end servislerinin yazılması gibi görevleri üstlendim. Bu süreçte, hem öğrenme hem de uygulama aşamalarında geniş bir beceri seti elde etme şansı buldum.`,
    `Ayrıca, farklı projelerde ve çeşitli programlama dillerinde çalışarak problem çözme yeteneklerimi geliştirdim. Ekip içinde etkili iletişim becerileri kazanma fırsatı buldum ve proje yönetimi konusunda pratik deneyimler elde ettim. Bu staj süreci, teknik yeteneklerimi artırmanın yanı sıra takım içinde etkili bir oyuncu olabilmek adına da önemli bir platform sağladı.`,
  ];

  const googleContent = [
    `2023 yılında Google Oyun ve Uygulama Akademisi'ne kabul edilerek bursiyer olarak seçilmek, yazılım geliştirme ve girişimcilik alanında kazandığım değerli deneyimleri içermektedir. Bu akademi kapsamında, Flutter ve Dart teknolojilerini etkin bir şekilde kullanarak mobil uygulama geliştirmenin yanı sıra, bilişim hukuku, proje yönetimi ve girişimcilik konularında kapsamlı derslere katıldım.`,
    `Akademinin zorlu bir aşamasını başarıyla tamamlamak adına, bir bootcamp sürecine katıldım ve bu süreçte ekip çalışmasıyla bir mobil uygulama geliştirdik. Proje, Flutter'daki state management konseptini etkili bir şekilde uygulamak amacıyla MobX kütüphanesini kullanarak geliştirildi. Bu süreç, sadece teknik becerilerimi geliştirmekle kalmayıp aynı zamanda proje yönetimi ve ekip koordinasyonu konusunda önemli pratik bilgiler edinmemi sağladı.`,
    `Google Oyun ve Uygulama Akademisi'nde elde ettiğim bilgi birikimi ve projelerimdeki liderlik deneyimi, gelecekteki projelerde ve ekiplerde etkili bir katılımcı olma yeteneğimi güçlendirmiştir. Bu değerli deneyimleri, başta Flutter ve Dart olmak üzere geniş bir teknik yelpaze ile birleştirerek, şirketinize getirmek için sabırsızlanıyorum.`,
  ];

  const evaImages = [
    { src: "/eva.png", href: "https://evateam.altinbas.edu.tr" },
    { src: "/eva1.png" },
    { src: "/eva2.png" },
  ];
  const sugarImages = [
    { src: "/sugartech.png", href: "https://sugartech.io" },
    { src: "/rapidlogo.png", href: "https://rapidapp.sugartech.io" },
  ];

  const googleImages = [
    { src: "/google.png", href: "https://oyunveuygulamaakademisi.com" },
    { src: "/google-logo.png" },
  ];

  return (
    <div className={styles.home}>
      <Modal
        content={evaContent}
        images={evaImages}
        header="EVA Team"
        show={isOpenEvaModal}
        onClose={() => setIsOpenEvaModal(false)}
      ></Modal>
      <Modal
        content={sugarTechContent}
        images={sugarImages}
        header="Sugar Technology"
        show={isOpenSugarModal}
        onClose={() => setIsOpenSugarModal(false)}
      ></Modal>
      <Modal
        content={googleContent}
        images={googleImages}
        header="Google Oyun ve Uygulama Akademisi"
        show={isOpenGoogleModal}
        onClose={() => setIsOpenGoogleModal(false)}
      ></Modal>
      <div className={styles.card}>
        <div className={styles.head}>
          <img src="./pp.png" className={styles.image} />
          <span>Berkay Kaynar</span>
        </div>
        <div className={styles.socials}>
          <div
            className={styles.mailContainer}
            style={{ display: isOpenMail ? "flex" : "none" }}
          >
            <span>{mail}</span>
          </div>
          <a onClick={() => setIsOpenMail(!isOpenMail)}>
            <FiMail size="25" className={styles.icons} data-mail={true} />
          </a>
          <a href={instaLink}>
            <FiInstagram size="25" className={styles.icons} data-insta={true} />
          </a>
          <a href={gitLink}>
            <FiGithub size="25" className={styles.icons} data-git={true} />
          </a>
          <a href={linkedinLink}>
            <FiLinkedin
              size="25"
              className={styles.icons}
              data-linkedin={true}
            />
          </a>
        </div>
        <div className={styles.content}>
          <div className={styles.aboutMe}>
            <span>Hakkımda</span>
            <p>{aboutMe1}</p>
            <p>{aboutme2}</p>
            <p>{aboutMe3}</p>
          </div>
          <div className={styles.experiences}>
            <span>Tecrübelerim</span>
            <div className={styles.containers}>
              <div
                className={styles.container}
                onClick={() => setIsOpenEvaModal(true)}
              >
                <span>EVA Team</span>
                <img src="/eva.png" alt="" />
              </div>
              <div
                className={styles.container}
                onClick={() => setIsOpenSugarModal(true)}
              >
                <span>Sugar Technology</span>
                <img src="/sugartech.png" alt="" />
              </div>
              <div
                className={styles.container}
                onClick={() => setIsOpenGoogleModal(true)}
              >
                <span>Google Oyun Ve Uygulama Akademisi</span>
                <img src="/google.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
