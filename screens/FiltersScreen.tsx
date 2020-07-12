import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FiltersScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>
        Filters screens!
      </Text>
    </View>
  )
}

export default FiltersScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
