//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button ,TouchableOpacity} from 'react-native';
import NavigationStrings from '../../constants/NavigationStrings';
import store from '../../redux/store';
import Home from '../Home/Home';
import { decrement, increment } from '../../redux/action';



const SecondScreen = ({navigation,route}) => {
    const [data, setData]=useState()

  

    const fetchData = ()=>{
        let homeScreenData = route?.params
        if(!!homeScreenData){
            setData(homeScreenData)
        }
        console.log(homeScreenData, "homeScreenData")
    }

    useEffect(() => {

        fetchData();

        const unsubscribe = store.subscribe(() => {
            let value = store.getState().num 
            setData(value)
        })
        return () => {
            unsubscribe()
        }
    }, [route?.params])
    const onInc = () => {
       
        store.dispatch(increment(data))
        // navigation.navigate(NavigationStrings.SECOND_SCREEN, number)
      
    }
    
    const onDec = () => {
        if (number >0){
            store.dispatch(decrement(data))
        }
        else {
           return
        }
        
    }


    return (
        <View style={styles.container}>
            <View style={styles.cart}>
            <TouchableOpacity
                onPress={onDec}
                >
                <Text style={styles.txtStyle}>-</Text>
            </TouchableOpacity>
            <Text style={styles.txtStyle}>{data}</Text>
            <TouchableOpacity
                onPress={onInc}
                >
                  <Text style={styles.txtStyle}>+</Text>
            </TouchableOpacity>
            
            </View>
            <Button 
            title='click'
            onPress={()=>{
                navigation.navigate(NavigationStrings.HOME,data)
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
export default SecondScreen;
