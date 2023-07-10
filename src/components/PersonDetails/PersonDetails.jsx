import "./persondetails.css";

export default function PersonDetails({
  personName,
  personPosition,
  sign = false,
}) {
  return (
    <div className="person-details">
      <div className="person">
        <h4>{personName}</h4>
        <p className="person-position">{personPosition}</p>
      </div>
      {sign && <h2 className="sign-name">{personName}</h2>}
    </div>
  );
}
