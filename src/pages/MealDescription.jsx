import { mealDetailContext } from "../services/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const MealDescription = () => {
  const { mealDetail, setMealDetail } = useContext(mealDetailContext);

  const navigate = useNavigate();

  return (
    <>
      <h2>{mealDetail.meal_type}</h2>
      {
        //must change the image dynamically later from the front end only
      }
      <div>
        <img src="favicon.ico" />
      </div>
      <div>
        <div>
          <p>{mealDetail.day}</p>
          <p>{mealDetail.day}</p>
          <p>{mealDetail.day}</p>
          <p>{mealDetail.day}</p>
        </div>
        <div>
          <p>{mealDetail.meal_type}</p>
          <p>{mealDetail.meal_type}</p>
          <p>{mealDetail.meal_type}</p>
          <p>{mealDetail.meal_type}</p>
        </div>
      </div>
      <p>ads on list goes with phots</p>
      <button onClick={() => navigate("/weeklyDietPlan")}>back</button>
    </>
  );
};

export default MealDescription;
