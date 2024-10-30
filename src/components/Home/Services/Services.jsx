import React from "react";
import "./Services.css";
import { Container, Row, Col } from "react-bootstrap";
import dubaigov from "./servicesImgs/dubaigov.png";
import emiratesid from "./servicesImgs/emiratesid.png";
import ministry from "./servicesImgs/ministry.jpg";
import smartdubai from "./servicesImgs/smartdubai.png";
import FujairahMunicipality from "./servicesImgs/Fujairah Municipality.png";
import smartservices from "./servicesImgs/smartservices.png";
import AnimatedPages from "../../AnimatedPages";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  return (
    <>
      <AnimatedPages>
        <div className="homeServices">
          <h3 className="ServicesTitle">{t("services.title")}</h3>{" "}
          <p className="text-center text-muted w-100 mx-auto Servicesp">
            {t("services.description")}
          </p>
        </div>
        <Container className="my-5">
          <Row className="justify-content-center align-items-center">
            <Col md={4} xs={4} className="d-flex justify-content-center mb-4">
              <div>
                <img
                  className="imgServices"
                  src={smartservices}
                  alt={t("services.smartServicesAlt")} // You can add alt text translations if needed
                  width="300"
                  height="200"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col md={4} xs={4} className="d-flex justify-content-center mb-4">
              <div>
                <img
                  className="imgServices"
                  src={dubaigov}
                  alt={t("services.dubaiGovAlt")} // Add more alt text translations if needed
                  width="300"
                  height="200"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col md={4} xs={4} className="d-flex justify-content-center mb-4">
              <div>
                <img
                  className="imgServices"
                  src={emiratesid}
                  alt={t("services.emiratesIdAlt")}
                  width="300"
                  height="200"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center my-5">
            <Col md={4} xs={4} className="d-flex justify-content-center mb-4">
              <div>
                <img
                  className="imgServices"
                  src={FujairahMunicipality}
                  alt={t("services.fujairahMunicipalityAlt")}
                  width="300"
                  height="200"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col md={4} xs={4} className="d-flex justify-content-center mb-4">
              <div>
                <img
                  className="imgServices"
                  src={ministry}
                  alt={t("services.ministryAlt")}
                  width="300"
                  height="200"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col md={4} xs={4} className="d-flex justify-content-center mb-4">
              <div>
                <img
                  className="imgServices"
                  src={smartdubai}
                  alt={t("services.smartDubaiAlt")}
                  width="300"
                  height="200"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </AnimatedPages>
    </>
  );
}

export default Services;
