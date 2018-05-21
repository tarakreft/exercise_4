import React, { Component } from 'react';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

class Game extends Component {

  state = {
      score: 0,
      correctAnswer: 0,
      numQuestions: 0,
  };

  handleAnswer = event => {
      const bool = (proposedAnswer === value1 + value2 + value3) ? true : false;
    
      this.setState((currentState) => ({
        numQuestions: currentState.numQuestions++,
        correctAnswer: bool === event.target.name ? currentState.correctAnswer++ : currentState.correctAnwer,
        score: this.state.CorrectAnswer/this.state.numQuestions,
      }))
  };
  
  render() {
	return (
      <div>              
        <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={this.handleAnswer} name="true">True</button>
        <button onClick={this.handleAnswer} name="false">False</button>
        <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
        </p>
	  </div>
	)
  }
}

export default Game;