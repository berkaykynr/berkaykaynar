"use client";
import { useEffect } from "react";
import styles from "./Modal.module.scss";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Modal({
  header,
  content,
  images,
  onClose,
  show,
}: {
  header: string;
  content: Array<any>;
  images: Array<any>;
  onClose: any;
  show: boolean;
}) {
  const YourComponent = () => {
    useEffect(() => {
      const keyDownHandler = (event: KeyboardEvent) => {
        console.log("User pressed: ", event.key);
        if (event.key === "Escape") {
          event.preventDefault();
          console.log("esc");
          onClose();
        }
      };
      document.addEventListener("keydown", keyDownHandler);
      return () => {
        document.removeEventListener("keydown", keyDownHandler);
      };
    }, []);
  };

  return (
    <div
      className={styles.modalOverlay}
      style={{ display: show ? "flex " : "none" }}
    >
      <div className={styles.modalContent}>
        <div className={styles.closeIcon} onClick={onClose}>
          <IoCloseCircleOutline size="20px" />
        </div>
        <div className={styles.header}>
          <span> {header} </span>
        </div>
        <div className={styles.content}>
          {content.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className={styles.images}>
          {images.map((item, index) => {
            if (item.href) {
              return (
                <a key={index} href={item.href} data-clickable={true}>
                  <img src={item.src} alt="" />
                </a>
              );
            } else {
              return <img src={item.src} alt="" key={index} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
