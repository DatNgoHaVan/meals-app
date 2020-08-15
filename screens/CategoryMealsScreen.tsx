import React from 'react'
import { StyleSheet, Text, View, Button, Platform, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { ICategoryState } from '../store/reducers/meals';

const CategoryMealsScreen = (props: any) => {

  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter((meal: any) => meal.categoryIds.indexOf(catId) >= 0);

  return (
    <MealList
      listData={displayedMeals}
      navigation={props.navigation}
    />
  )
}

export default CategoryMealsScreen;

CategoryMealsScreen.navigationOptions = (navigationData: any) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCat = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCat?.title,
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
})
