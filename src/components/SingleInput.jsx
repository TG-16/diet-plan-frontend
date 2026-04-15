import "./singleInput.css";

const SingleInput = ({
  title,
  type,
  placeholderText,
  state,
  setState,
  nextText = "Next",
  goToNextStep,
}) => {
  return (
    <div className="singleInput">
      <h2>{title}</h2>
      <input
        type={type}
        placeholder={placeholderText}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={goToNextStep}>{nextText}</button>
    </div>
  );
};

export default SingleInput;
