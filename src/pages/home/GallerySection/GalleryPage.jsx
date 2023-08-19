import GallerySlider from "../../../components/GallerySlider/GallerySlider";
import PageHeader from "../../../components/PageHeader/PageHeader";
import "./gallerypage.css";
import { galleryImg } from "../../../constants/Images.js";

export default function GalleryPage() {
  const handleClick = () => alert("Gallery page: View more button clicked");
  const pageHeader = {
    title: "Instagram",
    heading: "Photo Gallery",
    description:
      "Discover culinary artistry through our gallery. Immerse yourself in exquisite visuals of our dishes and ambiance. Let the images inspire your dining experience.",
    btnText: "View More",
    btnClick: handleClick,
  };
  return (
    <>
      <div className="galleryPage">
        <section>
          <div className="page-container">
            <div className="gallery-header">
              <PageHeader
                title={pageHeader.title}
                heading={pageHeader.heading}
                description={pageHeader.description}
                // buttonText={pageHeader.btnText}
                // btnClick={pageHeader.btnClick}
              />
            </div>
          </div>
        </section>
        <div className="gallery-slider">
          <div className="gallery-images">
            <GallerySlider
              className="img"
              image={galleryImg}
            />
          </div>
        </div>
      </div>
    </>
  );
}
