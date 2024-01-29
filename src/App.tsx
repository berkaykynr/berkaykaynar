import Modal from "./components/Modal/Modal";
import styles from "./App.module.scss";
import { useEffect, useRef, useState } from "react";
import { FiMail, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageSelector from "./components/LangugeSelector/LanguageSelector";

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "tr",
    resources: {
      en: {
        translation: require("../src/locales/en.json"),
      },
      tr: {
        translation: require("../src/locales/tr.json"),
      },
    },
  });

export default function Home() {
  const { t } = useTranslation();
  const [isOpenMail, setIsOpenMail] = useState(false);
  const [isOpenEvaModal, setIsOpenEvaModal] = useState(false);
  const [isOpenSugarModal, setIsOpenSugarModal] = useState(false);
  const [isOpenGoogleModal, setIsOpenGoogleModal] = useState(false);

  const instaLink = "https://instagram.com/berkaykynr";
  const gitLink = "https://github.com/berkaykynr";
  const linkedinLink = "https://www.linkedin.com/in/berkay-k-60b88720b/";
  const mail = "berkay.kaynar65@gmail.com";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const aboutMe = [t("aboutMe1"), t("aboutMe2"), t("aboutMe3")];

  const evaContent = [
    t("evaContent1"),
    t("evaContent2"),
    t("evaContent3"),
    t("evaContent4"),
  ];
  const sugarTechContent = [
    t("sugarTechContent1"),
    t("sugarTechContent2"),
    t("sugarTechContent3"),
  ];

  const googleContent = [
    t("googleContent1"),
    t("googleContent2"),
    t("googleContent3"),
  ];

  const evaImages = [
    { src: "/images/eva.png", href: "https://evateam.altinbas.edu.tr" },
    { src: "/images/eva1.png" },
    { src: "/images/eva2.png" },
  ];
  const sugarImages = [
    { src: "/images/sugartech.png", href: "https://sugartech.io" },
    { src: "/images/rapidlogo.png", href: "https://rapidapp.sugartech.io" },
  ];

  const googleImages = [
    { src: "/images/google.png", href: "https://oyunveuygulamaakademisi.com" },
    { src: "/images/google-logo.png" },
  ];

  return (
    <div className={styles.home}>
      {isMobile && <LanguageSelector />}
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
        {!isMobile && <LanguageSelector />}
        <div className={styles.head}>
          <img
            src="/images/pp.png"
            alt="berkay kaynar"
            className={styles.image}
          />
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
            <span> {t("aboutMe")} </span>
            {aboutMe.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className={styles.experiences}>
            <span>{t("experiences")}</span>
            <div className={styles.containers}>
              <div
                className={styles.container}
                onClick={() => setIsOpenEvaModal(true)}
              >
                <span>EVA Team</span>
                <img src="/images/eva.png" alt="berkay-kaynar-eva-team" />
              </div>
              <div
                className={styles.container}
                onClick={() => setIsOpenSugarModal(true)}
              >
                <span>Sugar Technology</span>
                <img
                  src="/images/sugartech.png"
                  alt="berkay kaynar sugar tech"
                />
              </div>
              <div
                className={styles.container}
                onClick={() => setIsOpenGoogleModal(true)}
              >
                <span>{t("google")} </span>
                <img src="/images/google.png" alt="berkay kaynar google" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
