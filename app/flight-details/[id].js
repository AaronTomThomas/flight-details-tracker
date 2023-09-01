import React from 'react'
import { useState } from 'react';
import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, Image} from 'react-native';

import {Stack, useRouter, useGlobalSearchParams, useSearchParams} from 'expo-router'

import { ScreenHeaderBtn } from '../../components';
import {COLORS, icons, SIZES} from '../../constants'

import useFetch from '../../hook/useFetch'

import FlightTabs from '../../components/FlightTabs'


import styles from '../../components/FlightInfoTitle.style'

const tabs = ["Status", "Journey"]



const FlightInfo = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();


  const onRefresh = () => {

  }

  const displayTabContent = () => {
    switch (activeTab) {
        case "Status":
            return (
                <View style = {styles.pcontainer}>
                    <Text style = {styles.title}>Status:</Text>

                    <View style = {styles.pointsContainer}>
                        <View style = {styles.pointWrapper}>
                            <View style = {styles.pointDot}/>
                            <Text style = {styles.pointText}>Live:   {JSON.stringify(data.status.live)}</Text>

                        </View>
                        <View style = {styles.pointWrapper}>
                            <View style = {styles.pointDot}/>
                            <Text style = {styles.pointText}>Arrival: {data.status.text}</Text>

                        </View>


                        <View style = {styles.pointWrapper}>
                            <View style = {styles.pointDot}/>
                            <Text style = {styles.pointText}>Flight-Time (s): {data.time.historical.flighttime}</Text>
                        </View>


                    </View>

                </View>
            )
            break;
        case "Journey":
            return (
                <View style = {styles.pcontainer}>
                    <Text style = {styles.title}>Journey:</Text>

                    <View style = {styles.pointsContainer}>
                       
                        <View style = {styles.pointWrapper}>
                            <View style = {styles.pointDot}/>
                            <Text style = {styles.pointText}>IATA (airport dep): {data.airport.origin.code.iata}</Text>

                        </View>
                        <View style = {styles.pointWrapper}>
                            <View style = {styles.pointDot}/>
                            <Text style = {styles.pointText}>IATA (airport arr): {data.airport.destination.code.iata}</Text>

                        </View>
                        <View style = {styles.pointWrapper}>
                            <View style = {styles.pointDot}/>
                            <Text style = {styles.pointText}>Departing From: {data.airport.origin.name}</Text>

                        </View>
                        <View style = {styles.pointWrapper}>
                            <View style = {styles.pointDot}/>
                            <Text style = {styles.pointText}>Timezone: {data.airport.origin.timezone.name}</Text>

                        </View>
                        <View style = {styles.pointWrapper}>
                            <View style = {styles.pointDot}/>
                            <Text style = {styles.pointText}>Arriving At: {data.airport.destination.name}</Text>

                        </View>
                        <View style = {styles.pointWrapper}>
                            <View style = {styles.pointDot}/>
                            <Text style = {styles.pointText}>Timezone: {data.airport.destination.timezone.name}</Text>

                        </View>
                        


                        <View style = {styles.pointWrapper}>
                            <View style = {styles.pointDot}/>
                            <Text style = {styles.pointText}>IATA (airline): {data.airline.code.iata}</Text>

                        </View>
                        <View style = {styles.pointWrapper}>
                            <View style = {styles.pointDot}/>
                            <Text style = {styles.pointText}>ICAO (airline): {data.airline.code.icao}</Text>

                        </View>


                    </View>

                </View>
            )
            break;
    }
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

                        {displayTabContent()}
                    </View>
                )}
            </ScrollView>
    
        </>

    
    </SafeAreaView>
  )
}

export default FlightInfo