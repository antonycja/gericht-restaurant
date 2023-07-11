import "./laurel.css"
export default function Laurel({
  img,
  heading = "heading",
  description = "description",
}) {
  return (
    <>
      <div className="laurel-container">
        <div className="laurel-img">
          <img
            src={img}
            alt="awards image"
          />
        </div>
        <div className="laurel-text-box">
          <div className="laurel-heading">
            <h5>{heading}</h5>
          </div>
          <div className="laurel-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
