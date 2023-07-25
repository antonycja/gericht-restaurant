import ImageOverlay from "../../components/ImageOverlay/ImageOverlay";
import HeroPage from "./HeroSection/HeroPage";
import ServingPage from "./ServingSection/ServingPage";
import "./servicespage.css";
import BookTable from "../home/BookTableSection/BookTable";
import HappyHours from "./HappyHour/HappyHours";
import ServiceMenuPage from "./MenuPage/MenuPage";
import NewsletterPage from "../home/NewsletterSection/NewsletterPage";

export default function Servicespage() {
  return (
    <div className="Servicespage">
      {/* <Navbar /> */}
      <main className="overlay-holder">
        <ImageOverlay />
        <HeroPage />
        <ServingPage />
        <ServiceMenuPage />
        <BookTable />
        <HappyHours />
        <NewsletterPage />
      </main>
    </div>
  );
}
