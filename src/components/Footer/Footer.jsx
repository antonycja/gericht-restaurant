import "./footer.css";
export default function Footer({footerTextHeading, footerText1, footerText2}) {
  return (
    <>
      <div className="footer-info">
        <div className="footer-heading">
          <h4>{footerTextHeading}</h4>
        </div>
        <div className="footer-text-line">
          <p>{footerText1}</p>
          <p>{footerText2}</p>
        </div>
      </div>
    </>
  );
}
