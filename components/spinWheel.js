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
    //flex: 1,
    alignItems: "center",
    justifyContent:"center",
    //alignSelf: "stretch", //stretch the area of the container across the screen    
    marginTop: -20,//fix a issue with the inside the "MainScreen" container in that the "show rules" button is half below the screen
  },
  wheel:{
    //flex: 1,
    backgroundColor:colors[0],
    borderRadius:100,
    width: 200,
    height: 200, 
    alignItems: "center",
    justifyContent:"center",          
  },
  awardText:{
    color: "white",
    fontSize: 24,
    fontWeight: "bolder",
  },
});