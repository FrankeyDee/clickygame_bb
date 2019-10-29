import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import cards from './cards.json';

class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0,
    selected: []
  }

  clickCard = id => {
    if (!this.state.selected.includes(id)) {
      // //push ids into 'selected' array
      let selected = this.state.selected
      selected.push(id);
      // console.log(selected);
      let newscore = this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore;
      
      this.setState({
        score: this.state.score + 1,
        topScore: newscore,
        selected: selected
      })

    }
    else {
      this.setState({
        score: 0,
        selected: [],
      });
      alert("OH NO! You have already clicked that card. Game Over!")

    }
  };

  render(){
    return (
      <Wrapper>
        <Title
          score={this.state.score}
          topScore={this.state.topScore}>Clicky Game: Bob's Burgers</Title>
          <div className="container">
          {this.state.cards.sort(() => 0.5 - Math.random()).map(card => (
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
              clickCard={this.clickCard}
              alt={card.name}
            />
          ))}
        </div>
      </Wrapper>
    )
  };
};
export default App;
