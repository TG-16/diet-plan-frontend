import "./description.css";

const Description = ({ meal }) => {
  return (
    <div className="description">
      <div>
        <img src="logo512.png" alt="logo512.png" />
        <p>{meal.meal}</p>
      </div>

      <div>
        <p>Protien: {meal.calorie.protien}</p>
        <p>Fat: {meal.calorie.fat}</p>
        <p>carb: {meal.calorie.carb}</p>
      </div>

      {meal.ads_on.map((ads) => {
        return (
          <span>
            <img src="logo512.png" />
            <p>{ads}</p>
          </span>
        );
      })}
    </div>
  );
};

export default Description;
