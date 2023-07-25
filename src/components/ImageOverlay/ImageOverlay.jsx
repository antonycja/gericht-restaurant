import "./imageoverlay.css";
import overlayImg from "../../assets/overlaybg.png";
export default function ImageOverlay() {
  return (
    <img
      className="main-overlay-img"
      src={overlayImg}
      alt="overlay image"
    />
  );
}
