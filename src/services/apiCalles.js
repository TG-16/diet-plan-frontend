const BASE_URL = "diet.alphafreshmanexam.com";

export const onboard = async ({ name, height, weight, goal, activity }) => {
  //   const response = await fetch(`${BASE_URL}/regiseter`, {
  //     name,
  //     height,
  //     weight,
  //     goal,
  //     activity,
  //   });
  //   const result = await response.json();
  //   return result;

  return {
    profile: {
      name,
      goal,
      height,
      weight,
    },
    diet_plan: {
      weekly_diet_plan: [
        {
          day: "Monday",
          breakfast: { meal: "rice", ads_on: ["egg", "yogurt"], meal_type: "breakfast" },
          lunch: { meal: "lentis", ads_on: ["milk"] , meal_type: "lunch"},
          dinner: { meal: "shiro", ads_on: ["milk", "egg"], meal_type: "dinner" },
        },
        {
          day: "Tuesday",
          breakfast: { meal: "rice", ads_on: ["egg", "yogurt"], meal_type: "breakfast" },
          lunch: { meal: "lentis", ads_on: ["milk"], meal_type: "lunch" },
          dinner: { meal: "shiro", ads_on: ["milk", "egg"] , meal_type: "dinner"},
        },
        {
          day: "Wednesday",
          breakfast: { meal: "rice", ads_on: ["egg", "yogurt"], meal_type: "breakfast" },
          lunch: { meal: "lentis", ads_on: ["milk"], meal_type: "lunch" },
          dinner: { meal: "shiro", ads_on: ["milk", "egg"], meal_type: "dinner" },
        },
        {
          day: "Thursday",
          breakfast: { meal: "rice", ads_on: ["egg", "yogurt"], meal_type: "breakfast" },
          lunch: { meal: "lentis", ads_on: ["milk"], meal_type: "lunch" },
          dinner: { meal: "shiro", ads_on: ["milk", "egg"], meal_type: "dinner" },
        },
        {
          day: "Frieday",
          breakfast: { meal: "rice", ads_on: ["egg", "yogurt"], meal_type: "breakfast" },
          lunch: { meal: "lentis", ads_on: ["milk"], meal_type: "lunch" },
          dinner: { meal: "shiro", ads_on: ["milk", "egg"], meal_type: "dinner" },
        },
        {
          day: "Saturday",
          breakfast: { meal: "rice", ads_on: ["egg", "yogurt"], meal_type: "breakfast" },
          lunch: { meal: "lentis", ads_on: ["milk"], meal_type: "lunch" },
          dinner: { meal: "shiro", ads_on: ["milk", "egg"], meal_type: "dinner" },
        },
        {
          day: "Sunday",
          breakfast: { meal: "rice", ads_on: ["egg", "yogurt"], meal_type: "breakfast" },
          lunch: { meal: "lentis", ads_on: ["milk"], meal_type: "lunch" },
          dinner: { meal: "shiro", ads_on: ["milk", "egg"], meal_type: "dinner" },
        },
      ],
    },
    water: "2 Litter",
  };
};
