import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../carousel/imgs/burj khalifa.webp";
import slide2 from "../carousel/imgs/burj-al-arab.webp";
import slide3 from "../carousel/imgs/dubai.webp";
import { useTranslation } from "react-i18next";
import "./Carousel.css";

const CarouselPage = () => {
  const { t } = useTranslation();
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    setInitialRender(false);
  }, []);

  // Determine if the current language is Arabic
  const isArabic = localStorage.getItem("i18nextLng") === "ar"; // Update this based on your i18n configuration

  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <div style={{ position: "relative", height: "100%" }}>
          <img
            loading="lazy"
            className="carousel-image"
            src={slide1}
            alt={
              initialRender ? "Emirates ID Services" : t("carousel.emiratesId")
            }
          />
          <div className="overlay" />
          <Carousel.Caption style={{ zIndex: 2 }}>
            <h2 className="h1">
              {initialRender
                ? "Emirates ID Services"
                : t("carousel.emiratesId")}
            </h2>
            <p className={isArabic ? "text-end fs-5" : "text-start fs-5"}>
              {initialRender
                ? `Emirates ID card is an identification card, issued by the Emirates Identity Authority (EIA) (EIDA), that all UAE citizens & residents are...`
                : t("carousel.emiratesIdDescription")}
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div style={{ position: "relative", height: "100%" }}>
          <img
            loading="lazy"
            className="carousel-image"
            src={slide2}
            alt={initialRender ? "Business Man Services" : t("carousel.ded")}
          />
          <div className="overlay" />
          <Carousel.Caption style={{ zIndex: 2 }}>
            <h2 className="h1">
              {initialRender ? "DED Services" : t("carousel.ded")}
            </h2>
            <p className={isArabic ? "text-end fs-5" : "text-start fs-5"}>
              {initialRender
                ? "Establishment of companies and all licenses and commercial activities, as well as assistance in selecting the appropriate location and activity that suits businessmen and investors."
                : t("carousel.dedDescription")}
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ position: "relative", height: "100%" }}>
          <img
            loading="lazy"
            className="carousel-image"
            src={slide3}
            alt={initialRender ? "Tawjeeh Services" : t("carousel.tawjeeh")}
          />
          <div className="overlay" />
          <Carousel.Caption style={{ zIndex: 2 }}>
            <h2 className="h1">
              {initialRender ? "Tawjeeh Services" : t("carousel.tawjeeh")}
            </h2>
            <p className={isArabic ? "text-end fs-5" : "text-start fs-5"}>
              {initialRender
                ? "Tawjeeh Center in Dubai is licensed by The Ministry of Human Resources and Emiratisation (MOHRE) to provide awareness and orientation services..."
                : t("carousel.tawjeehDescription")}
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselPage;
