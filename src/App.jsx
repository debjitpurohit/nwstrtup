import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ServicesPage from "./components/Service";
import StartEarning from "./components/EarningToday";
import SafetyPage from "./components/Safety";
import SocialLinksPage from "./components/connect";
import DownloadNowPage from "./components/Download";
import Footer from "./components/Footer";
import MobileBottomBanner from "./components/Banner";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-yellow-300 to-orange-500">

      <Navbar />

      {/* HOME */}
      <div id="home">
        <Home />
      </div>

      {/* SERVICES */}
      <div id="services">
        <ServicesPage />
      </div>

      {/* SAFETY */}
      <div id="safety">
        <SafetyPage />
      </div>

      {/* EARN TODAY */}
      <div id="earn">
        <StartEarning />
      </div>

      {/* DOWNLOAD */}
      <div id="download">
        <DownloadNowPage />
      </div>

      {/* CONNECT */}
      <div id="connect">
        <SocialLinksPage />
      </div>

      <Footer />
      <ScrollToTop />
      <MobileBottomBanner />

    </div>
  );
}
