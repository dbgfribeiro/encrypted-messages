import React from 'react';
import { StyleSheet,
    View,
    Text,
    Image,
    Dimensions
  } from 'react-native';


const {width , height} = Dimensions.get('window')

const CarouselItem = ({item}) => {
    return(
        <View style={styles.cardView}>
            <Image style={styles.image} source={{uri: item.url}}/>
            <View style={styles.textView}>
                <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cardView:{
        flex: 1,
        margin: 20,
        borderRadius: 1000,
        width: 375,
        height: 375,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(237,237,237,0.2)",
    },
    textView:{
        position: 'absolute',
        bottom: -30,
        margin: 10,
    },
    image:{
        width: width - 20,
        height: height / 3,
        borderRadius: 15,
        resizeMode: 'contain',
        width:250,
    },
    itemTitle:{
        fontFamily: 'SpaceMono_700Bold',
        color: '#fff'
    }
});
export default CarouselItem