import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPath from '../../constants/colorPath';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const SecondScreen = ({navigation,route}) => {
    const prevData=route?.params.data
    console.log(prevData,"routes")

    const [state,setState]=useState([
    {
        title:'',
        desc:''
    }
    ])

    return (
        <View style={styles.container}>
            <View style={styles.cart}>
          <Text style={styles.txtStyle}>Title: {route.params.title}</Text>
          <Text style={styles.txtStyle}>Description: {route.params.desc}</Text>
          </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
       margin:24,
       alignItems:'center'
    },
    txtStyle:{
        color:colorPath.white
    },
    cart: {
        flexDirection: "column",
        width: moderateScale(350),
        height: moderateScaleVertical(68),
        backgroundColor:colorPath.teal,
       justifyContent:"space-evenly",
        paddingHorizontal: 14,
        borderRadius: 4,
    
    },
});
export default SecondScreen;
