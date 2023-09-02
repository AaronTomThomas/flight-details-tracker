import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'
import { Text, ScrollView, SafeAreaView} from 'react-native';
import axios from 'axios'

import {ScreenHeaderBtn, WelcomeAL, FlightDetails, AirlineDetails} from '../../components';
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'

const FlightSearch = () => {

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
      <SafeAreaView style = {{flex:1, backgroundColor: COLORS.lightWhite}}>
          <Stack.Screen
              options = {{
                  headerStyle: {backgroundColor: COLORS.lightWhite},
                  headerShadowVisible: false,
                  headerLeft: () => (
                    <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension='60%'
                    handlePress={() => router.back()}
                  />
                  ),
                  // headerRight:() => (
                  //     <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%"/>
                  // ),
                  headerTitle: ""
              }}
          />

          <ScrollView showsVerticalScrollIndicator = {false}>
              <View
                  style = {{
                      flex: 1,
                      padding: SIZES.medium,
                      justifyContent: "space-between"
                  }}>
                  <WelcomeAL
                  searchTerm = {searchTerm}
                  setSearchTerm = {setSearchTerm}
                  handleClick={()=> {
                      if (searchTerm) {
                          console.log("SEARCHTERM" + searchTerm)
                          router.push(`/search-airline/${searchTerm}`)
                      } else {
                          console.log("no search term")
                      }
                  }}/>

                  <AirlineDetails/>

              </View>

          </ScrollView>
      </SafeAreaView>
  )
}

export default FlightSearch