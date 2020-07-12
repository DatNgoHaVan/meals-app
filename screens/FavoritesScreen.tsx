import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FavoriteScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>
        Favorite screens!
      </Text>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
