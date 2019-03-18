import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



export default function SpinWheel(props) {
  return(
    <View style={styles.container}>
      <View style={styles.wheel}>
        <Text style={styles.awardText}>500</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    //alignSelf: "stretch", //stretch the area of the container across the screen    

  },
  wheel:{
    flex: 1,
    backgroundColor:"blue",
    borderRadius:100,
    width: 200, 
    alignItems: "center",
    justifyContent:"center",          
  },
  awardText:{
    color: "white",
    fontSize: 24,
    fontWeight: "bolder",
  }
});