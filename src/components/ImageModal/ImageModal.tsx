import styles from "./ImageModal.module.scss";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function ImageModal({
  src,
  title,
  show,
  onClose,
  href,
}: {
  show: boolean;
  src: string;
  title: string;
  onClose: any;
  href: string;
}) {
  return (
    <div
      className={styles.modalOverlay}
      style={{ display: show ? "flex " : "none" }}
    >
      <div className={styles.modalContent}>
        <div className={styles.closeIcon} onClick={onClose}>
          <IoCloseCircleOutline size="20px" color="#048265" />
        </div>
        <img src={src} alt={src + "image"} />
        <div className={styles.title}>
          <a href={href}> {title} </a>
        </div>
      </div>
    </div>
  );
}
