import React from 'react';
import {StyleSheet,Image, StatusBar,View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import validate from "./App_Logic/logic.js"
import TempButton from './App_Logic/Functions/button'
import CarName from './App_Logic/Functions/Car' 
import TextNumb from './App_Logic/Functions/TextInput'

export default function App() {
  var [number, onChangeNumber] = React.useState(72);

  function Increment(){
   onChangeNumber(number + 1)
  }
  function DecreaseItem(){
    onChangeNumber(number - 1)
  }
  
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.top}><Image
        style={styles.logo}
        source={require('./Assets/Visual/Ford.png')}
      /></View>
        <StatusBar style="auto" />
            <CarName  car_name = {validate(number)}/>
            <TempButton add = {Increment} substract={DecreaseItem} name={number.toString()}/>
            <TextNumb NumChange={onChangeNumber} Num={number}></TextNumb>
      </View>
      </TouchableWithoutFeedback>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#d8e1e8'},
  top:{
    height: 100,
    width: 1000,
    backgroundColor: "#395D7A",
  },
  logo: {
    alignContent: "center",
    resizeMode: "contain",
    width: "50%",
    height: "50%",
    left: "-5%",
    top: "35%",
  },
    });