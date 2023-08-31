import React from 'react'
import {useState} from 'react'
import { 
  View,     
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

import {useRouter} from 'expo-router'

import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'


const flights = ["Flights"];


const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style ={styles.container}>
        <Text style = {styles.userName}>
          Hello Aaron
        </Text>
        <Text style = {styles.welcomeMessage}>
          Find Your Flight
        </Text>
      </View>

      <View style = {styles.searchContainer}>
        <View style = {styles.searchWrapper}>
          <TextInput 
          style = {styles.searchInput}
          value = ""
          onChange={()=> {}}
          placeholder = "Departure"
          />
        </View>
        <View style = {styles.searchWrapper}>
          <TextInput 
          style = {styles.searchInput}
          value = ""
          onChange={()=> {}}
          placeholder = "Arrival"
          />
        </View>
        <View style = {styles.searchWrapper}>
          <TextInput 
          style = {styles.searchInput}
          value = ""
          onChange={()=> {}}
          placeholder = "YYYYMMDD"
          />
        </View>

        <TouchableOpacity style = {styles.searchBtn} onPress={()=> {}}>
          <Image
          source = {icons.search}
          resizeMode='contain'
          style = {styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>
      
      <View style = {styles.tabsContainer}>
        <FlatList data={flights}
          renderItem={({item}) => (
            <TouchableOpacity 
            style={styles.tab()}
            onPress={()=>{
              router.push(`/search/${item}`)
            }}>
              <Text style = {styles.tabText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{
            columnGap: SIZES.small
          }}
          horizontal
          />
          
      </View>
      

    </View>
    
  )
}

export default Welcome