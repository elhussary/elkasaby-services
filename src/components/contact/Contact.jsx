import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import AnimatedPages from "../AnimatedPages";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();
  const formRef = useRef();

  const handleForm = (resetForm) => {
    emailjs
      .sendForm("service_anzm4np", "template_szfmo07", formRef.current, {
        publicKey: "GFFtHd7yfy09fYHmp",
      })
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          resetForm();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          console.log("FAILED...", error.text);
        }
      );
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t("validation.nameRequired"))
      .min(3, t("validation.nameTooShort"))
      .max(15, t("validation.nameTooLong")),
    email: Yup.string()
      .required(t("validation.emailRequired"))
      .email(t("validation.emailInvalid")),
    phone: Yup.string()
      .required(t("validation.phoneRequired"))
      .matches(/^05[024568]{1}[0-9]{7}$/, t("validation.phoneInvalid")),
    message: Yup.string()
      .required(t("validation.messageRequired"))
      .min(3, t("validation.messageTooShort")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleForm(resetForm);
    },
  });

  return (
    <AnimatedPages>
      <div className="contact-container">
        <Container className=" mt-5">
          <Row className="align-items-center">
            <Col md={4}>
              <img
                loading="lazy"
                className="w-100"
                src="https://www.informa-180.com/images/get-in-touch.svg"
                alt={t("askUs.imageAlt")}
              />
            </Col>
            <Col md={8}>
              <p className="contact-title">{t("askUs.getInTouch")}</p>
              <form ref={formRef} onSubmit={formik.handleSubmit}>
                <input
                  placeholder={t("form.fullNamePlaceholder")}
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  type="text"
                  name="name"
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="text-danger">{formik.errors.name}</p>
                )}
                <input
                  placeholder={t("form.phonePlaceholder")}
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  type="tel"
                  name="phone"
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p className="text-danger">{formik.errors.phone}</p>
                )}
                <input
                  placeholder={t("form.emailPlaceholder")}
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="email"
                  name="email"
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-danger">{formik.errors.email}</p>
                )}
                <textarea
                  placeholder={t("form.messagePlaceholder")}
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  name="message"
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.errors.message && formik.touched.message && (
                  <p className="text-danger">{formik.errors.message}</p>
                )}
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                  className="btn btn-success float-end my-3"
                >
                  {t("form.sendButtonText")}
                  <i className="fa-regular fa-paper-plane"></i>
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </AnimatedPages>
  );
}

export default Contact;
