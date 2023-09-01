import React from 'react'
import { useState } from 'react';
import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, Image} from 'react-native';

import {Stack, useRouter, useGlobalSearchParams, useSearchParams} from 'expo-router'

import { ScreenHeaderBtn } from '../../components';
import {COLORS, icons, SIZES} from '../../constants'

import useFetch from '../../hook/useFetch'
import FlightInfoTitle from '../../components/FlightInfoTitle';

import FlightTabs from '../../components/FlightTabs'


import styles from '../../components/FlightInfoTitle.style'

const tabs = ["Status", "Journey"]



const FlightInfo = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();


  const onRefresh = () => {

  }

  console.log(params.id)
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const {data, isLoading, error, refetch} = useFetch('detail',{
    flight: params.id
  })



  return (
    <SafeAreaView style = {{
        flex:1,
        backgroundColor: COLORS.lightWhite
    }}>
        <Stack.Screen
            options = {{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension="60%"
                        handlePress={()=>router.back()}
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn
                        iconUrl = {icons.share}
                        dimension= "60%"
                    />
                ),
                headerTitle: ""
                
            }}
        />

        <>
            <ScrollView showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing = {refreshing} onRefresh={onRefresh}/>}>
                {isLoading ? (
                    <ActivityIndicator size = "large" color= {COLORS.primary}/>
                ) : error ? (
                    <Text> Something Went Wrong </Text>
                ) : data.length === 0 ? (
                    <Text>No data</Text>
                ) : (
                    <View style = {{padding: SIZES.medium, paddingBottom: 100}}>
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                                            
                            <View style = {styles.container}>
                                <View style = {styles.logoBox}>
                                    <Image
                                        source = {icons.planeIcon}
                                        style = {styles.logoImage}
                                    />

                                </View>
                                <View>
                                    <Text style = {styles.jobTitle}>
                                        {data.airline.name}
                                    </Text>
                                 </View>
                                 <View style = {styles.companyInfoBox}>
                                    <Text style = {styles.companyName}>
                                        {data.aircraft.model.text} 
                                    </Text>
                                  
                                 </View>
 
                                    
                            </View>


                        </View>


                        <FlightTabs
                            tabs = {tabs}
                            activeTab = {activeTab}
                            setActiveTab = {setActiveTab}/>
                    </View>
                )}
            </ScrollView>
    
        </>

    
    </SafeAreaView>
  )
}

export default FlightInfo