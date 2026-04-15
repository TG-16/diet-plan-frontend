const DailyMeals = ({ day, breakFast, lunch, dinner, onClick }) => {

  return (
    <>
      <div onClick={onClick}>
        <div>
          <img src="favicon.ico" />
          <p>{breakFast.meal}</p>
        </div>

        <div>
          <img src="favicon.ico" />
          <p>{lunch.meal}</p>
        </div>

        <div>
          <img src="favicon.ico" />
          <p>{dinner.meal}</p>
        </div>
      </div>
    </>
  );
};

export default DailyMeals;
