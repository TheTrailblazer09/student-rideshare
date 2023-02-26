import { View,StyleSheet } from "react-native";
import {Stack, Switch,Text,HStack, Avatar ,Surface,Button } from "@react-native-material/core";
import rides from '../rides.json';

const img1=require("../assets/profile1.jpeg");
const img2=require("../assets/profile2.jpg");
const img3=require("../assets/profile3.jpeg");

export default function Rider(){
   
    return (
        <View style={styles.container}>
            <HStack>
                <Button title="Requests" color="#00867E" tintColor="white" style={styles.button}/>
                <Button title="Completed" color="#ffff" tintColor="#069D03"/>
                <Button title="Cancelled" color="#ffff"tintColor="#B10000"/>
            </HStack>
            <Stack spacing={5}>
                 <Surface
                    elevation={2}
                    category="medium"
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 320,
                        height: 170,
                        marginTop:40,
                        marginLeft:30
                     }}
                    >
                       <HStack spacing={7}>
                            <Avatar image={img1} />
                            <Text>
                                <Text style={{fontWeight:"bold"}}>Melisa is requesting a ride!{'\n'}</Text> 
                                <Text>
                                destination: Winning{"\n"}
                                phone #: 413-314-1343{"\n"}
                                trip duration: 24 hours{"\n"}
                                </Text>
                            </Text>
                        </HStack>
                        <HStack spacing={6}>
                        <Button title="Accept" color="#C5F6C4"/>
                        <Button title="Decline" color="#F2AFAF"/>
                        </HStack>
                        
                        
                    </Surface>
                    <Surface
                    elevation={2}
                    category="medium"
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 320,
                        height: 170,
                        marginTop:40,
                        marginLeft:30
                     }}
                    >
                        <HStack spacing={7}>
                            <Avatar image={img2} />
                            <Text>
                                <Text style={{fontWeight:"bold"}}>Hackher is requesting a ride!</Text> 
                                <Text>
                                destination: Winning{"\n"}
                                phone #: 413-314-1343{"\n"}
                                trip duration: 24 hours{"\n"}
                                </Text>
                            </Text>
                        </HStack>
                        <HStack spacing={6}>
                        <Button title="Accept" color="#C5F6C4"/>
                        <Button title="Decline" color="#F2AFAF"/>
                        </HStack>
                        
                    </Surface>

                    <Surface
                    elevation={2}
                    category="medium"
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 320,
                        height: 170,
                        marginTop:40,
                        marginLeft:30
                     }}
                    >
                        <HStack spacing={7}>
                            <Avatar image={img3} />
                            <Text>
                                <Text style={{fontWeight:"bold"}}>Vani is requesting a ride!{'\n'}</Text> 
                                <Text>
                                destination: Boston,MA{"\n"}
                                phone #: 413-314-1343{"\n"}
                                trip duration: 4 hours{"\n"}
                                </Text>
                            </Text>
                        </HStack>
                        <HStack spacing={6}>
                        <Button title="Accept" color="#C5F6C4"/>
                        <Button title="Decline" color="#F2AFAF"/>
                        </HStack>
                        
                    </Surface>

            </Stack>

        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffff',
        marginTop:30,
        marginLeft:9
      },
})
