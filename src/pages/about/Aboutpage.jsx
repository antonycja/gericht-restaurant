import ChefsWordPage from "../home/ChefsWord/ChefsWordPage";
import GalleryPage from "../home/GallerySection/GalleryPage";
import NewsletterPage from "../home/NewsletterSection/NewsletterPage";
import TestimonialsPage from "../home/Testimonials/TestimonialsPage";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import HeroSection from "./HeroSection/HeroSection";
import OurHistorySection from "./OurHistorySection/OurHistorySection";
import ImageOverlay from "../../components/ImageOverlay/ImageOverlay";
import "./aboutpage.css";
export default function Aboutpage() {
  return (
    <main className="aboutpage">
      <ImageOverlay />
      <HeroSection />
      <OurHistorySection />
      <AboutUsSection />
      <ChefsWordPage />
      <TestimonialsPage />
      <GalleryPage />
      <NewsletterPage />
    </main>
  );
}
