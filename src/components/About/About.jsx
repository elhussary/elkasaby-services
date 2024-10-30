import React from "react";
import CarouselPage from "../Home/carousel/CarouselPage";
import "./About.css";
import Plane from "../plane/Plane";
import { Container, Col, Row } from "react-bootstrap";
import aboutImg1 from "./aboutImgs/1.png";
import aboutImg2 from "./aboutImgs/2.png";
import aboutImg3 from "./aboutImgs/3.png";
import aboutImg4 from "./aboutImgs/4.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import AnimatedPages from "../AnimatedPages";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const position = [25.1199473, 56.3268195];

  return (
    <>
      <div className="mt-5">
        <CarouselPage />
      </div>
      <AnimatedPages>
        <div className="about w-100">
          <div className="p-2 mt-3">
            <h3 className="WhoWeAreTitle">{t("aboutSection.whoWeAreTitle")}</h3>
            <p className="text-center text-muted WhoWeAreP w-100 mx-auto">
              <b>{t("brand")}</b> {t("aboutSection.aboutDescription")}
            </p>
          </div>
          <Container className="my-4 p-3">
            <Row className="g-4">
              <Col md={3} xs={6} className="d-flex justify-content-center">
                <img
                  src={aboutImg1}
                  alt={t("aboutSection.aboutImage1Alt")}
                  className="img-fluid p-2"
                />
              </Col>
              <Col md={3} xs={6} className="d-flex justify-content-center">
                <img
                  src={aboutImg2}
                  alt={t("aboutSection.aboutImage2Alt")}
                  className="img-fluid p-2"
                />
              </Col>
              <Col md={3} xs={6} className="d-flex justify-content-center">
                <img
                  src={aboutImg3}
                  alt={t("aboutSection.aboutImage3Alt")}
                  className="img-fluid p-2"
                />
              </Col>
              <Col md={3} xs={6} className="d-flex justify-content-center">
                <img
                  src={aboutImg4}
                  alt={t("aboutSection.aboutImage4Alt")}
                  className="img-fluid p-2"
                />
              </Col>
            </Row>
          </Container>
          <div className="mt-5 p-2">
            <h3 className="WhoWeAreTitle my-3">
              {t("aboutSection.whatWeDoTitle")}
            </h3>
            <p className="text-center text-muted WhoWeAreP w-100 mx-auto">
              {t("aboutSection.whatWeDoDescription")}
            </p>
          </div>
          <div>
            <h3 className="WhoWeAreTitle my-3">
              {t("aboutSection.whereWeAreTitle")}
            </h3>
            <div>
              <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={true}
                style={{ height: "400px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    {t("brand")} <br /> Fujairah, UAE.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </AnimatedPages>
    </>
  );
}

export default About;
