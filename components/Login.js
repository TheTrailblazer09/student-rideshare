import { View,StyleSheet,TextInput } from "react-native";
import { Stack, Switch,Text,HStack,Wrap,Divider, Button } from "@react-native-material/core";

export default function LogIn({navigation}){
    return (
        <View style={styles.container}>
            <Text variant="h4" color="#00867E" style={styles.heading}>Login</Text>
            <Stack spacing={9}>
            <TextInput placeholder="Email address" style={styles.input} placeholderTextColor="#00867E"/>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}  placeholderTextColor="#00867E"/>
            </Stack>
            <Button title="Log in" color="#00867E" tintColor="white" onPress={()=>navigation.navigate("Driver")} style={styles.button}/>
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffff',
        marginTop:30,
       
      },
      input:{
        backgroundColor:'white',
        width:"90%",
        color:"#fffff",
        margin:15,
        height:60,
        padding:15,
        borderColor:"grey",
        borderWidth:0.5,
        borderRadius: 12,
        fontSize:17
    },
    heading:{
        marginLeft:20
    },
    button:{
        width:'50%',
        borderRadius:4,
        marginTop:30,
        marginLeft:'25%'
    }
})