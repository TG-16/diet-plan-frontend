import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { profileContext, dietPlanContext } from "../services/AppContext";

import SingleInput from "../components/SingleInput";
import MultipleChoiceInput from "../components/MultipleInput";
import { onboard } from "../services/apiCalles";

const OnBoarding = ({ setIsLoading }) => {
  const navigate = useNavigate();

  const { profile, setProfile } = useContext(profileContext);
  const { dietPlan, setDietPlan } = useContext(dietPlanContext);

  const [next, setNext] = useState(1);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [goal, setGoal] = useState("");
  const [activity, setActivity] = useState("");

  const goToNextStep = () => setNext(next + 1);

  useEffect(() => {
    console.log("Updated profile:", dietPlan);
  }, [dietPlan]);

  const handleSubmit = async () => {
    goToNextStep();
    // setIsLoading(true);
    const recivedDietPlane = await onboard({
      name,
      height,
      weight,
      goal,
      activity,
    });

    setProfile({ name, height, weight, goal });
    setDietPlan(recivedDietPlane);

    // setIsLoading(false);
    navigate("/weeklyDietPlan");
  };

  return (
    <div>
      {next === 1 && (
        <SingleInput
          title={"Name"}
          type={"text"}
          state={name}
          setState={setName}
          goToNextStep={goToNextStep}
        />
      )}
      {next === 2 && (
        <SingleInput
          title={"Weight"}
          type={"number"}
          state={weight}
          setState={setWeight}
          goToNextStep={goToNextStep}
        />
      )}
      {next === 3 && (
        <SingleInput
          title={"Height"}
          type={"number"}
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

      <p>Name: {name}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      <p>Goal: {goal}</p>
      <p>Activity: {activity}</p>
    </div>
  );
};

export default OnBoarding;
