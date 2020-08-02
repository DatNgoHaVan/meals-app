import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors';

const CustomHeaderButton = (props: any) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  )
}

export default CustomHeaderButton

const styles = StyleSheet.create({})
