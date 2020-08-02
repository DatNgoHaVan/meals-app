import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props: any) => {
  const favMeal = MEALS.filter(meal => meal.id === 'm1')
  return (
    <MealList
      listData={favMeal}
      navigation={props.navigation}
    />
  )
}

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
}

export default FavoritesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
