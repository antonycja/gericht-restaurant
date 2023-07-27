import "./ourhistorysection.css";
import PageHeader from "../../../components/PageHeader/PageHeader";
import ImageBox from "../../../components/ImageSquareBox/ImageBox";
import { historyImages } from "../../../constants/Images";
export default function OurHistorySection() {
  const data = {
    header: {
      title: "Our History",
      heading: "serving customers for over a decade",
    },
    history: {
      left: {
        image: historyImages.history1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.",
      },
      right: {
        image: historyImages.history2,
        heading: "Over the years",
        value: [
          { value: "30+", text: "Breakfast Options" },
          { value: "50+", text: "Dinner Options" },
          { value: "8", text: "New Locations" },
        ],
      },
    },
  };
  return (
    <div className="ourHistory">
      <section>
        <div className="page-container">
          <header className="history-header">
            <PageHeader
              title={data.header.title}
              heading={data.header.heading}
            />
          </header>
          <div className="history-images">
            <ImageBox
              left={data.history.left}
              image={data.history.left.image}
            />
            <ImageBox
              right={data.history.right}
              image={data.history.right.image}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
