import React, {useState,useEffect} from 'react';
import { StyleSheet,
        View,
        Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color, set } from 'react-native-reanimated';

const Button = ({index, menuSelection, onPressHeader,item}) => {
    const [isFocused, setIsFocused] = useState(index == menuSelection);

    useEffect(() => {
        
        console.log(menuSelection,index)
        setIsFocused(index == menuSelection);
    },[menuSelection])

    return (
        <TouchableOpacity  key={index} onPress={() => {onPressHeader(index)}} style={styles.button}>
                <Text style={[isFocused ? {opacity:1} : {opacity:0.5} , styles.buttonContent]}>{item}</Text>
        </TouchableOpacity>
    )
}
export default TopBar = (props) => {
    const {labels, onPressHeader, menuSelection} = props;
    return (
        <View style={styles.mainView}>
            {labels.map((item,index) => (
                <Button menuSelection={menuSelection} onPressHeader={onPressHeader} index={index} item={item} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row"
    },
    button:{
        marginRight: 20,
        marginTop: 40,
    },
    buttonContent:{
        fontSize: 18,
        fontFamily: 'SpaceMono_700Bold',
    }
})