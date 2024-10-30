import React from "react";
import CarouselPage from "../Home/carousel/CarouselPage";
import AnimatedPages from "../AnimatedPages";
import { useTranslation } from "react-i18next"; 
import "./notfound.css";

function NotFound() {
  const { t } = useTranslation(); 

  return (
    <>
      <CarouselPage />
      <AnimatedPages>
        <div className="notFound text-center">
          <p className="fs-1 fw-bold">
            404 <i className="fa-regular fa-face-frown-open text-warning"></i>
          </p>
          <p>{t("notFound.message")}</p>
          <a href="/" className="btn btn-secondary mt-3">
            {t("notFound.homeLink")}
          </a>
        </div>
      </AnimatedPages>
    </>
  );
}

export default NotFound;
