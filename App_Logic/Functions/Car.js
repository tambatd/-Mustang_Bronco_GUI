import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';


const Car = (props) => {
    return (
<View style={styles.center}>
<View><Image
style={styles.car}
source={require('../../Assets/Visual/car3.png')}
/></View>    
<View><Image
style={styles.line}
source={require('../../Assets/Visual/lines.png')}
/></View>      
<Text style={styles.textbox}>{props.car_name}</Text>
</View>);
}

const styles = StyleSheet.create({
    box: {
      height: 110,
      width: 110,
      //borderRadius: 5,
      //marginVertical: 40,
      backgroundColor: "#6600",
      alignItems: "center",
      justifyContent: "center",
      transform: [{rotateZ: "45deg"}],
      top: "-36%",
      left: "-36%",
      borderColor: "#282C34",
      borderWidth: 1,
    },
    center:{
      top: 100,
    },
    testing:{
      width: 125,
      height: 125,
      backgroundColor: "#446378",
      borderRadius: 15,
      top: -695,
      left: 250,
    },
    logo: {
      width: 90,
      height: 35,
      position: "absolute",
      top: "30%",
      left: "5%",
      transform: [{ rotateZ: "-90deg" }]},
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    container: {
      flex: 0,
      top: 0,
      backgroundColor: '#d8e1e8',
    },
    Button:{
      fontSize: 30,
      width: 90,
      height: 35,
    },
    cent:{
      top:100,
    },
    mv: {
      top: -720,
      left: 250,
      width: 125,
      height: 300,
      alignItems: 'center',
  
      backgroundColor: "#446378",
      borderRadius: 15,
    },
    cent:{
      textAlign:"center",
    },
    car:{
      resizeMode: 'contain',
      height: 300,
      width:  200,
      top: "0%",
      left: 15,
    },
    textbox:{
      top:"-58%",
      left: -80,
      
      textAlign: "center",
    },
    line:{
  top: "-72%",
  left: 15,
    },
    box2:{
      width: 100,
      height: 300,
      backgroundColor: "#446378",
      left: 250,
      top: -750,
    }
  });

  export default Car;