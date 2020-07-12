import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MealDetailScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>
        Meal detail screens!
      </Text>
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
