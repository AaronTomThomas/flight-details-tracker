import React from 'react'
import { View, Text, TouchableOpacity, FlatList} from 'react-native'

import styles from './FlightTabs.style';

import {SIZES} from '../constants'

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
    return (
      <TouchableOpacity
        style={styles.btn(name, activeTab)}
        onPress={onHandleSearchType}
      >
        <Text style={styles.btnText(name, activeTab)}>{name}</Text>
      </TouchableOpacity>
    );
  }

const FlightTabs = (tabs, activeTab, setActiveTab) => {

  console.log(tabs)
  return (
    <View style = {styles.container}>

      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      /> 
    </View>
  )
}

export default FlightTabs