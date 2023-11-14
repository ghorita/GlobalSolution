import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaCadastro from './src/pages/Cadastro/index';
import TelaLogin from './src/pages/Login/index';
import TelaCalculadora from './src/pages/Calculadora/index';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarInactiveTintColor: "#2E3A69"}}>
            <Tab.Screen name="TelaCadastro" component={TelaCadastro} options={{ headerShown: false}}/>
            <Tab.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false}}/>
            <Tab.Screen name="TelaCalculadora" component={TelaCalculadora} options={{ headerShown: false}}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}




