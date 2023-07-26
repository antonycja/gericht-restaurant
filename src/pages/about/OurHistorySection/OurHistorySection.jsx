import "./ourhistorysection.css";
import PageHeader from "../../../components/PageHeader/PageHeader";
export default function OurHistorySection() {
  const data = {
    header: {
      title: "Our History",
      heading: "serving customers for over a decade",
    },
  };
  return (
    <div className="ourHistorySection">
      <section>
        <div className="page-container">
          <header className="history-header">
            <PageHeader
              title={data.header.title}
              heading={data.header.heading}
            />
          </header>
          <div className="history-images"></div>
        </div>
      </section>
    </div>
  );
}
