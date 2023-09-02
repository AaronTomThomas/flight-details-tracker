import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'

import { ScreenHeaderBtn, AirlineDetailsCard} from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'

const AirlineSearch = () => {
    const params = useGlobalSearchParams();
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: 'GET',
                url: 'https://akrx.p.rapidapi.com/Airline/airlineName',
                params: {airlineName: `${params.id}`},
                headers: {
                  'X-RapidAPI-Key': '6d5962bff1msh9fce4dd7313e2b0p1a3488jsn657618e050ef',
                  'X-RapidAPI-Host': 'akrx.p.rapidapi.com'
                }
              };

            console.log("params(search-airline) " + params.id);
            const response = await axios.request(options);
            setSearchResult(response.data.airlines);
            console.log("search:" ,{searchResult})
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />


         
            
            {searchResult === undefined ? (
            <Text>No data for this airline</Text>
            ) :  searchResult.length === 0 ? (
                <Text>No flights found for this airline</Text>
            ) : (
             <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <AirlineDetailsCard
                    item = {item}
                    key={item}
                    />
                )}
                keyExtractor={(item) => item[0]}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{params.id}</Text>
                            <Text style={styles.noOfSearchedJobs}>Flights With Info</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        {/* <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity> */}
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        {/* <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity> */}
                    </View>
                )}
             /> 
            )}
        </SafeAreaView>
    )
}

export default AirlineSearch