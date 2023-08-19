import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import GalleryPage from "./GallerySection/GalleryPage";
import NewsletterPage from "./NewsletterSection/NewsletterPage";
import ImageOverlay from "../../components/ImageOverlay/ImageOverlay";

export default function Homepage() {
  const meta = {
    title: "Gericht restaurant homepage built by codeant",
    description:
      "The home page with the link to every other page on this gericht restaurant website built by codeant",
    canonical: "https://codeantrestaurant.netlify.app/",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "restaurent ,gericht,codeant,antonycja,capetown",
      },
    },
  };
  const [currentBackground, setCurrentBackground] = useState(
    menuData[0].menuImg
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index, background) => {
    setCurrentBackground(background);
    setActiveIndex(index);
  };

  const navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page);
  };

  return (
    <>
      <DocumentMeta {...meta} />
      <div className="Homepage">
        {/* <Navbar /> */}
        <main className="overlay-holder">
          <ImageOverlay />
          <HeroPage goToLink={navigateToPage} />
          <AboutSection goToLink={navigateToPage} />
          <BookTable goToLink={navigateToPage} />
          <MenuPage
            currentBackground={currentBackground}
            activeIndex={activeIndex}
            onMenuClick={handleClick}
            data={menuData}
          />
          <PromotionsPage
            dataIndex={menuData[activeIndex]}
            goToLink={navigateToPage}
          />
          <ChefsWordPage />
          <TestimonialsPage />
          <VideoPage />
          <LaurelPage />
          <BlogsPage />
          <GalleryPage />
          <NewsletterPage />
        </main>
      </div>
    </>
  );
}
