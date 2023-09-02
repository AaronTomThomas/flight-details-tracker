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


const flights = ["AXM", "UAE"];


const WelcomeAL = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

  return (
    <View>
      <View style ={styles.container}>
        <Text style = {styles.userName}>
          Hey Again!
        </Text>
        <Text style = {styles.welcomeMessage}>
          Find the ICAO of your Airline
        </Text>
      </View>

      <View style = {styles.searchContainer}>
        <View style = {styles.searchWrapper}>
          <TextInput 
          style = {styles.searchInput}
          value = {searchTerm}
          onChangeText={(text)=> setSearchTerm(text)}
          placeholder = "Enter the airlines name"
          />
        </View>
        {/* <View style = {styles.searchWrapper}>
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
        </View> */}

        <TouchableOpacity style = {styles.searchBtn} onPress={handleClick}>
          <Image
          source = {icons.search}
          resizeMode='contain'
          style = {styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>
      
      {/* <View style = {styles.tabsContainer}>
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
          
      </View> */}
      

    </View>
    
  )
}

export default WelcomeAL