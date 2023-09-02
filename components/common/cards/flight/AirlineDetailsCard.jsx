import React from 'react'
import { useState } from 'react'
import { View, Text, Image, ClipboardStatic} from 'react-native'

import {icons, SIZES} from '../../../../constants'

import styles from './FlightDetailsCard.style'
import { TouchableOpacity} from 'react-native-gesture-handler'



const AirlineDetailsCard = ({item}) => {
  const [clippedText, setClippedText] = useState('');
  return (
    <View>

    <TouchableOpacity
    style = {styles.container}
    onPress = {()=>{
    }}>
        <TouchableOpacity style = {styles.logoContainer}>
            <Image
            source = {icons.planeIcon}
            style = {styles.logoImage }
            resizeMode ="contain"/>

        </TouchableOpacity>

        <Text style = {styles.jobName}>{item.airlineName}</Text>
        <Text sx={{ textTransform: 'uppercase' }} style = {styles.jobType}>{item.icao}</Text>


    </TouchableOpacity>
    <Text sx={{ textTransform: 'uppercase' }} style = {styles.jobType}>(click to copy icao to clipboard)</Text>

    </View>

    
  )
}

export default AirlineDetailsCard