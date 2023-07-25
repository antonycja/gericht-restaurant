import Button from "../../../components/Button";
import PageHeader from "../../../components/PageHeader/PageHeader";
import "./servingpage.css";
export default function ServingPage() {
  const data = {
    title: "Serving Quality",
    heading: "We at Gericth are serving our customers for over a decade.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.",
    MainBtnText: "Read More",
    MainBtnClick: () => alert("Main Btn Clicked"),
    SubBtnText: "Contact Us",
    SubBtnClick: () => alert("Outline Btn Clicked"),
  };
  return (
    <div className="ServingPage">
      <section>
        <div className="page-container">
          <PageHeader
            title={data.title}
            heading={data.heading}
            description={data.description}
          />
          <div className="service-btns">
            <Button
              text={data.MainBtnText}
              btnClick={data.MainBtnClick}
            />
            <Button
              text={data.SubBtnText}
              btnClick={data.SubBtnClick}
              className="btn-outline"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
