import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
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

export default Routes;
