import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { profileContext, dietPlanContext } from "./services/AppContext";
import "./App.css";
import OnBoarding from "./pages/Onboarding";
import WeeklyDiet from "./pages/WeeklyDiet";
import Loading from "./pages/Loading";
import MealDescription from "./pages/MealDescription";

function App() {
  // const loadingContext = createContext();

  const [isLoading, setIsLoading] = useState(false);
  const [dietPlan, setDietPlan] = useState({});
  const [profile, setProfile] = useState({});
  return (
    <dietPlanContext.Provider value={{ dietPlan, setDietPlan }}>
      <profileContext.Provider value={{ profile, setProfile }}>

          <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<OnBoarding />} />
                <Route path="/weeklyDietPlan" element={<WeeklyDiet />} />
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
    </dietPlanContext.Provider>
  );
}

export default App;
