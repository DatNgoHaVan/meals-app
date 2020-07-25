import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import Colors from '../constants/Colors';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = (props: any) => {
  const renderGridItem = (itemData: any) => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    )
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
})
