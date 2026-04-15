const SingleInput = ({
  title,
  type,
  state,
  setState,
  nextText = "Next",
  goToNextStep,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <input
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={goToNextStep}>{nextText}</button>
    </>
  );
};

export default SingleInput;
