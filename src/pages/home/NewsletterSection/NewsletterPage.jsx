import Newsletter from "../../../components/Newsletter/Newsletter";
import PageHeader from "../../../components/PageHeader/PageHeader";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import "./newsletterpage.css";
import Footer from "../../../components/Footer/Footer";
export default function NewsletterPage() {
  const dataList = {
    title: "Newsletter",
    heading: "Subscribe to Our Newsletter",
    description: "And never miss latest Updates!",
    footerHeading: "Gerícht",
    footerDescription:
      '"The best way to find yourself is to lose yourself in the service of others.”',
    footerText: `${new Date().getFullYear()} CodeAnt | Gerícht. All Rights reserved.`,
    logos: [<FaFacebookF />, <FiTwitter />, <FiInstagram />],
    contact: {
      title: "Contact Us",
      address: "9 W 53rd St, New York, NY 10019, USA",
      numbers: "+1 212-344-1230 +1 212-555-1230",
    },
    hours: {
      title: "Working Hours",
      weekdays: "Monday-Friday: 08:00 am -12:00 am",
      weekends: "Saturday-Sunday: 07:00am -11:00 pm",
    },
  };
  return (
    <>
      <div className="main-contact">
        <div className="Newsletterpage">
          <section>
            <div className="page-container">
              <div className="newsletter-box">
                <div className="newsletter-header">
                  <PageHeader
                    title={dataList.title}
                    heading={dataList.heading}
                    description={dataList.description}
                  />
                </div>
                <div className="newsletter-form">
                  <Newsletter />
                </div>
              </div>
              <footer className="footer-box">
                <div className="footer-content-box">
                  <div className="contact-us-box">
                    <Footer
                      footerTextHeading={dataList.contact.title}
                      footerText1={dataList.contact.address}
                      footerText2={dataList.contact.numbers}
                    />
                  </div>
                  <div className="logo-socials-box">
                    <PageHeader
                      spoon={false}
                      heading={dataList.footerHeading}
                      headingSize={3}
                      description={dataList.footerDescription}
                      footerSpoon={true}
                      socialLogos={dataList.logos}
                    />
                  </div>
                  <div className="opening-hours-box">
                    <Footer
                      footerTextHeading={dataList.hours.title}
                      footerText1={dataList.hours.weekdays}
                      footerText2={dataList.hours.weekends}
                    />
                  </div>
                </div>
                <div className="footer-copyright">
                  <p>{dataList.footerText}</p>
                </div>
              </footer>
            </div>
          </section>
        </div>
        <div className="bg-img-bg"></div>
      </div>
    </>
  );
}
