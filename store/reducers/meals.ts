import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals-actions";
import Meal from "../../models/meal";

export interface ICategoryState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: any[];
}

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
}

const mealsReducer = (state: ICategoryState = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex((meal: any) => meal.id === action.mealId);
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
      }
    default:
      return state;
  }
}

export default mealsReducer;