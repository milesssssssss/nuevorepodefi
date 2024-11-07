import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './screens/registro';
import DetailsScreen from './screens/observaciones';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="registro">
        <Stack.Screen name="registro" component={RegisterScreen} options={{ title: 'Registro de Estudiante' }} />
        <Stack.Screen name="observaciones" component={DetailsScreen} options={{ title: 'Detalle del Estudiante' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

