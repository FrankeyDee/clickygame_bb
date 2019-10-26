import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import cards from './cards.json';

class App extends Component {
  state = {cards};

  clickCard = id => {
    console.log(id);
    //WIN LOSS LOGIC
    //SHUFFLE CARDS
    //ADD TO SCORE
  }

  render(){
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.cards.map(card => (
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
