import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const MealDetailScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>
        Meal detail screens!
      </Text>
      <Button title="Go back to Categories" onPress={() => {
        props.navigation.popToTop();
      }} />
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
