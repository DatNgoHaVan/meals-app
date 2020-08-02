import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import MealItem from './MealItem';

const MealList = (props: any) => {
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
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
})
