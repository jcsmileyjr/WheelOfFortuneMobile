import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';

import MainDisplay from './components/mainDisplay.js';
import UsedLetters  from './components/usedLetters.js';
import SpinWheel from './components/spinWheel';
import PlayerScore from './components/playerScore';


let displayPhrase = ""  //global variable to hold updated phrase with known letters and unknown letters with "_". Used in the createStartDisplay() to help start the web app.

let startUnusedLetterComponent = false;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      mysteryPhrase: "launch code rocks", //official phrase to be answered
      guessedPhrase: "", //matches the offiail phrase but consist of "_" where the player hasn't guessed.
      usedLetters: "No Unused Letters",//string of letters already used by player
      currentAwardAmount: 0, // the current random award amount the player can win for each letter they get correct
      currentScore: 0, //the current accumulation of the player score
    }
  }

  componentDidMount(){
    this.createStartDisplay();
  }

  createRandomRewardAmount = () => {
    const randomAmount = Math.floor(Math.random() * 11) * 100;
    this.setState({currentAwardAmount: randomAmount})
    console.log("This is the random amount " + randomAmount);
  }

  //method to update the state with the player choice then update the UsedLetters component
  updateUsedLetters = (playerChoice) => {

    //transform the playerChoice into a uppercase string
    let newLetter =String(playerChoice).toUpperCase();

    //For the first letter chosen the dummy start string is replaced. If this is not start up then the player's choice is added to the last string. 
    if(startUnusedLetterComponent == false){
      startUnusedLetterComponent = true;
      this.setState({usedLetters: newLetter})
    }else {
      this.setState(previousState => (
        { usedLetters: previousState + newLetter }
      ))
    }

  }

  //method to transform the mysterPhrase into a string of "_" by first converting it into a array call buildArray.
  createStartDisplay = () =>{
  
    let buildArray = [];  //used to build a array of "_"

    for(var i=0;i<this.state.mysteryPhrase.length;i++){
      buildArray.push("_");
    }

    //string used to update the guessedPhrase state
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
          <Text style={styles.codeEditionTitle}>Coding Edition</Text>
        </View>
        <MainDisplay displayLetters= {displayPhrase} />
        <UsedLetters usedLetters = {this.state.usedLetters} />
        <SpinWheel 
          getRandomAmount = {this.createRandomRewardAmount}
          rewardAmount = {this.state.currentAwardAmount} />
        <PlayerScore score = {this.state.currentScore} />
        <TouchableHighlight style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Pick a Letter</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Solve Phrase</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Show Rules</Text>
        </TouchableHighlight>                
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
  },
  wofTitle: {
    fontSize: 24,
    fontWeight: "bolder",
    color: "navy",
  },
  codeEditionTitle: {
    fontSize: 14,
    color:"lightblue",
  },
  buttonStyle: {
    backgroundColor: "navy",
    padding: 10,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    width: 225,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bolder",
    textAlign:"center",    
  }
});
