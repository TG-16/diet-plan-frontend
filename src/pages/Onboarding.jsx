import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { profileContext, dietPlanContext } from "../services/AppContext";

import SingleInput from "../components/SingleInput";
import MultipleChoiceInput from "../components/MultipleInput";
import { onboard } from "../services/apiCalles";

const OnBoarding = () => {
  const navigate = useNavigate();

  const { profile, setProfile } = useContext(profileContext);
  const { dietPlan, setDietPlan } = useContext(dietPlanContext);

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem("dietPlan", JSON.stringify(dietPlan));
  }, [dietPlan]);

  const [next, setNext] = useState(1);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("");
  const [activity, setActivity] = useState("");

  const goToNextStep = () => setNext(next + 1);

  const handleSubmit = async () => {
    goToNextStep();
    navigate("/loading");
    const recivedDietPlane = await onboard({
      name,
      height,
      weight,
      goal,
      activity,
    });

    setProfile({ name, height, weight, goal });
    setDietPlan(recivedDietPlane);

    navigate("/weeklyDietPlan");
  };

  return (
    <div className="onboarding">
      {next === 1 && (
        <SingleInput
          title={"Name"}
          type={"text"}
          placeholderText={"Abebe"}
          state={name}
          setState={setName}
          goToNextStep={goToNextStep}
        />
      )}
      {next === 2 && (
        <SingleInput
          title={"Weight"}
          type={"number"}
          placeholderText={"64 Kg"}
          state={weight}
          setState={setWeight}
          goToNextStep={goToNextStep}
        />
      )}
      {next === 3 && (
        <SingleInput
          title={"Height"}
          type={"number"}
          placeholderText={"170 Cm"}
          state={height}
          setState={setHeight}
          goToNextStep={goToNextStep}
        />
      )}
      {next === 4 && (
        <MultipleChoiceInput
          title={"Goal"}
          name={"goal"}
          values={{
            firstValue: "Increase Weight",
            secondValue: "Maintain",
            thirdValue: "Decrese Weight",
          }}
          setState={setGoal}
          goToNextStep={goToNextStep}
        />
      )}
      {next === 5 && (
        <MultipleChoiceInput
          title={"Activity Type"}
          name={"activity"}
          values={{
            firstValue: "Super Active",
            secondValue: "Active",
            thirdValue: "Mildly Active",
          }}
          setState={setActivity}
          goToNextStep={handleSubmit}
          nextText="Finish"
        />
      )}
    </div>
  );
};

export default OnBoarding;
