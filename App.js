import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import MysteryPhrase from './components/mysteryPhrase.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      mysteryPhrase: "launch code rocks", //official phrase to be answered
      guessedPhrase: "", //matches the offiical phrase but consist of "_" where the player hasn't guessed.
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appTitleStyle}>
          <Text style={styles.wofTitle}>Wheel of Fortune</Text>
          <Text style={styles.ceTitle}>Coding Edition</Text>
        </View>
        <MysteryPhrase  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  appTitleStyle: {
    flex: 1,
    alignItems:"center", //center the text
    backgroundColor: "lightblue",
  },
  wofTitle: {
    fontSize: 24,
    fontWeight: "bolder",
    color: "navy",
  },
  ceTitle: {
    fontSize: 14,
    color:"lightblue",
  }
});
