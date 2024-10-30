// Layout.jsx
import React from "react";
import MainNavbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import { useTranslation } from "react-i18next";
import "./Layout.css";

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language; // Get current language
  const isRTL = currentLang === "ar"; // Check if the language is Arabic

  return (
    <div className="app-container" dir={isRTL ? "rtl" : "ltr"}>
      <div className="navbar m-0 p-0">
        <MainNavbar />
      </div>
      <div className="app-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
