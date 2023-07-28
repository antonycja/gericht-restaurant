import PageHeader from "../../../components/PageHeader/PageHeader";
import ImageBox from "../../../components/ImageSquareBox/ImageBox";
import welcome from "../../../assets/welcome.png";
import "./heropage.css";

export default function HeroPage() {
  const details = {
    title: "Chase the new Flavour",
    heading: "The key to Fine dining",
    headingSize: 5.6,
    description:
      "Embark on an extraordinary culinary journey in a captivating setting. Immerse yourself in a symphony of tantalizing flavors meticulously curated to captivate your senses. Our passionate team is dedicated to crafting an unforgettable dining experience that will leave you craving for more.",
    buttonText: "Explore Menu",
    image: welcome,
  };
  return (
    <section className="outline heropage">
      <div className="edge-text">
        <p>#Bar</p>
        <p>#Gericht</p>
      </div>
      <div className="page-container">
        <PageHeader
          title={details.title}
          heading={details.heading}
          headingSize={details.headingSize}
          description={details.description}
          buttonText={details.buttonText}
        />
        <ImageBox image={details.image} />
      </div>
      <div className="bottom-slider">
        <p>01</p>
        <div className="hr">
          <hr className="bottom-slider-line" />
        </div>
        <p>02</p>
        <p>03</p>
        <p>04</p>
      </div>
      <div className="edge-scroll">
        <p>
          <svg
            width="2"
            height="57"
            viewBox="0 0 2 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Line">
              <path
                id="Vector 5"
                d="M1 0V57"
                stroke="url(#paint0_radial_572_127)"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_572_127"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1.5 28.5) rotate(90) scale(28.5 0.5)"
              >
                <stop
                  offset="0.588542"
                  stopColor="white"
                />
                <stop
                  offset="1"
                  stopColor="white"
                  stopOpacity="0"
                />
              </radialGradient>
            </defs>
          </svg>
        </p>
        <p>Scroll</p>
      </div>
    </section>
  );
}
