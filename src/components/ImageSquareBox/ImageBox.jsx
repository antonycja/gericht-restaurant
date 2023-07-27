import PageHeader from "../PageHeader/PageHeader";
import "./imagebox.css";
export default function ImageBox({ image, left, right }) {
  return (
    <>
      <div className="image-box">
        {left && (
          <div className="top-text">
            <p>{left.text}</p>
          </div>
        )}
        <img
          src={image}
          alt="image"
        />
        {right && (
          <div className="bottom-text">
            <h3>{right.heading}</h3>
            <div className="option-table">
              {right.value.map((content, index) => (
                <div key={index} className="table-container">
                  <div className="content-block-table">
                    <h3>{content.value}</h3>
                    <div className="spoon">
                      <PageHeader />
                    </div>
                    <h4>{content.text}</h4>
                  </div>
                  <div className="history-line">
                    <svg
                      viewBox="0 0 2 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Line">
                        <path
                          id="Vector 5"
                          d="M1 0V57"
                          stroke="url(#paint0_radial_572_127)"
                        />
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_572_127"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(1.5 28.5) rotate(90) scale(28.5 0.5)"
                        >
                          <stop
                            offset="0.588542"
                            stopColor="white"
                          />
                          <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
