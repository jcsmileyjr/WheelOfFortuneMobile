import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



export default function Instructions(props) {
  return(
    <View style={styles.container}>
        <Text style={styles.instructionTitleStyle}>Instructions</Text>
        {props.disableSpinWheel ==false &&
          <Text style={styles.instructionsStyle}>
            Spin the Wheel or Solve the Phrase
          </Text>
        }
        {props.disableSpinWheel &&
          <Text style={styles.instructionsStyle}>
            Pick a letter or Pick a vowel for $250 each
          </Text>
        }    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 100,
    alignItems: "center",
    justifyContent:"center",    
  },
  instructionsStyle: {
    fontSize: 18,
    fontWeight: "bolder",
    color: "navy",
  },
  instructionTitleStyle: {
    fontSize: 18,
    fontWeight: "bolder",
    color: "navy",
  }
});