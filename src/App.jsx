import { useState } from "react";
import "./App.css";
import OnBoarding from "./pages/Onboarding";
import WeeklyDiet from "./pages/WeeklyDiet";
import Loading from "./pages/Loading";
import MealDescription from "./pages/MealDescription";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [dietPlan, setDietPlane] = useState(null);
  const [mealDetail, setMealDetail] = useState(null);
  return (
    <div className="App">
      {console.log(mealDetail)}
      {isLoading === true && <Loading />}
      {dietPlan === null && (
        <OnBoarding setIsLoading={setIsLoading} setDietPlane={setDietPlane} />
      )}

      {dietPlan !== null && isLoading === false &&  mealDetail === null && (
        <WeeklyDiet dietPlan={dietPlan} setMealDetail={setMealDetail} />
      )}

      {mealDetail !== null && <MealDescription  mealDetail={mealDetail} setMealDetailNull={() => setDietPlane(null)} />}
    </div>
  );
}

export default App;
