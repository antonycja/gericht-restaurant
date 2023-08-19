import { Helmet } from "react-helmet";
import ImageOverlay from "../../components/ImageOverlay/ImageOverlay";
import HeroPage from "./HeroSection/HeroPage";
import ServingPage from "./ServingSection/ServingPage";
import "./servicespage.css";
import BookTable from "../home/BookTableSection/BookTable";
import HappyHours from "./HappyHour/HappyHours";
import ServiceMenuPage from "./MenuPage/MenuPage";
import NewsletterPage from "../home/NewsletterSection/NewsletterPage";

export default function Servicespage() {
  const meta = {
    title: "Gericht restaurant services page built by codeant",
    description:
      "The services page with the link to every other page on this gericht restaurant website built by codeant. all our servives are listed on this page",
    canonical: "https://codeantrestaurant.netlify.app/services",
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
    </>
  );
}
