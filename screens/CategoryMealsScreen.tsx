import React from 'react'
import { StyleSheet, Text, View, Button, Platform, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props: any) => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  const renderMealItem = (itemData: any) => (
    <MealItem
      title={itemData.item.title}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      image={itemData.item.imageUrl}
      onSelectMeal={() => {
        props.navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: itemData.item.id
          }
        })
      }}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
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
