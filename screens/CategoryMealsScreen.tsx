import React from 'react'
import { StyleSheet, Text, View, Button, Platform } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealsScreen = (props: any) => {
  const catId = props.navigation.getParam('categoryId');

  const selectedCat = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>Category meal screens!</Text>
      <Text>{selectedCat?.title}</Text>
      <Button
        title='Go to the Details'
        onPress={() => { props.navigation.navigate('MealDetail'); }}
      />
      <Button
        title="Go back"
        onPress={() => { props.navigation.pop(); }}
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
    alignItems: 'center'
  }
})
