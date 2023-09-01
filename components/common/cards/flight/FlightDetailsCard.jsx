import React from 'react'
import { View, Text, Image } from 'react-native'

import {icons, SIZES} from '../../../../constants'

import styles from './FlightDetailsCard.style'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FlightDetailsCard = ({item, handleCardPress}) => {
  return (
    <TouchableOpacity
    style = {styles.container}
    onPress = {()=>handleCardPress(item)}>
        <TouchableOpacity style = {styles.logoContainer}>
            <Image
            source = {icons.planeIcon}
            style = {styles.logoImage }
            resizeMode ="contain"/>

        </TouchableOpacity>

        <Text style = {styles.jobName}>{item[14]}</Text>
        <Text sx={{ textTransform: 'uppercase' }} style = {styles.jobType}>{item[19]}</Text>

    </TouchableOpacity>
  )
}

export default FlightDetailsCard