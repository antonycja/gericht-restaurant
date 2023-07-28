import "./aboutSection.css";
import AboutHistory from "../../../components/AboutHistory/AboutHistory";
import knife from "../../../assets/knife.png";
import G from "../../../assets/G.png";
export default function AboutSection() {
  const aboutDetails = {
    title: "about us",
    text: "At Gerícht, we are dedicated to elevating your culinary experience to new heights. Our talented team of chefs artfully combines flavors from around the world, creating exquisite dishes that will tantalize your taste buds. With a commitment to impeccable service, we invite you to indulge in a gastronomic journey that celebrates the art of fine dining.",
    buttonText: "Know More",
  };
  const historyDetails = {
    title: "our history",
    text: "Since its inception, Gerícht has been a testament to passion and innovation in the culinary world. Founded with a vision to redefine fine dining, we have continuously pushed boundaries, earning a reputation for excellence. Our commitment to quality, creativity, and exceptional dining experiences has solidified our position as a culinary destination of choice.",
    buttonText: "Know More",
    align: "right",
  };
  return (
    <>
      <div className="aboutSection">
        <section>
          <div className="page-container">
            <div className="about">
              <AboutHistory
                title={aboutDetails.title}
                text={aboutDetails.text}
                buttonText={aboutDetails.buttonText}
                align={historyDetails.align}
              />
            </div>
            <div className="center-img">
              <div className="img-container">
                <div className="top-img">
                  <img
                    src={knife}
                    alt=""
                  />
                </div>
                <div className="bottom-img">
                  <img
                    src={G}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="history">
              <AboutHistory
                title={historyDetails.title}
                text={historyDetails.text}
                buttonText={historyDetails.buttonText}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
