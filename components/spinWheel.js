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
          style={ [styles.wheel, {backgroundColor:this.props.newColor}]}>
            {this.props.rewardAmount > 0 || this.props.rewardAmount =="LOSE" || this.props.rewardAmount == "WIN" ?
            (<Text style={styles.awardText}>{this.props.rewardAmount}</Text>):
              (<Text style={styles.awardText}>Push to Spin</Text>)                     
            }  
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
    marginTop: -50,//fix a issue with the inside the "MainScreen" container in that the "Score" component was hidden under the buttons.
  },
  wheel:{
    //flex: 1,
    //backgroundColor:{props.newColor},
    borderRadius:100,
    width: 175,
    height: 175, 
    alignItems: "center",
    justifyContent:"center",          
  },
  awardText:{
    color: "white",
    fontSize: 24,
    fontWeight: "bolder",
  },
});