import "./imagebox.css";
export default function ImageBox({ image }) {
  return (
    <>
      <div className="image-box">
        <img
          src={image}
          alt="image"
        />
      </div>
    </>
  );
}
