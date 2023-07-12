import { useState } from "react";
import "./homepage.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroPage from "./HeroSection/HeroPage";
import AboutSection from "./AboutSection/AboutSection";
import BookTable from "./BookTableSection/BookTable";
import MenuPage from "./MenuSection/MenuPage";
import PromotionsPage from "./MenuPromotions/PromotionsPage";

import menuData from "../../constants/menuData";
import ChefsWordPage from "./ChefsWord/ChefsWordPage";
import TestimonialsPage from "./Testimonials/TestimonialsPage";
import VideoPage from "./VideoSection/VideoPage";
import LaurelPage from "./LaurelSection/LaurelPage";
import BlogsPage from "./BlogsSection/BlogsPage";

export default function Homepage() {
  const [currentBackground, setCurrentBackground] = useState(
    menuData[0].menuImg
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index, background) => {
    setCurrentBackground(background);
    setActiveIndex(index);
  };
  return (
    <div className="Homepage">
      <Navbar />
      <main>
        <HeroPage />
        <AboutSection />
        <BookTable />
        <MenuPage
          currentBackground={currentBackground}
          activeIndex={activeIndex}
          onMenuClick={handleClick}
          data={menuData}
        />
        <PromotionsPage dataIndex={menuData[activeIndex]} />
        <ChefsWordPage />
        <TestimonialsPage />
        <VideoPage />
        <LaurelPage />
        <BlogsPage />
      </main>
    </div>
  );
}
