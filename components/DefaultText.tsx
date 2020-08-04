import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DefaultText = (props: any) => {
  return (
    <Text style={styles.text}>{props.children}</Text>
  )
}

export default DefaultText

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans'
  }
})
