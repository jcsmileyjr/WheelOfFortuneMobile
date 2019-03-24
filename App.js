import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';

import MainDisplay from './components/mainDisplay.js';
import UsedLetters from './components/usedLetters.js';
import SpinWheel from './components/spinWheel';
import PlayerScore from './components/playerScore';
import PickALetterInput from './components/pickALetterInput.js';
import InputData from './components/inputData.js';

let displayPhrase = ''; //global variable to hold updated phrase with known letters and unknown letters with "_". Used in the createStartDisplay() to help start the web app.

let workingLetters = ""; //global variable used in the createScreen() to accumulate the player letters

let startUnusedLetterComponent = false;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mysteryPhrase: 'launch code rocks', //official phrase to be answered
      guessedPhrase: '', //matches the offiail phrase but consist of "_" where the player hasn't guessed.
      usedLetters: 'No Unused Letters', //string of letters already used by player
      currentAwardAmount: 0, // the current random award amount the player can win for each letter they get correct
      currentScore: 0, //the current accumulation of the player score
      disableSpinWheel: false, //disable spin wheel when after player spin it
      showWheel: true,//show main screen's wheel and buttons, but hide letter input and phrase guessing
      showPickLetter: false,//show picking letter input screen, but hide spin wheel/buttons and phrase guessing
      showSolvePhrase: false,//show solve phrase input screen and button but hide spin wheel and pick letter screens
      letterChosen: "Bob", //letter chosen via the InputData component
    };
  }

  componentDidMount() {
    this.createStartDisplay();
  }

  //method to get player input, then switch back to the main screen 
  playerPickedALetter = (choice) => {
    this.setState(previousState => ({
      letterChosen: choice,
    }));
    this.updateUsedLetters(choice);
    this.switchToMainScreen();
    this.createScreen(choice);
  }

  //method use in the createRandomRewardAmount() in the spinWheel component to disable the spin wheel after the player push the button and get a ramdom reward amount
  disableWheel = () => {
    this.setState(previousState => ({
      disableSpinWheel: !previousState.disableSpinWheel,
    }));
  };

  //method use to enable the spin Wheel
  enableWheel = () => {
    this.setState(previousState => ({
      disableSpinWheel: !previousState.disableSpinWheel,
    }));
  };

  //method use in the spinWheel compontent to get a random reward amount for the player between 100 and 1000.
  createRandomRewardAmount = () => {
    const randomAmount = Math.floor(Math.random() * 11) * 100;

    //gets a new random amount if the spin wheel is not disabled.
    if (!this.state.disableSpinWheel) {
      this.setState(previousState => ({ currentAwardAmount: randomAmount }));
      this.disableWheel(); //disable the spin wheel after the user press the button
    }
  };

  //method to update the state with the player choice then update the UsedLetters component
  updateUsedLetters = playerChoice => {
    //transform the playerChoice into a uppercase string
    let newLetter = String(playerChoice).toUpperCase();

    //For the first letter chosen the dummy start string is replaced. If this is not start up then the player's choice is added to the last string.
    if (startUnusedLetterComponent == false) {
      startUnusedLetterComponent = true;
      this.setState({ usedLetters: newLetter });
    } else {
      this.setState(previousState => ({
        usedLetters: previousState.usedLetters + newLetter,
      }));
    }
  };

  //method to transform the mysterPhrase into a string of "_" by first converting it into a array call buildArray.
  createStartDisplay = () => {
    let buildArray = []; //used to build a array of "_"

    for (var i = 0; i < this.state.mysteryPhrase.length; i++) {
      if (this.state.mysteryPhrase[i] == ' ') {
        buildArray.push(' ');
      } else {
        buildArray.push('_');
      }
    }

    //string used to update the guessedPhrase state
    displayPhrase = buildArray.join(' ');

    this.setState({ guessedPhrase: displayPhrase });
    
  };

  //method to create a string to be displayed in the MainDisplay component. It will consist of underline charaters for unknown letters and guessed letters.
  createScreen = (choice) => {
    let buildArray = []; //used to build a array of "_" and letters
    workingLetters += choice;//an accumulation of the user choices.

    //The outer for loop "I" check if the intended spot in the mystery phrase is a blank (if o adds to buildArray) and if the current buildArray spot is empty (if so add a "_"). The inner loop "J" checks if the intended spot in the mystery phrase is equal to any letter in the workingLetters string. If so, then add that letter to buildArray
    for (var i = 0; i < this.state.mysteryPhrase.length; i++) {
      for(var j=0;j<workingLetters.length;j++){
        if(this.state.mysteryPhrase[i] == workingLetters[j]){
          buildArray.push(workingLetters[j]);
        }
      }//end of j loop
      if(this.state.mysteryPhrase[i] == " "){
        buildArray.push(" ");
      }
      if(buildArray[i] == null || buildArray == undefined ){
        buildArray.push("_");
      }
    }//end of i loop

    //string used to update the guessedPhrase state
    displayPhrase = buildArray.join(' ');
    
    this.setState({ guessedPhrase: displayPhrase });
      
  };

  //method to change MainScreen to the InputData container with a method to pick a single letter
  switchToPickLetterScreen = () => {
      this.setState(previousState => ({
        showWheel: false,
      }));

      this.setState(previousState => ({
        showPickLetter: true,
      }));              
  }

  //method to change to MainScreen from InputData container with a method to pick a single letter
  switchToMainScreen = () => {
      this.setState(previousState => ({
        showWheel: true,
      }));

      this.setState(previousState => ({
        showPickLetter: false,
      }));              
  }  

   render() {
    return (
      <View style={styles.container}>
        <View style={styles.appTitleStyle}>
          <Text style={styles.wofTitle}>Wheel of Fortune</Text>
          <Text style={styles.codeEditionTitle}>Coding Edition</Text>
        </View>
        <MainDisplay displayLetters={displayPhrase} />
        <UsedLetters usedLetters={this.state.usedLetters} />
        {this.state.showWheel &&
          <MainScreen
            disableSpinWheel={this.state.disableSpinWheel}
            getRandomAmount={this.createRandomRewardAmount}
            rewardAmount={this.state.currentAwardAmount}
            score={this.state.currentScore}
            enable = {this.enableWheel}
            pickLetterScreen ={this.switchToPickLetterScreen}
          />
        }
        {this.state.showPickLetter &&
          <InputData 
              letterPicked = {this.playerPickedALetter}
              numOfLettersAllowed = {1} />
        }
      </View>
    );
  }
}

function MainScreen(props){
  return(
    <View style={styles.mainScreenContainer}>
      <SpinWheel
        disableSpinWheel={props.disableSpinWheel}
        getRandomAmount={props.getRandomAmount}
        rewardAmount={props.rewardAmount}
      />
      <PlayerScore score={props.score} />
      <TouchableHighlight
        onPress ={props.pickLetterScreen} 
        style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Pick a Letter</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Solve Phrase</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={props.enable}
        style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Show Rules</Text>
      </TouchableHighlight>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  appTitleStyle: {
    flex: 1,
    alignItems: 'center', //center the text
  },
  wofTitle: {
    fontSize: 24,
    fontWeight: 'bolder',
    color: 'navy',
  },
  codeEditionTitle: {
    fontSize: 14,
    color: 'lightblue',
  },
  buttonStyle: {
    backgroundColor: 'navy',
    padding: 10,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    width: 225,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  mainScreenContainer:{
    flex: 4,
    display: "flex",

  }
});
