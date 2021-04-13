import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const TextInputField = (props) => {
    return(
        <View style={styles.input}>
        <TextInput 
        style={{ color: "#FEFFFF",   fontSize: 25,}}
        onChangeText={props.NumChange}
        value={props.num}
        placeholder="Temp"
        keyboardType="numeric"/>
        </View>
    )
};
const styles = StyleSheet.create({
    input:{flex: 0, 
    top:"-43%", 
    left:"61.5%",
    width: 125,
    height: 125,
    backgroundColor: "#446378",
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',}
})

export default TextInputField;