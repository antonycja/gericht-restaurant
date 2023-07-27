import "./contactpage.css";
import ImageOverlay from "../../components/ImageOverlay/ImageOverlay";
import NewsletterPage from "../home/NewsletterSection/NewsletterPage";
import HeroSection from "./HeroSection/HeroSection";

export default function Contactpage() {
  return (
    <main className="contact-page">
      <ImageOverlay />
      <HeroSection />
      <NewsletterPage />
    </main>
  );
}
