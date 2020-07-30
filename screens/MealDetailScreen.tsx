import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = (props: any) => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>
        {selectedMeal?.title}
      </Text>
      <Button title="Go back to Categories" onPress={() => {
        props.navigation.popToTop();
      }} />
    </View>
  )
}

MealDetailScreen.navigationOptions = (navigationData: any) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal?.title
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
