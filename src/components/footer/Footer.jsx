import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <Row className="p-3">
          <Col lg={6} md={12}>
            <Link to="/" className="footerHeader fw-bold ">
              {t("footer.brand")}
            </Link>
          </Col>
          <Col lg={6} md={12}>
            <div className="footer-content d-flex flex-column">
              <div className="d-flex align-items-center maill">
                <FontAwesomeIcon icon={faEnvelope} className="fs-3 m-2 " />
                <a href="mailto:info@elkasabyservices.com">
                  info@elkasabyservices.com
                </a>
              </div>
              <div className="d-flex align-items-center mt-4">
                <FontAwesomeIcon icon={faLocationDot} className="fs-3 m-2" />
                <p className="mb-0">{t("footer.location")}</p>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="p-3">
          <Col md={6}>
            <ul className="footerLinks list-unstyled d-flex gap-3">
              <li>
                <Link to="/">{t("footer.home")}</Link>
              </li>
              <li>
                <Link to="/about">{t("footer.about")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("footer.contact")}</Link>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <p className="copyRights">
              &copy; 2024, {t("footer.allRightsReserved")}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
