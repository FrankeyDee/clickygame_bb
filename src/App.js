import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import cards from './cards.json';

class App extends React.Component {
  state = {
    cards: cards,
    score: 0,
    highscore: 0,
    selected: [],
  };

clickCard = id => {
  if (!this.state.cards.includes(id)) {
    let selected = this.state.selected
    selected.push(id)
    let score = this.state.score + 1
    this.setState({ selected, score, message: "Correct!" })
    if (score > this.state.highScore) {
      let highScore = score
      this.setState({ highScore })
    }
    if (score === this.state.cards.length) {
      this.setState({
        score: 0,
        selected: [],
        message: "PERFECT SCORE! Click to start over"
      })
    }
  } else {
      this.setState({
        score: 0,
        cards: [],
        message: "OH NO! You've already clicked this!"
      })
  }
};

  render(){
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.cards.sort(() => .5 - Math.random()).map(card => (
        <Card
          clickCard={this.clickCard}
          id={card.id}
          key={card.id}
          image={card.image}
        />
        ))}
      </Wrapper>
    )
  }

};




export default App;
