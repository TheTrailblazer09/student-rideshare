import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from "@react-native-material/core";
import { Stack } from 'react-native-flex-layout';
import { Spacer } from 'react-native-flex-layout';
import {useNavigation} from '@react-navigation/native';

const img=require("../assets/car.png");


export default function Login({navigation}){
  return(  <View style={styles.container}>
    <Stack fill center spacing={26}>
     <Spacer/>
      <Text style={styles.text} >Student Rideshare</Text>
     <Image source={img} style={{width:300, height:120}}/>
     <Spacer/>
     <Stack fill center spacing={15}>
     <Button title="Sign Up" color="white" tintColor="#00867E" style={{width:350}} onPress={()=>navigation.navigate("Sign Up")}/>
     <Button title="Login" color="white" tintColor="#00867E" style={{width:350}} onPress={()=>navigation.navigate("Log In")} />
     </Stack>
     </Stack>
   </View>
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
  