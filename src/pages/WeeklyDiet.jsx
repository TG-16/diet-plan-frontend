import DailyMeals from "../components/DailyMeals";

const WeeklyDiet = ({ dietPlan, setMealDetail }) => {
  const { name, goal, height, weight } = dietPlan.profile;
  const weeklyPlan = dietPlan.diet_plan.weekly_diet_plan;

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
        return <DailyMeals
          key={dailyPlan.day}
          day={dailyPlan.day}
          breakFast={dailyPlan.breakfast}
          lunch={dailyPlan.lunch}
          dinner={dailyPlan.dinner}
          onClick={() => setMealDetail(dailyPlan)}
        />;
      })}
    </>
  );
};

export default WeeklyDiet;
