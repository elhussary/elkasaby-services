import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faChartLine,
  faTools,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import card1 from "./imgs/1.jpg";
import card2 from "./imgs/2.jpg";
import card3 from "./imgs/3.jpg";
import card4 from "./imgs/4.jpg";
import AnimatedPages from "../../AnimatedPages";
import { useTranslation } from "react-i18next";
import "./cards.css";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardData = [
  {
    icon: faFile,
    img: card1,
    titleKey: "cards.transactions.title",
    itemsKey: "cards.transactions.items",
  },
  {
    icon: faChartLine,
    img: card2,
    titleKey: "cards.ministryTransactions.title",
    itemsKey: "cards.ministryTransactions.items",
  },
  {
    icon: faTools,
    img: card3,
    titleKey: "cards.passportTransactions.title",
    itemsKey: "cards.passportTransactions.items",
  },
  {
    icon: faPlane,
    img: card4,
    titleKey: "cards.visas.title",
    itemsKey: "cards.visas.items",
  },
];

function Cards() {
  const { t } = useTranslation();

  return (
    <AnimatedPages>
      <Container className="my-5">
        <Row className="justify-content-center">
          {cardData.map((card, index) => (
            <Col lg={3} md={6} xs={12} className="mb-3" key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <Card className="my-card">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={card.icon} className="card-icon" />
                  </div>
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={card.img}
                    alt={t(card.titleKey)}
                    loading="lazy"
                  />
                  <Card.Body>
                    <Card.Title>{t(card.titleKey)}</Card.Title>
                    <div className="card-text">
                      <ul>
                        {(Array.isArray(
                          t(card.itemsKey, { returnObjects: true })
                        )
                          ? t(card.itemsKey, { returnObjects: true })
                          : []
                        ).map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </AnimatedPages>
  );
}

export default Cards;
