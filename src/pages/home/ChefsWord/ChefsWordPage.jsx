import ImageBox from "../../../components/ImageSquareBox/ImageBox";
import chef from "../../../assets/chef.webp";
import "./chefsword.css";
import PageHeader from "../../../components/PageHeader/PageHeader";
import PersonDetails from "../../../components/PersonDetails/PersonDetails";

export default function ChefsWordPage() {
  const details = {
    title: "Chef’s Word",
    heading: "What we believe in",
    description:
      "As a chef and founder, I am driven by my passion for culinary arts. Our mission is to provide exceptional dining experiences through innovative flavors and textures. We believe in creating memorable dishes that excite the palate. With a commitment to culinary excellence, we strive to exceed your expectations. Join us on a journey of exquisite flavors and culinary mastery.",
    personName: "Kevin Luo",
    personPosition: "Chef & Founder",
    sign: true,
  };
  return (
    <>
      <div className="chefswordPage">
        <section>
          <div className="page-container">
            <div className="chef-image-box">
              <ImageBox image={chef} />
            </div>
            <div className="about-chef">
              <PageHeader
                title={details.title}
                heading={details.heading}
                description={details.description}
                quote={true}
              />
              <PersonDetails
                personName={details.personName}
                personPosition={details.personPosition}
                sign={details.sign}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
