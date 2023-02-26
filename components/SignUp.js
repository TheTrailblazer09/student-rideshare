import { ScrollView,StyleSheet, TextInput } from "react-native";
import { Stack, Switch,Text,HStack,Wrap,Spacer,Button } from "@react-native-material/core";
import { useState } from "react";

export default function SignUp({navigation}){
    const [checked ,setChecked]=useState(true);
    const inputFields=["Name","Password","Email address", "Phone number"];
    const driverFields=["Car Model & Color","License plate number","Driver's License Number"];
    return (
        <ScrollView style={styles.container}>
            <Wrap items="center" spacing={20} >
            <Text variant="h4" color="#00867E" style={{alignContent:'center',marginLeft:30}}>Create an account</Text>
            <HStack spacing={12}>
            <Switch value={checked} onValueChange={() => setChecked(!checked)} />
            <Text style={styles.checkText}>I'm a rider</Text>
            </HStack>
            <HStack spacing={10}>
                {
                    checked? <Switch disabled/>: <Switch value={true} onValueChange={() => setChecked(!checked)} />
                }
            <Text style={styles.checkText}>I'm a driver</Text>
            </HStack>
            </Wrap>
            {
                inputFields.map(text=>{
                    return text==='Password'?  <TextInput  placeholder={text} secureTextEntry={true} style={styles.input} placeholderTextColor="#00867E"/>:
                    <TextInput  placeholder={text} style={styles.input} placeholderTextColor="#00867E"/>
                })
            }
            {
                driverFields.map(text=>{
                   return checked?"":<TextInput placeholder={text} style={styles.input} placeholderTextColor="#00867E"/>
                })
            }
        
        <Button title="Sign Up!" color="#00867E" tintColor="white" onPress={()=>{checked? navigation.navigate("Driver"):navigation.navigate("Rider")}} style={styles.button}/>
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffff',
        marginTop:30,
        marginLeft:9
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
        borderRadius:12,
        fontSize:17
    },
    checkText:{
        marginTop:5,
        fontSize:18
    },
    button:{
        width:'50%',
        borderRadius:4,
        marginTop: 30,
        marginLeft:'25%',
        marginBottom: 50
    }
})