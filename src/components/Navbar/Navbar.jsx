import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./navbar.css";
import Language from "../Language";

function MainNavbar() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar
      expand="lg"
      className="navbar shadow-lg p-3 mb-5"
      fixed="top"
      expanded={expanded}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <h1 className="h3 fw-bold">{t("brand")}</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="navbarScroll" className="navbar-scroll-custom">
          <Nav
            className={`${isRTL ? "me-auto" : "ms-auto"} my-2 my-lg-0`}
            navbarScroll
          >
            <Link
              to="/home"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              {t("home")}
            </Link>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              {t("about")}
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              {t("contact")}
            </Link>
          </Nav>
          <div
            className="d-flex align-items-center m-lg-1"
            onClick={() => setExpanded(false)}
          >
            <a
              className="btn navBtn p-0"
              href="https://wa.me/+971557044261"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="whatsapp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <Language />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
