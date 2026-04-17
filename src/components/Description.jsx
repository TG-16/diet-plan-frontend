import "./description.css";

const Description = ({ meal }) => {
  return (
    <>
      <div className="description">
        <div className="mainMeal">
          <img src="logo512.png" alt="logo512.png" />
          <p>
            <b>{meal.meal}</b>
          </p>
        </div>

        <div className="calories">
          <p>
            Protien: <b>{meal.calorie.protien}g</b>
          </p>
          <p>
            Fat: <b>{meal.calorie.fat}g</b>
          </p>
          <p>
            carb: <b>{meal.calorie.carb}g</b>
          </p>
        </div>

        <div className="ads">
          {meal.ads_on.map((ads) => {
            return (
              <span>
                <img src="logo512.png" />
                <p>{ads}</p>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Description;
