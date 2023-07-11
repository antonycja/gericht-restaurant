import ImageBox from "../../../components/ImageSquareBox/ImageBox";
import Laurel from "../../../components/Laurel/Laurel";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Images from "../../../constants/Images";
import "./laurelpage.css";
export default function LaurelPage() {
  const details = [
    {
      img: Images.award02,
      heading: "Bib Gourmond",
      description: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      img: Images.award01,
      heading: "Rising Star",
      description: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      img: Images.award04,
      heading: "AA Hospitality",
      description: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      img: Images.award03,
      heading: "Outstanding Chef",
      description: "Lorem ipsum dolor sit amet, consectetur.",
    },
  ];
  const pageHeader = { title: "Awards & recognition", heading: "Our Laurels" };
  return (
    <>
      <div className="laurelPage">
        <section>
          <div className="page-container">
            <div className="awards-block">
              <PageHeader
                title={pageHeader.title}
                heading={pageHeader.heading}
              />
              <div className="laurels">
                {details.map((laurel, index) => (
                  <Laurel
                    key={index}
                    img={laurel.img}
                    heading={laurel.heading}
                    description={laurel.description}
                  />
                ))}
              </div>
            </div>
            <div className="image-block">
              <ImageBox image={Images.laurels} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
