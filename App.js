import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';



export default function App() {
  function validate(number){
    if( (number%3 == 0) && (number%5==0) ){
      return "MustangBronco "+number;
    }
    else if(number%5 == 0){
      return "Bronco "+number;
    }
    else if(number%3 == 0){
      return "Mustang "+number;
    }
    return number;
  }

  var [number, onChangeNumber] = React.useState(3);
  var [text, onChangeText] = React.useState(validate(number));

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{validate(number)}</Text>
   
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
