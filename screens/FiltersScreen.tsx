import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const FiltersScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>
        Filters screens!
      </Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  }
})
