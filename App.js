import { StatusBar } from 'expo-status-bar';
import Login from './components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import SignUp from './components/SignUp';
import LogIn from './components/Login';
import Driver from './components/driver';
import Rider from './components/rider';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome!">
        <Stack.Screen name="Welcome" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="Driver" component={Driver} />
        <Stack.Screen name="Rider" component={Rider} />
    </Stack.Navigator>  
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00867E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    color:'white',
    alignContent:'center',
    fontSize:25
  },
  text: {
    color:'white',
    fontSize:'35%',
    fontFamily:'Georgia'
  },
  button:{
    color:"orange",
    alignItems:'center',
    height:'50%',
    width:'90%'
  },
 
});
