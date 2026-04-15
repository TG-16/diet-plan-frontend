import DailyMeals from "../components/DailyMeals";
import { useNavigate } from "react-router-dom";
import {
  profileContext,
  dietPlanContext,
  mealDetailContext,
} from "../services/AppContext";
import { useContext } from "react";
import "./weeklyDiet.css";

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
    <div className="weeklyDiet">
      <div className="profilePic">
        <img src="logo512.png" />
      </div>

      <div className="profile">
        <div>
          <p>Name: <i> {profile.name}</i></p>
          <p>Goal: <b>{profile.goal}</b></p>
        </div>

        <div>
          <p>Weight: <i>{profile.weight} Kg</i></p>
          <p>Height: <i>{profile.height} Cm</i></p>
        </div>
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
    </div>
  );
};

export default WeeklyDiet;
