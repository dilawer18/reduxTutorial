import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import store from '../../redux/store'
import { decrement, increment } from '../../redux/action';
import NavigationStrings from '../../constants/NavigationStrings';
const Home = ({ subscribe, getState, dispatch ,navigation,route}) => {
    const [number, setNumber] = useState(0)
    const [flatItem, setFlatItem] = useState([])
    
    
    useEffect(() => {

        const unsubscribe = store.subscribe(() => {
            let value = store.getState().num 
            let data = store.getState().myData 
            setNumber(value)
            setFlatItem(data)
        })
        return () => {
            unsubscribe()
        }
    }, [route?.params])
    const onInc = () => {
        store.dispatch(increment(number))
    }
    const onDec = () => {
        if (number >0){
            store.dispatch(decrement(number))
        }
        else {
           return
        }
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.cart}>
            <TouchableOpacity
                onPress={onDec}>
                <Text style={styles.txtStyle}>-</Text>
            </TouchableOpacity>
            <Text style={styles.txtStyle}>{number}</Text>
            <TouchableOpacity
                onPress={onInc}
                >
                  <Text style={styles.txtStyle}>+</Text>
            </TouchableOpacity>
            
            </View>
            <Button 
            title='click'
            onPress={()=>{
                navigation.navigate(NavigationStrings.SECOND_SCREEN,number)
            }}
            >

            </Button>

            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    cart:{
        flexDirection:"row",
        width:88,
        height:32,
        backgroundColor:'#008B8B',
        justifyContent:"center",
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:6,
        borderRadius:4

        
    },
    txtStyle:{
        color:'white'
    }
});
export default Home;









