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
          breakfast: {
            meal: "rice",
            ads_on: ["egg", "yogurt"],
            meal_type: "breakfast",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
          lunch: {
            meal: "lentis",
            ads_on: ["milk"],
            meal_type: "lunch",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
          dinner: {
            meal: "shiro",
            ads_on: ["milk", "egg"],
            meal_type: "dinner",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
        },
        {
          day: "Tuesday",
          breakfast: {
            meal: "rice",
            ads_on: ["egg", "yogurt"],
            meal_type: "breakfast",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
          lunch: {
            meal: "lentis",
            ads_on: ["milk"],
            meal_type: "lunch",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
          dinner: {
            meal: "shiro",
            ads_on: ["milk", "egg"],
            meal_type: "dinner",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
        },
        {
          day: "Wednesday",
          breakfast: {
            meal: "rice",
            ads_on: ["egg", "yogurt"],
            meal_type: "breakfast",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
          lunch: {
            meal: "lentis",
            ads_on: ["milk"],
            meal_type: "lunch",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
          dinner: {
            meal: "shiro",
            ads_on: ["milk", "egg"],
            meal_type: "dinner",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
        },
        {
          day: "Thursday",
          breakfast: {
            meal: "rice",
            ads_on: ["egg", "yogurt"],
            meal_type: "breakfast",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
          lunch: {
            meal: "lentis",
            ads_on: ["milk"],
            meal_type: "lunch",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
          dinner: {
            meal: "shiro",
            ads_on: ["milk", "egg"],
            meal_type: "dinner",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
        },
        {
          day: "Frieday",
          breakfast: {
            meal: "rice",
            ads_on: ["egg", "yogurt"],
            meal_type: "breakfast",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
          lunch: { meal: "lentis", ads_on: ["milk"], meal_type: "lunch", calorie: { fat: 23, carb: 110, protien: 11 }, },
          dinner: {
            meal: "shiro",
            ads_on: ["milk", "egg"],
            meal_type: "dinner",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
        },
        {
          day: "Saturday",
          breakfast: {
            meal: "rice",
            ads_on: ["egg", "yogurt"],
            meal_type: "breakfast",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
          lunch: { meal: "lentis", ads_on: ["milk"], meal_type: "lunch",calorie: { fat: 23, carb: 110, protien: 11 }, },
          dinner: {
            meal: "shiro",
            ads_on: ["milk", "egg"],
            meal_type: "dinner",calorie: { fat: 23, carb: 110, protien: 11 },
          },
        },
        {
          day: "Sunday",
          breakfast: {
            meal: "rice",
            ads_on: ["egg", "yogurt"],
            meal_type: "breakfast",calorie: { fat: 23, carb: 110, protien: 11 },
          },
          lunch: { meal: "lentis", ads_on: ["milk"], meal_type: "lunch", calorie: { fat: 23, carb: 110, protien: 11 }, },
          dinner: {
            meal: "shiro",
            ads_on: ["milk", "egg"],
            meal_type: "dinner",
            calorie: { fat: 23, carb: 110, protien: 11 },
          },
        },
      ],
    },
    water: "2 Litter",
  };
};
