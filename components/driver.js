import MapView,{Marker} from 'react-native-maps';
import { View ,StyleSheet,TextInput,Text,Image} from 'react-native';
import { Icon,IconComponentProvider,HStack,Dialog,DialogHeader,VStack,DialogContent,Provider,Spacer } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from 'react';


export default function Driver(){
  const [text,setText]=useState(" ");
  const [visible,setVisible]=useState(false);
  const img=require("../assets/kia.jpg");
  return (
    <View styles={styles.container}>
    <MapView  style={styles.map}
    initialRegion={{
      latitude: 42.391155,
      longitude: -72.526711,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
      showsUserLocation={true}/>
      <View style={styles.inputContainer}>
      <HStack>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
         <Icon name="magnify" size={33} color="grey" style={styles.icon}/>
      </IconComponentProvider>
      <TextInput placeholder='Where to?' style={styles.input} onChangeText={setText}/>
      {
      }
      </HStack>
      </View>
      {
        text==='Trader Joe'? <View style={styles.dialog}>
        {console.log("YES")}
      <Provider>
      <Dialog visible={true} onDismiss={() => setVisible(false)}>
      <DialogHeader title="your driver is on the way!" />
      <DialogContent>
        <VStack spacing={2}>
          <Text>Kia Soul {'\n'}
                Red, HACK413
          </Text>
          <Image source={img} style={{width:150, height:100}}/>
        </VStack>
        </DialogContent>
      </Dialog>
      </Provider>
      </View>:<View></View>
      }
     
    </View>
  );
}

const styles=StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'white',
  marginTop:30,
  marginLeft:10
},
  map:{
    width:'100%',
    height:'100%'
  },
  input:{
    width:'70%',
    marginTop:20,
    fontSize:20
  },
  inputContainer:{
    position: 'absolute',
    backgroundColor:'white',
    top:30,
    left:20,
    width:350,
    paddingLeft:10,
    paddingBottom:15,
    borderRadius:12,
    borderColor: "grey",
    borderWidth: 0.6
  },
  icon:{
    marginTop:15
  },
  dialog:{
    position: 'absolute',
    backgroundColor:'white',
    top:280,
    left:150,
    width:100,
    height:100
  }
})