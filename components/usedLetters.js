import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



export default function UsedLetters(props) {
  return(
    <View style={styles.container}>
      <Text style={styles.displayLetters}>{props.usedLetters}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayLetters:{
    letterSpacing: 2,
    color: "orange",
    fontSize: 24,
  }
});