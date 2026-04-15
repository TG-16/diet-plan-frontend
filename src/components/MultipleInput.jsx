const MultipleChoiceInput = ({
  title,
  name,
  values,
  setState,
  nextText = "Next",
  goToNextStep,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <label>{values.firstValue}</label>
      <input
        type="radio"
        name={name}
        value={values.firstValue}
        onChange={(e) => setState(e.target.value)}
      />

      <label>{values.secondValue}</label>
      <input
        type="radio"
        name={name}
        value={values.secondValue}
        onChange={(e) => setState(e.target.value)}
      />

      <label>{values.thirdValue}</label>
      <input
        type="radio"
        name={name}
        value={values.thirdValue}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={goToNextStep}>{nextText}</button>
    </>
  );
};

export default MultipleChoiceInput;
