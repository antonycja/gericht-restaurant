import PersonDetails from "../PersonDetails/PersonDetails";
import quote from "../../assets/quote.webp";
import "./testimonial.css";

export default function Testimonial({name, position, img, description}) {
  return (
    <>
      <div className="testimonial-container">
        <div className="testimonial-img">
          <div className="user-img">
            <img
              className="user"
              src={img}
              alt=""
            />
            <div className="user-quote">
              <img
                src={quote}
                alt="quote"
              />
            </div>
          </div>
        </div>
        <div className="testimonial-body">
          <div className="testimonial-text"><p>{description}</p></div>
          <PersonDetails className="personDetails"
            personName={name}
            personPosition={position}
          />
        </div>
      </div>
    </>
  );
}
