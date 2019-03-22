import React, { Component } from 'react';
import Animatable from 'react-native-animatable'
import {
  StyleSheet,
  Text,
  View, 
  TouchableHighlight,
} from 'react-native';

const colors = ["blue", "red", "pink", "green"];

export default class SpinWheel extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight
          disabled = {this.props.disableSpinwheel}
          onPress={this.props.getRandomAmount} 
          style={styles.wheel}>
          <Text style={styles.awardText}>{this.props.rewardAmount}</Text>
        </TouchableHighlight>
      </View>
    );
  }

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
    backgroundColor:colors[0],
    borderRadius:100,
    width: 200, 
    alignItems: "center",
    justifyContent:"center",          
  },
  awardText:{
    color: "white",
    fontSize: 24,
    fontWeight: "bolder",
  },
  /*
  colors: {  
    10: {backgroundColor: "pink"},
    20: {backgroundColor: "orange"},
    30: {backgroundColor: "red"},
    40: {backgroundColor: "lightblue"},
    50: {backgroundColor: "skyblue"},
    60: {backgroundColor: "blue"},
    70: {backgroundColor: "navy"},
    80: {backgroundColor: "lightgreen"},
    90: {backgroundColor: "green"},
    100: {backgroundColor: "purple"},
  }
  */
});