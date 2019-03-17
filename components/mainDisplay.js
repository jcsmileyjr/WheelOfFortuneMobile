import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



export default function MainDisplay(props) {
  return(
    <View style={styles.container}>
      <Text style={styles.displayLetters}>{props.displayLetters}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  displayLetters:{
    letterSpacing: 2,
  }
});