import Overlay from "../Overlay/Overlay";
import "./herocover.css";
import { BiChevronRight } from "react-icons/bi";
export default function HeroCover({
  heroBackground,
  HeroTitle,
  currentPage,
  descriptive,
}) {
  return (
    <>
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <Overlay />
        <section>
          <div className="page-container">
            <div className="title">
              <h1 style={descriptive && { fontSize: "8rem" }}>{HeroTitle}</h1>
            </div>
            {currentPage && (
              <div className="current-page">
                <h5>Home</h5>
                <BiChevronRight className="rightArrow" />
                <h5>{currentPage}</h5>
              </div>
            )}
            {descriptive && (
              <div className="descriptive">
                <p>{descriptive.days}</p>
                <p>({descriptive.times})</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
