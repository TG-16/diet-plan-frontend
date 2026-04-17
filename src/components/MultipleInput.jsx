import "./multipleInput.css";
import { useEffect } from "react";

const MultipleChoiceInput = ({
  title,
  name,
  values,
  setState,
  nextText = "Next",
  goToNextStep,
}) => {
  useEffect(() => {
    setState(values.firstValue);
  }, []);

  return (
    <div className="singleInput">
      <h2>{title}</h2>
      <div>
        <span>
          <label htmlFor={values.firstValue}>{values.firstValue}</label>
          <input
            defaultChecked={true}
            id={values.firstValue}
            type="radio"
            name={name}
            value={values.firstValue}
            onChange={(e) => setState(e.target.value)}
          />
        </span>

        <span>
          <label htmlFor={values.secondValue}>{values.secondValue}</label>
          <input
            id={values.secondValue}
            type="radio"
            name={name}
            value={values.secondValue}
            onChange={(e) => setState(e.target.value)}
          />
        </span>

        <span>
          <label htmlFor={values.thirdValue}>{values.thirdValue}</label>
          <input
            id={values.thirdValue}
            type="radio"
            name={name}
            value={values.thirdValue}
            onChange={(e) => setState(e.target.value)}
          />
        </span>
      </div>

      <button onClick={goToNextStep}>{nextText}</button>
    </div>
  );
};

export default MultipleChoiceInput;
