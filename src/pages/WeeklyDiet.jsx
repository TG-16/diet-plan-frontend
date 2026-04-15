import DailyMeals from "../components/DailyMeals";
import { useNavigate } from "react-router-dom";
import {
  profileContext,
  dietPlanContext,
  mealDetailContext,
} from "../services/AppContext";
import { useContext } from "react";

const WeeklyDiet = ({}) => {
  const navigate = useNavigate();

  const { profile, setProfile } = useContext(profileContext);
  const { dietPlan, setDietPlan } = useContext(dietPlanContext);
  const { mealDetail, setMealDetail } = useContext(mealDetailContext);

  const { name, goal, height, weight } = profile;
  const weeklyPlan = dietPlan.diet_plan.weekly_diet_plan;

  const handleShowDetail = (dailyPlan) => {
    navigate("/loading");
    setMealDetail(dailyPlan);
    navigate("/mealDescription");
  };

  return (
    <>
      <p>Weekly diet will be displayed along with user profile and goal</p>
      <div>
        <img src="logo512.png" />
      </div>

      <div>
        <p>{name}</p>
        <p>{goal}</p>
      </div>

      <div>
        <p>{weight}</p>
        <p>{height}</p>
      </div>

      {weeklyPlan.map((dailyPlan) => {
        return (
          <DailyMeals
            key={dailyPlan.day}
            day={dailyPlan.day}
            breakFast={dailyPlan.breakfast}
            lunch={dailyPlan.lunch}
            dinner={dailyPlan.dinner}
            onClick={() => handleShowDetail(dailyPlan)}
          />
        );
      })}
    </>
  );
};

export default WeeklyDiet;
