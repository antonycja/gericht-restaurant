import { Helmet } from "react-helmet";
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
  const meta = {
    title: "Gericht restaurant about page built by codeant",
    description:
      "The about page with the link to every other page on this gericht restaurant website built by codeant. The History of the restaurent is available on this page.",
    canonical: "https://codeantrestaurant.netlify.app/about",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "restaurent ,gericht,codeant,antonycja,capetown",
      },
    },
  };
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta
          name="description"
          content={meta.description}
        />
        <link
          rel="canonical"
          href={meta.canonical}
        />
        <meta charSet={meta.meta.charset} />
        <meta
          name="keywords"
          content={meta.meta.name.keywords}
        />
      </Helmet>

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
    </>
  );
}
