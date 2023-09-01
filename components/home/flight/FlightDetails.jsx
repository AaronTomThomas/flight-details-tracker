import React from 'react'
import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import {useRouter} from 'expo-router'

import styles from './flightDetails.style';
import {COLORS, SIZES} from '../../../constants'

import FlightDetailsCard from '../../common/cards/flight/FlightDetailsCard';
import useFetch from '../../../hook/useFetch';

const FlightDetails = () => {

  const router = useRouter();
  
  const {data, isLoading, error} = useFetch(
    'list-by-airline', {
      airline: 'UAE'
  })

  console.log(data);



  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Flight Details</Text>
        <TouchableOpacity>
          <Text style = {styles.headerBtn}>
          Show All
          </Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size = "large"/>
          ) : error ? (
            <Text> Something Went Wrong</Text>
          ) : (
            data?.map((item) => (
              <FlightDetailsCard
                item = {item}
              />
            ))

          )}
      </View>

    </View>
  )
}

export default FlightDetails