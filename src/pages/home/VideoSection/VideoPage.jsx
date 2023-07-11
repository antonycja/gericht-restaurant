import { useEffect, useRef, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import images from "../../../constants/Images";
import "./videopage.css";
export default function VideoPage() {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const handleClick = () => {
    setPlayVideo((prevPlayVideo) => {
      const newPlayVideo = !prevPlayVideo;
      if (newPlayVideo) {
        vidRef.current.play();
      } else {
        vidRef.current.pause();
      }
      return newPlayVideo;
    });
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code == "Space") {
        handleClick();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });
  return (
    <>
      <div className="video-page">
        <div className="video-player">
          <video
            controls={false}
            muted
            loop
            width="100%"
            height="100%"
            ref={vidRef}
          >
            <source
              src={images.video}
              type="video/mp4"
            />
          </video>

          <div className="video-play-overlay">
            <section>
              <div className="page-container">
                <div
                  className="video-play-btn"
                  onClick={handleClick}
                >
                  {playVideo ? <BsPauseFill /> : <BsPlayFill />}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
