import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'

const FilterSwitch = (props: any) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor, false: '' }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : 'white'}
        value={props.isGlutenFree}
        onValueChange={newValue => props.setIsGlutenFree(newValue)}
      />
    </View>
  )
}

const FiltersScreen = (props: any) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        Available Filters/ Restrictions
      </Text>
      <FilterSwitch
        label='Gluten-free'
        isGlutenFree={isGlutenFree}
        setIsGlutenFree={setIsGlutenFree}
      />
      <FilterSwitch
        label='Lactose-free'
        isGlutenFree={isLactoseFree}
        setIsGlutenFree={setIsLactoseFree}
      />
      <FilterSwitch
        label='Vegan-free'
        isGlutenFree={isVegan}
        setIsGlutenFree={setIsVegan}
      />
      <FilterSwitch
        label='Vegetarian-free'
        isGlutenFree={isVegetarian}
        setIsGlutenFree={setIsVegetarian}
      />
    </View>
  )
}

FiltersScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: 'Filter Meals',
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

export default FiltersScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  }
})
