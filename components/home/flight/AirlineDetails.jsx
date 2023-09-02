import React from 'react'
import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import {useRouter} from 'expo-router'

import styles from './flightDetails.style';
import {COLORS, SIZES} from '../../../constants'

import FlightDetailsCard from '../../common/cards/flight/FlightDetailsCard';
import useFetch from '../../../hook/useFetch';

const AirlineDetails = () => {

  const router = useRouter();
  
//   const {data, isLoading, error} = useFetch(
//     'list-by-airline', {
//       airline: ""
//   })




  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Airline Details</Text>
        <TouchableOpacity onPress = {() => {
                            router.back()
                        }}>
          <Text style = {styles.headerBtn}>
          Find Plane by Airline
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style = {styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size = "large"/>
          ) : error ? (
            <Text> Something Went Wrong</Text>
          ) : (
            data?.map((item) => (
              <FlightDetailsCard
                item = {item}
                key={`${item[0]}`}
              />
            ))

          )}
      </View> */}

    </View>
  )
}

export default AirlineDetails