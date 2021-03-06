import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';

const FavoritesScreen = (props: any) => {

  const favMeal = useSelector(state => state.meals.favoriteMeals);

  return (
    <MealList
      listData={favMeal}
      navigation={props.navigation}
    />
  )
}

FavoritesScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
        <Item
          title="Menu"
          iconName='ios-menu'
          onPress={() => { navData.navigation.toggleDrawer() }}
        />
      </HeaderButtons>
    )
  }
}

export default FavoritesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
