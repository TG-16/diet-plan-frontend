import { mealDetailContext } from "../services/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Description from "../components/Description";

const MealDescription = () => {
  const { mealDetail, setMealDetail } = useContext(mealDetailContext);

  const navigate = useNavigate();

  return (
    <>
      {
        //must change the image dynamically later from the front end only
      }
      
      <Description meal={mealDetail.breakfast} />

      <p>ads on list goes with phots</p>
      <button onClick={() => navigate("/weeklyDietPlan")}>back</button>
    </>
  );
};

export default MealDescription;
