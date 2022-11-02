import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const SecondScreen = ({navigation,route}) => {
    const prevData=route?.params.data
    console.log(prevData,"routes")

    return (
        <View style={styles.container}>
            <View style={styles.cart}>
          <Text style={styles.txtStyle}>Title: {route.params.title}</Text>
          <Text style={styles.txtStyle}>Description: {route.params.desc}</Text>
          </View>

        </View>
    );
};

export default SecondScreen;
