import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons"; // Using a single globe icon
import "./language.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Function to toggle between languages
  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-btn d-flex justify-content-center align-items-center"
      name="language"
      aria-label="Language"
    >
      <FontAwesomeIcon icon={faLanguage} className="me-2" />{" "}
    </button>
  );
};

export default LanguageSwitcher;
