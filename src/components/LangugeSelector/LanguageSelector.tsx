import { useEffect, useRef, useState } from "react";
import styles from "./LanguageSelector.module.scss";
import { BsArrowDownCircle, BsArrowRightCircle } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { RiArrowDropRightFill, RiArrowDropDownFill } from "react-icons/ri";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.resolvedLanguage
  );

  function toggleEnglish() {
    setSelectedLanguage("en");
    i18n.changeLanguage("en");
    setIsOpen(false);
  }

  function toggleTurkish() {
    setSelectedLanguage("tr");
    i18n.changeLanguage("tr");
    setIsOpen(false);
  }

  return (
    <div
      className={styles.selectorContainer}
      ref={containerRef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.selector}>
        <div className={styles.select}>
          {selectedLanguage == "tr" ? (
            <img src="/images/TR.svg" alt="" />
          ) : (
            <img src="/images/EN.svg" alt="" />
          )}
          <div>
            {isOpen ? (
              <RiArrowDropRightFill size={20} />
            ) : (
              <RiArrowDropDownFill size={20} />
            )}
          </div>
        </div>
      </div>
      <div
        className={styles.choices}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <img src="/images/TR.svg" alt="" onClick={toggleTurkish} />
        <div className={styles.divider} />
        <img src="/images/EN.svg" alt="" onClick={toggleEnglish} />
      </div>
    </div>
  );
}
