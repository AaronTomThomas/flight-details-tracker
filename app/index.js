
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import { useState } from 'react';

import {Stack, useRouter} from 'expo-router';

import { COLORS, icons, images, SIZES} from '../constants';
import {ScreenHeaderBtn, Welcome, FlightDetails} from '../components';



const Home = () => {

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
                        dimension="60%"
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
                    <Welcome
                    searchTerm = {searchTerm}
                    setSearchTerm = {setSearchTerm}
                    handleClick={()=> {
                        if (searchTerm) {
                            console.log("SEARCHTERM" + searchTerm)
                            router.push(`/search-airline/${searchTerm}`)
                        } else {
                            console.log("L")
                        }
                    }}/>

                    <FlightDetails/>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;