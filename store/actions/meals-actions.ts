export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (id: string) => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id
  };
}