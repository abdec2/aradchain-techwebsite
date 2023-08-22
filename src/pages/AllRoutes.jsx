import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Services from "./services/Services";
import About from "./about/About";
import Contact from "./contact/Contact";
import Blogs from "./blogs/Blogs";
import Projects from "./projects/Projects";
import Servicespage from "./servicesPage/Servicespage";
import Projectpage from "./projectPage/Projectpage";
import Article from "./article/Article";
import PartnerWithUs from "./partner/Partner";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/partner-with-us" element={<PartnerWithUs />} />
      <Route path="/services/:slug" element={<Servicespage />} />
      <Route path="/projects/:slug" element={<Projectpage />} />
      <Route path="/article/:slug" element={<Article />} />
    </Routes>
  );
};

export default AllRoutes;
