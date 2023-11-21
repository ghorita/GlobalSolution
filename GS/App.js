import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaCadastro from './src/pages/Cadastro/index';
import TelaLogin from './src/pages/Login/index';
import TelaCalculadora from './src/pages/Calculadora/index';
import TelaPrincipal from './src/pages/Principal';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarInactiveTintColor: "#2E3A69"}}>
            <Tab.Screen name="TelaCadastro" component={TelaCadastro} options={{ headerShown: false , tabBarStyle:{display: "none"}}}/>
            <Tab.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false , tabBarStyle:{display: "none"}}}/>
            <Tab.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ headerShown: false , tabBarStyle:{display: "none"}}}/>
            <Tab.Screen name="TelaCalculadora" component={TelaCalculadora} options={{ headerShown: false , tabBarStyle:{display: "none"}}}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

//RM94860 - Gustavo Bacelar Horita
//RM93611 - Pedro Faria Chagas Terra




