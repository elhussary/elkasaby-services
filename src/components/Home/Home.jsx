import CarouselPage from "./carousel/CarouselPage";
import Services from "./Services/Services";
import Cards from "./cards/Cards";
import banner from "./bannerUAE.webp";
import Plane from "../plane/Plane";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedPages from "../AnimatedPages";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="mt-5">
        <CarouselPage />
      </div>
      <div>
        <Services />
      </div>
      <div className="cardsHome">
        <AnimatePresence mode="wait">
          <AnimatedPages key="uniqueKey">
            <Cards />
          </AnimatedPages>
        </AnimatePresence>
      </div>

      <AnimatedPages>
        <motion.div
          className="w-75 mx-auto p-2"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          loading="lazy"
        >
          <img className="w-100" src={banner} alt="Zayed UAE" loading="lazy" />
        </motion.div>
      </AnimatedPages>
    </>
  );
};

export default Home;
