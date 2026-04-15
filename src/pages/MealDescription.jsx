const MealDescription = () => {
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
          <p>{mealDetail.meal}</p>
          <p>{mealDetail.meal}</p>
          <p>{mealDetail.meal}</p>
          <p>{mealDetail.meal}</p>
        </div>
        <div>
          <p>{mealDetail.meal_type}</p>
          <p>{mealDetail.meal_type}</p>
          <p>{mealDetail.meal_type}</p>
          <p>{mealDetail.meal_type}</p>
        </div>
      </div>
      <p>ads on list goes with phots</p>
      <button onClick={setMealDetailNull}>back</button>
    </>
  );
};

export default MealDescription;
