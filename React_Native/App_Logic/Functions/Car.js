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
    center:{
      top: 100,
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
  });

  export default Car;