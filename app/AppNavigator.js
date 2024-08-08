import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import index from './index'; 
import ScanTienda from './scanTienda'; 

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={Index} options={{ title: 'Inicio' }} />
        <Stack.Screen name="ScanTienda" component={ScanTiendaScreen} options={{ title: 'Escanear Tienda' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
