import React from 'react'
import { View, Text, Image} from 'react-native'

import styles from './FlightInfoTitle.style'
import {icons} from '../constants'


const FlightInfoTitle = (airlinename) => {
  return (
    <View style = {styles.container}>
        <View style = {styles.logoBox}>
            <Image
            source = {icons.planeIcon}
            style = {styles.logoImage}
            />

        </View>
        <View>
            <Text style = {styles.jobTitle}>
                {airlinename}
            </Text>
        </View>
        
        </View>
  )
}

export default FlightInfoTitle