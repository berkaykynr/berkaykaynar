import React, { useState } from "react";
import styles from "./ProjectsModal.module.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";

export default function ProjectsModal({
  onClose,
  show,
  setIsOpenSocialMediaModal,
  setIsOpenUavModal,
}: {
  onClose: any;
  show: boolean;
  setIsOpenSocialMediaModal: any;
  setIsOpenUavModal: any;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={styles.modalOverlay}
      style={{ display: show ? "flex " : "none" }}
    >
      <div className={styles.modalContent}>
        <div className={styles.closeIcon} onClick={onClose}>
          <IoCloseCircleOutline size="20px" color="white" />
        </div>
        <div className={styles.header}>
          <span> {t("myProjects")}</span>
        </div>
        <div className={styles.certificates}>
          <div
            className={styles.title}
            onClick={() => {
              setIsOpenUavModal(true);
              onClose();
            }}
          >
            <p>{t("projectUavTitle")}</p>
          </div>
          <div
            className={styles.title}
            onClick={() => {
              setIsOpenSocialMediaModal(true);
              onClose();
            }}
          >
            <p>{t("socialMediaTitle")} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
