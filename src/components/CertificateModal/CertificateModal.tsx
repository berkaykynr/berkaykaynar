import { useTranslation } from "react-i18next";
import styles from "./CertificateModal.module.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import ImageModal from "../ImageModal/ImageModal";
import { useState } from "react";

export default function CertificateModal({
  onClose,
  show,
}: {
  onClose: any;
  show: boolean;
}) {
  const { t } = useTranslation();
  const [isOpenKotlinBasic, setIsOpenKotlinBasic] = useState(false);
  const [isOpenKotlinAdvanced, setIsOpenKotlinAdvanced] = useState(false);
  const [isOpenJavaBasic, setIsOpenJavaBasic] = useState(false);
  const [isOpenJavaAdvanced, setIsOpenJavaAdvanced] = useState(false);
  const [isOpenProjectBasic, setIsOpenProjectBasic] = useState(false);
  const [isOpenProjectStart, setIsOpenProjectStart] = useState(false);
  const [isOpenProjectLast, setIsOpenProjectLast] = useState(false);
  const [isOpenGoogleFlutter, setIsOpenGoogleFlutter] = useState(false);
  const [isOpenGoogleEntre, setIsOpenGoogleEntre] = useState(false);
  const [isOpenAutonom, setIsOpenAutonom] = useState(false);
  const [isOpenUav23, setIsOpenUav23] = useState(false);
  const [isOpenUav24, setIsOpenUav24] = useState(false);

  const imageModalList = [
    {
      src: "/images/certificates/kotlinBasic.png",
      title: "kotlinBasic",
      show: isOpenKotlinBasic,
      onClose: () => setIsOpenKotlinBasic(false),
      href: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=4qguZ4xMOl",
    },
    {
      src: "/images/certificates/kotlinAdvanced.png",
      title: "kotlinAdvanced",
      show: isOpenKotlinAdvanced,
      onClose: () => setIsOpenKotlinAdvanced(false),
      href: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=wmlFJlOlpK",
    },
    {
      src: "/images/certificates/javaBasic.png",
      title: "javaBasic",
      show: isOpenJavaBasic,
      onClose: () => setIsOpenJavaBasic(false),
      href: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=AJaSKEOBN",
    },
    {
      src: "/images/certificates/javaAdvanced.png",
      title: "javaAdvanced",
      show: isOpenJavaAdvanced,
      onClose: () => setIsOpenJavaAdvanced(false),
      href: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=jK1hK8KxYN",
    },
    {
      src: "/images/certificates/projectBasic.png",
      title: "projectsBasic",
      show: isOpenProjectBasic,
      onClose: () => setIsOpenProjectBasic(false),
      href: "https://www.coursera.org/account/accomplishments/certificate/R2HEPLQRHAZ4",
    },
    {
      src: "/images/certificates/projectStart.png",
      title: "projectStart",
      show: isOpenProjectStart,
      onClose: () => setIsOpenProjectStart(false),
      href: "https://www.coursera.org/account/accomplishments/certificate/DTNFLCVR8XPY",
    },
    {
      src: "/images/certificates/projectLast.png",
      title: "googleProject",
      show: isOpenProjectLast,
      onClose: () => setIsOpenProjectLast(false),
      href: "https://www.coursera.org/account/accomplishments/certificate/5MVEPZ3WBEVE",
    },
    {
      src: "/images/certificates/googleFlutter.png",
      title: "googleFlutter",
      show: isOpenGoogleFlutter,
      onClose: () => setIsOpenGoogleFlutter(false),
      href: "https://verified.sertifier.com/en/verify/05627297381499/",
    },
    {
      src: "/images/certificates/googleEntre.png",
      title: "googleEntrepreneurship",
      show: isOpenGoogleEntre,
      onClose: () => setIsOpenGoogleEntre(false),
      href: "https://verified.sertifier.com/en/verify/91963548492668/",
    },
    {
      src: "/images/certificates/teknofestAutonom.png",
      title: "teknofestAutonom",
      show: isOpenAutonom,
      onClose: () => setIsOpenAutonom(false),
      href: "",
    },
    {
      src: "/images/certificates/teknofestUav.png",
      title: "teknofestUav23",
      show: isOpenUav23,
      onClose: () => setIsOpenUav23(false),
      href: "",
    },
    {
      src: "/images/certificates/teknofestUav24.png",
      title: "teknofestUav24",
      show: isOpenUav24,
      onClose: () => setIsOpenUav24(false),
      href: "",
    },
  ];

  const titleList = [
    {
      onClick: () => setIsOpenKotlinBasic(true),
      name: "kotlinBasic",
    },
    {
      onClick: () => setIsOpenKotlinAdvanced(true),
      name: "kotlinAdvanced",
    },
    {
      onClick: () => setIsOpenJavaBasic(true),
      name: "javaBasic",
    },
    {
      onClick: () => setIsOpenJavaAdvanced(true),
      name: "javaAdvanced",
    },
    {
      onClick: () => setIsOpenProjectStart(true),
      name: "projectStart",
    },
    {
      onClick: () => setIsOpenProjectLast(true),
      name: "googleProject",
    },
    {
      onClick: () => setIsOpenGoogleFlutter(true),
      name: "googleFlutter",
    },
    {
      onClick: () => setIsOpenGoogleEntre(true),
      name: "googleEntrepreneurship",
    },
    {
      onClick: () => setIsOpenAutonom(true),
      name: "teknofestAutonom",
    },
    {
      onClick: () => setIsOpenUav23(true),
      name: "teknofestUav23",
    },
    {
      onClick: () => setIsOpenUav24(true),
      name: "teknofestUav24",
    },
  ];
  return (
    <div
      className={styles.modalOverlay}
      style={{ display: show ? "flex " : "none" }}
    >
      {imageModalList.map((item, index) => {
        return (
          <ImageModal
            key={index}
            src={item.src}
            title={t(item.title)}
            show={item.show}
            onClose={item.onClose}
            href={item.href}
          />
        );
      })}

      <div className={styles.modalContent}>
        <div className={styles.closeIcon} onClick={onClose}>
          <IoCloseCircleOutline size="20px" color="white" />
        </div>
        <div className={styles.header}>
          <span> {t("certificates")}</span>
        </div>
        <div className={styles.certificates}>
          {titleList.map((item, index) => {
            return (
              <div className={styles.title} onClick={item.onClick} key={index}>
                <p>{t(item.name)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
