import PageHeader from "../../../components/PageHeader/PageHeader";
import VideoPage from "../../home/VideoSection/VideoPage"
import "./aboutussection.css";
export default function AboutUsSection() {
  const data = {
    title: "About Us",
    heading: "Happy Hours with Us",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.",
  };
  return (
    <>
      <div className="AboutUs">
        <section>
          <div className="page-container">
            <div className="about-us-header">
              <PageHeader
                title={data.title}
                heading={data.heading}
                description={data.description}
              />
            </div>
            <VideoPage />
          </div>
        </section>
      </div>
    </>
  );
}
