import Modal from "./components/Modal/Modal";
import styles from "./App.module.scss";
import { useEffect, useRef, useState } from "react";
import { FiMail, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageSelector from "./components/LangugeSelector/LanguageSelector";
import CertificateModal from "./components/CertificateModal/CertificateModal";
import { useNavigate } from "react-router-dom";
import ProjectsModal from "./components/ProjectsModal/ProjectsModal";
import { Chip } from "primereact/chip";

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
  const [isOpenTubitakModal, setIsOpenTubitakModal] = useState(false);
  const [isOpenGoogleModal, setIsOpenGoogleModal] = useState(false);
  const [isOpenAboutMe, setIsOpenAboutMe] = useState(false);
  const [isOpenCertificates, setIsOpenCertificate] = useState(false);
  const [isOpenProjects, setIsOpenProjects] = useState(false);
  const [isOpenSocialMediaModal, setIsOpenSocialMediaModal] =
    useState<boolean>(false);
  const [isOpenUavModal, setIsOpenUavModal] = useState<boolean>(false);

  const instaLink = "https://instagram.com/berkaykynr";
  const gitLink = "https://github.com/berkaykynr";
  const linkedinLink = "https://www.linkedin.com/in/berkay-k-60b88720b/";
  const mail = "berkay.kaynar65@gmail.com";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 890);

  const navigate = useNavigate();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 890);
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
  const tubitakContent = [
    t("tubitakContent1"),
    t("tubitakContent2"),
    t("tubitakContent3"),
    t("tubitakContent4"),
  ];

  const googleContent = [
    t("googleContent1"),
    t("googleContent2"),
    t("googleContent3"),
  ];

  const socialMediaContent = [t("socialMedaContent1"), t("socialMedaContent2")];
  const uavContent = [t("uavContent1"), t("uavContent2"), t("uavContent3")];

  const evaImages = [
    { src: "/images/eva.png", href: "https://evateam.altinbas.edu.tr" },
    { src: "/images/eva1.png" },
    { src: "/images/eva2.png" },
  ];
  const sugarImages = [
    { src: "/images/sugartech.png", href: "https://sugartech.io" },
    { src: "/images/rapidlogo.png", href: "https://rapidapp.sugartech.io" },
  ];

  const tubitakImages = [
    { src: "/images/tubitak.jpg", href: "https://tubitak.gov.tr/tr" },
    { src: "/images/bilgem.png", href: "https://bilgem.tubitak.gov.tr" },
  ];

  const appImages = [
    { src: "/images/uygulama1.png" },
    { src: "/images/uygulama2.png" },
    { src: "/images/uygulama3.png" },
  ];

  const uavImages = [
    { src: "/images/uav1.png" },
    { src: "/images/uav2.png" },
    { src: "/images/uav3.png" },
  ];

  const googleImages = [
    { src: "/images/google.png", href: "https://oyunveuygulamaakademisi.com" },
    { src: "/images/google-logo.png" },
  ];

  function handleAboutMe() {
    if (isMobile && !isOpenAboutMe) {
      setIsOpenAboutMe(true);
    }
  }

  const abilities = [
    "Typescript",
    "Javascript",
    "React",
    "React Native",
    "Electron.js",
    "Redux",
    "Node.js",
    "Express.js",
    "Socket.IO",
    "Python",
    "VS Code",
    "Visual Studio",
    "Scrum",
    "Agile",
    "Dart",
    "Flutter",
    "MobX",
    "Git",
    "Jenkins",
    "SonarQube",
    "Sentry",
    "RabbitMQ",
    "Docker",
    "Portainer",
    "Linux",
    "Ubuntu",
    "Gazebo",
    "Npm - Yarn",
    "Dronekit",
    "Pymavlink",
    "Scikit-learn",
    "Java",
    "Spring",
    "Kotlin",
    "C",
    "C#",
    "Unity UI Toolkit",
    "Arduino",
  ];

  const getRandomColorWithAlpha = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return `${color}66`; // 66, hex formatında 0.4 alpha değerine karşılık gelir
  };

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
        content={aboutMe}
        images={null}
        header={t("aboutMe")}
        show={isOpenAboutMe}
        onClose={() => setIsOpenAboutMe(false)}
      ></Modal>
      <Modal
        content={sugarTechContent}
        images={sugarImages}
        header="Sugar Technology"
        show={isOpenSugarModal}
        onClose={() => setIsOpenSugarModal(false)}
      ></Modal>
      <Modal
        content={tubitakContent}
        images={tubitakImages}
        header="TUBITAK"
        show={isOpenTubitakModal}
        onClose={() => setIsOpenTubitakModal(false)}
      />
      <Modal
        content={socialMediaContent}
        images={appImages}
        header={t("socialMediaTitle")}
        show={isOpenSocialMediaModal}
        onClose={() => setIsOpenSocialMediaModal(false)}
      />
      <Modal
        content={uavContent}
        images={uavImages}
        header={t("projectUavTitle")}
        show={isOpenUavModal}
        onClose={() => setIsOpenUavModal(false)}
      />
      <Modal
        content={googleContent}
        images={googleImages}
        header={t("google")}
        show={isOpenGoogleModal}
        onClose={() => setIsOpenGoogleModal(false)}
      />
      <CertificateModal
        show={isOpenCertificates}
        onClose={() => setIsOpenCertificate(false)}
      />
      <ProjectsModal
        show={isOpenProjects}
        onClose={() => setIsOpenProjects(false)}
        setIsOpenSocialMediaModal={setIsOpenSocialMediaModal}
        setIsOpenUavModal={setIsOpenUavModal}
      />
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
        <div className={styles.techs}>
          <span>{t("techs")}</span>
          <div className={styles.chips}>
            {abilities.map((item: any, index: any) => (
              <Chip
                className="flex aign-items-center justify-content-centerl w-20rem px-5 h-2rem m-1"
                style={{ backgroundColor: getRandomColorWithAlpha() }}
                template={
                  <div
                    style={{
                      width: "8rem",
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {item}
                  </div>
                }
                key={index}
              />
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.aboutMe} onClick={handleAboutMe}>
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
                onClick={() => setIsOpenTubitakModal(true)}
              >
                <span>TUBITAK</span>
                <img
                  style={{ objectFit: "contain" }}
                  src="/images/tubitak.jpg"
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
              <div
                className={styles.container}
                onClick={() => setIsOpenCertificate(true)}
              >
                <span>{t("certificates")} </span>
              </div>
              <div
                className={styles.container}
                onClick={() => setIsOpenProjects(true)}
              >
                <span>{t("myProjects")} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
