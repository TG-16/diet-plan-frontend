import "./dailyMeal.css";

const DailyMeals = ({ day, breakFast, lunch, dinner, onClick }) => {
  return (
    <>
      <div onClick={onClick} className="dailyMeal">
        <p className="dates">{day}</p>
        <div>
          <img src="logo192.png" />
          <p>{breakFast.meal}</p>
        </div>

        <div>
          <img src="favicon.ico" />
          <p>{lunch.meal}</p>
        </div>

        <div>
          <img src="logo192.png" />
          <p>{dinner.meal}</p>
        </div>
      </div>
    </>
  );
};

export default DailyMeals;
