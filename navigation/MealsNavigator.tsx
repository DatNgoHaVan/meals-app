import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen'
}

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
});

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => (
        <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.primaryColor
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo: any) => (
        <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      )
    }
  }
}

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: 'white',
      shifting: true,
      barStyle: {
        backgroundColor: Colors.primaryColor
      }
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        inactiveTintColor: Colors.accentColor,
        showIcon: true
      }
    });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
  MealFavs: {
    screen: MealsFavTabNavigator, navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
})

export default createAppContainer(MainNavigator);