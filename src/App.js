import './App.css';

import React, { Component } from 'react';
import Dice from './components/dice'; 

class App extends Component {
style={
  fontStyle:'bold', 
  color: 'blue', 
  margin:'1.5rem', 
}

  constructor() {
    super();
    this.state = {
      diceValue: [1, 2, 3, 4, 5, 6],
    }
    this.getFirstDice = this.getFirstDice.bind(this)
  }

  getFirstDice(diceUser1, diceComputer1, diceUser2, diceComputer2, diceUser3, diceComputer3, TotalUser, TotalComputer) {
    console.log('first dice ' + diceUser1, diceComputer1)
    console.log('second dice ' + diceUser2, diceComputer2)
    console.log('third dice ' + diceUser3, diceComputer3)
    console.log('Total score for user' + TotalUser)
    console.log('Total score for computer' + TotalComputer)



    this.setState({

      firstTurnUser: diceUser1,
      firstTurnDator: diceComputer1,

      secondTurnUser: diceUser2,
      secondTurnDator: diceComputer2,

      thirdTurnUser: diceUser3,
      thirdTurnDator: diceComputer3,

      TotalUser: TotalUser,
      TotalComputer: TotalComputer,
    })
    

    if (TotalUser > TotalComputer) {
      console.log('YOU WON!!')
      this.setState({
        theWinner: 'YOU WON!!'
      })
    }

    else if (TotalUser < TotalComputer) {
      console.log('You Lost the Game')
      this.setState({
        theWinner: 'You Lost the Game'
      })
    }

    else {
      console.log('Same Point')
      this.setState({
        theWinner: 'Same Point'
      })
    }
  }


  render() {
    return (
      <div>
        <Dice diceValueProp={this.state.diceValue} getDiceProp={this.getFirstDice} />
        <h2 style={this.style}>  User First thrown: {this.state.firstTurnUser } The Computer : {this.state.firstTurnComputer} </h2>

        <h2 style={this.style}>  User Second thrown: {this.state.secondTurnUser } The Computer : {this.state.secondTurnComputer} </h2>

        <h2 style={this.style}> User Third thrown: {this.state.thirdTurnUser}   The Computer : {this.state.thirdTurnComputer} </h2>
        
        <span style={this.style}> RESULT </span>

        <h2 style= {this.style}>  Your Total Score :  {this.state.TotalUser}   </h2>
        <h2 style= {this.style}>  Computer Total :   {this.state.TotalComputer}    </h2>

        -----------------------------------------

        <h1 style={this.style}>  {this.state.theWinner}   </h1>
      </div>
    );
  }
}

export default App;


