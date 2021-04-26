import React, { useState, useEffect } from 'react';
import { StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    FlatList,
    Animated
  } from 'react-native';

import CarouselItem from './CarouselItem'

const {width , height} = Dimensions.get('window')

const Carousel = ({data}) => {

    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)

    if(data && data.length){
        return(
            <View style={styles.keysViewer}>
                <FlatList
                    data = {data}
                    keyExtractor = {(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment = 'center'
                    scrollEventThrottle = {16}
                    decelerationRate = {"fast"}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item}) => {
                        return <CarouselItem item = {item}/>
                    }}
                    onScroll = {Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}]
                    )}
                />

                <View style = {styles.dotView}>
                    {data.map((_, i) =>{
                        let opacity = position.interpolate({
                            inputRange: [i - 1 , i , i + 1],
                            outputRange: [0.3 , 1 , 0.3],
                            extrapolate: 'clamp'
                        })
                        return(
                            <Animated.View
                                key = {i}
                                style = {{opacity,
                                height: 50, width: 50,
                                backgroundColor: '#EDEDED',
                                margin: 8,
                                borderRadius:100,
                                borderWidth: 2,}}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }
    return null
}
const styles = StyleSheet.create({
    keysViewer:{
        position: 'absolute',
        top: height / 5
    },
    dotView:{
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
export default Carousel