import Button from "../Button";
import "./newsletter.css";
import { useState } from "react";
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert(`${email} submitted, congratulations`);
      setEmail("");
    } else alert(`${email} is not valid!`);
  };
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };
  return (
    <>
      <form
        className="newsletter-form-box"
        onSubmit={handleSubmit}
      >
        <div className="email-input">
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="newsletter-btn">
          <Button text={"Submit"} />
        </div>
      </form>
    </>
  );
}
