import React, {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../logic/store/store.ts";
import {fetchMovies} from "../logic/store/slices/movies-slice.ts";
import {Header} from "./Header.tsx";
import {FlatList, ScrollView, Text, View} from "react-native";
import {ImageCard} from "./ImageCard.tsx";

export const AppContainer: FC = () => {
    const dispatch = useAppDispatch()
    const {movies, status, error} = useAppSelector(state => state.movies)

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])


    useEffect(() => {
        console.log(movies)

    }, [movies])

    return (
        <View>

            {status === 'pending' ? <Text style={{textAlign: 'center'}}>Loading</Text>
                : <FlatList

                    ListHeaderComponent={<Header title="STAR GATE"/>}
                    columnWrapperStyle={{justifyContent: 'space-around'}}
                    numColumns={2}
                    data={movies}
                    renderItem={({item}) => <ImageCard data={{title: item.Title, image: item.Images[2]}}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
            }
        </View>
    )
}