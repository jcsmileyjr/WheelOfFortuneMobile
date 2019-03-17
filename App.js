import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import MainDisplay from './components/mainDisplay.js';

//let buildArray = [];
let displayPhrase = ""

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      mysteryPhrase: "launch code rocks", //official phrase to be answered
      guessedPhrase: "", //matches the offiail phrase but consist of "_" where the player hasn't guessed.
    }
  }

  componentDidMount(){
    this.createStartDisplay();
  }

  createStartDisplay = () =>{
  
    let buildArray = [];

    for(var i=0;i<this.state.mysteryPhrase.length;i++){
      buildArray.push("_");
    }

    displayPhrase = buildArray.join(" "); 

    this.setState({guessedPhrase: displayPhrase});
  }        
  



  //method to create a string to be displayed in the MainDisplay component. It will consist of underline charaters for unknown letters and guessed letters.
  createScreen = (choice) => {
    let numOfChar = this.state.mysteryPhrase.length;
    const correct_count = 0;
    let phraseArray = []

    //for(var i = 0; i<numOfChar;i++){
    //  if(choice == this.state.mysteryPhrase[i]){
          
    // }
    //}


  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appTitleStyle}>
          <Text style={styles.wofTitle}>Wheel of Fortune</Text>
          <Text style={styles.ceTitle}>Coding Edition</Text>
        </View>
        <MainDisplay displayLetters= {displayPhrase} />
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
