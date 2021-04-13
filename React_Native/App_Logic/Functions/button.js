import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Temp_Button = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.mv}>
      <TouchableOpacity
  onPress={props.add}
  style={styles.button}
  accessibilityLabel="Button to increase temperature"
>
<Text style={{color: "#FEFFFF",   fontSize: 100,}}>▲</Text>
</TouchableOpacity>
        <Text style={{ color: "#FEFFFF",   fontSize: 25,
}}>{props.name}°F</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={props.substract}
        accessibilityLabel="Button to decrease temperature">
        <Text  style={{ color: "#FEFFFF",   fontSize: 100,
}}>▼</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    left: '27.5%',
    top: '-60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mv: {
    //top: -720,
    //left: 250,
    width: 125,
    height: 300,
    backgroundColor: "#446378",
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: "center",
    //backgroundColor: "#DDDDDD",
    padding: 10
  },
  textal:{
    color: "#FEFFFF"
    //justifyContent: 'center',
      //alignItems: 'center',
  }
});

export default Temp_Button;