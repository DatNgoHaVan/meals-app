import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoriteScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories'
    }
  },
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  }
});

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />);
      }
    },
  },
  Favorites: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo: any) => {
        return (
          <Ionicons
            name='ios-star'
            size={25}
            color={tabInfo.tintColor}
          />
        )
      }
    }
  }
}, {
  tabBarOptions: {
    inactiveTintColor: Colors.accentColor,
    showIcon: true
  }
});

export default createAppContainer(MealsFavTabNavigator);