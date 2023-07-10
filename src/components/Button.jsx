import "./button.css";
export default function Button({ text, btnClick }) {
  return (
    <button
      onClick={btnClick}
      className="btn-component"
    >
      {text}
    </button>
  );
}
