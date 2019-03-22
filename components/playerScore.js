import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



export default function PlayerScore(props) {
  return(
    <View style={styles.container}>
      <Text style={styles.scoreStyle}>Score $ {props.score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  scoreStyle: {
    fontSize: 24,
    fontWeight: "bolder",
    color: "navy",
  }
});