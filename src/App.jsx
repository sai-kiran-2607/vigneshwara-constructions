import React from "react";
import { Layout, FloatButton } from "antd";
import { Routes, Route } from "react-router-dom";
import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import Navbar from "./components/Navbar";
import SiteFooter from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const { Content } = Layout;

export default function App() {
  return (
    <Layout className="site-blueprint min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Content className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Content>
      <SiteFooter />

      <FloatButton
        icon={<WhatsAppOutlined />}
        type="primary"
        href="https://wa.me/917207601556"
        target="_blank"
        tooltip="WhatsApp"
        style={{ right: 24, bottom: 96, backgroundColor: "#25D366" }}
      />

      <FloatButton
        icon={<PhoneOutlined />}
        href="tel:+917207601556"
        tooltip="Call Now"
        style={{ right: 24, bottom: 24 }}
      />
    </Layout>
  );
}
