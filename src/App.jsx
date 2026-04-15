import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  profileContext,
  dietPlanContext,
  mealDetailContext,
} from "./services/AppContext";
import "./App.css";
import OnBoarding from "./pages/Onboarding";
import WeeklyDiet from "./pages/WeeklyDiet";
import Loading from "./pages/Loading";
import MealDescription from "./pages/MealDescription";

function App() {
  const populate = (state) => {
    const saved = localStorage.getItem(state);
    return saved ? JSON.parse(saved) : {};
  };

  const [profile, setProfile] = useState(populate("profile"));
  const [dietPlan, setDietPlan] = useState(populate("dietPlan"));
  const [mealDetail, setMealDetail] = useState({});

  return (
    <dietPlanContext.Provider value={{ dietPlan, setDietPlan }}>
      <mealDetailContext.Provider value={{ mealDetail, setMealDetail }}>
        <profileContext.Provider value={{ profile, setProfile }}>
          <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<OnBoarding />} />
                <Route path="/weeklyDietPlan" element={<WeeklyDiet />} />
                <Route path="/mealDescription" element={<MealDescription />} />
                <Route path="/loading" element={<Loading />} />
              </Routes>
            </BrowserRouter>

            {/* {console.log(mealDetail)}
      {isLoading === true && <Loading />}
      {dietPlan === null && (
        <OnBoarding setIsLoading={setIsLoading} setDietPlane={setDietPlane} />
      )}

      {dietPlan !== null && isLoading === false &&  mealDetail === null && (
        <WeeklyDiet dietPlan={dietPlan} setMealDetail={setMealDetail} />
      )}

      {mealDetail !== null && <MealDescription  mealDetail={mealDetail} setMealDetailNull={() => setDietPlane(null)} />} */}
          </div>
        </profileContext.Provider>
      </mealDetailContext.Provider>
    </dietPlanContext.Provider>
  );
}

export default App;
