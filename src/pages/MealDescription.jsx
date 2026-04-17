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
      <p className="day">{mealDetail.day}</p>
      <div className="headings">
        <p>Main meal</p>
        <p>Nutrients</p>
        <p>Ads on</p>
      </div>
      <Description meal={mealDetail.breakfast} />

      <Description meal={mealDetail.lunch} />

      <Description meal={mealDetail.dinner} />

      {/* <p>ads on list goes with phots</p> */}
      <button className="back" onClick={() => navigate("/weeklyDietPlan")}>
        back
      </button>
    </>
  );
};

export default MealDescription;
