//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import NavigationStrings from '../constants/NavigationStrings';
import * as Screen from '../Screens';


const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={NavigationStrings.HOME} component={Screen.Home} />
          <Stack.Screen name={NavigationStrings.SECOND_SCREEN} component={Screen.SECOND_SCREEN} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};


//make this component available to the app
export default Routes;
