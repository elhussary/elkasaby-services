import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notFound/NotFound";
import Layout from "./components/Layout";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute("dir", i18n.dir(i18n.language));
  }, [i18n.language]);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
