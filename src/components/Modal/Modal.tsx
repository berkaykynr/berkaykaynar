"use client";
import { useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsClickedPhoto(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (isClickedPhoto) setIsClickedPhoto(false);
        else onClose();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [isClickedPhoto, setIsClickedPhoto] = useState(false);

  function handleClickPhoto(imageUrl: string) {
    setIsClickedPhoto(true);
    setPhotoUrl(imageUrl);
  }
  return (
    <div
      className={styles.modalOverlay}
      style={{ display: show ? "flex " : "none" }}
    >
      <div className={styles.modalContent}>
        <div
          className={styles.imageViewer}
          style={{ display: isClickedPhoto ? "flex" : "none" }}
        >
          <img src={photoUrl} />
        </div>

        <div className={styles.closeIcon} onClick={onClose}>
          <IoCloseCircleOutline size="20px" color="white" />
        </div>
        <div className={styles.header}>
          <span> {header} </span>
        </div>
        <div className={styles.content}>
          {content.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className={styles.images} ref={containerRef}>
          {images.map((item, index) => {
            if (item.href) {
              return (
                <a key={index} href={item.href} data-clickable={true}>
                  <img src={item.src} alt="" />
                </a>
              );
            } else {
              return (
                <img
                  src={item.src}
                  key={index}
                  onClick={() => {
                    handleClickPhoto(item.src);
                  }}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
