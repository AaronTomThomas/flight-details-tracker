import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './FlightDetailsCard.style'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FlightDetailsCard = ({item, handleCardPress}) => {
  return (
    <TouchableOpacity
    style = {styles.container}
    onPress = {()=>handleCardPress(item)}>
        <TouchableOpacity style = {styles.logoContainer}>
            <Image
            style = {styles.logoImage }
            resizeMode ="contain"/>

        </TouchableOpacity>

        <Text>{item}</Text>

    </TouchableOpacity>
  )
}

export default FlightDetailsCard