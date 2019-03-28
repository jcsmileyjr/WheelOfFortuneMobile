import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';



export default function InputData(props) {
  return(
    <View style={styles.container}>
      <View style={styles.buttonView}> 
      <Text style={styles.inputTitle}>{props.instructions}</Text>
      <TextInput
        style={{height: 40, 
                width:200,
                textAlign:"center", 
                borderBottomColor: 'black', 
                borderBottomWidth: 2, 
                borderButtomStyle:"solid"}}
        onChangeText={(text) => props.letterPicked(text)}
        //clearTextOnFocus= {true}
        autoFocus= {true}
        maxLength = {props.numOfLettersAllowed}
      />
      </View>      
      <View style={styles.buttonView}> 
        <TouchableHighlight
          onPress={()=> props.solvePhrase()}
          style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    display: "flex",
    alignItems: "center",
    justifyContent:"center",     
  },
  buttonStyle: {
    //flex: 1,
    backgroundColor: 'navy',
    padding: 10,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    //width: 225,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  buttonView: {
    flex:1,
  },
  inputTitle: {
    fontSize: 24,
    fontWeight: 'bolder',
    color: 'navy',
    textAlign:"center",
  }
});