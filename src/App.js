import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Board from "./components/Board";
import Title from "./components/Title";
import Score from "./components/Score";
import Footer from "./components/Footer";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    count: 0,
    topCount: 0,
    message:
      "Click on a card to earn points, but don't click on any more than once!",
    textcolor: { color: "White" },
    guesses: [],
    display: true
  };

  shuffleCard = () => {
    const cards = this.state.cards.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
  };

  scoreCount = guess => {
    if (this.state.display) {
      this.setState({ display: false });
    }
    clearTimeout(this.delay);
    if (this.state.guesses.indexOf(guess) === -1) {
      this.state.guesses.push(guess);
      if (this.state.count === 11) {
        this.setState({ count: 0 });
        this.setState({ guesses: [] });
        this.setState({ message: "GG YOU WIN!!!" });
      } else {
        this.setState({ count: this.state.count + 1 });
        this.setState({ message: "Correct guess! Score Up!" });
        this.setState({ textcolor: { color: "DarkGreen" } });
        setTimeout(() => {
          this.setState({ textcolor: { color: "White" } });
        }, 500);
      }
    } else {
      this.setState({ count: 0 });
      this.setState({ guesses: [] });
      this.setState({
        message: "Incorrect guess! Game Over! Click on any card to start again."
      });
      this.setState({ textcolor: { color: "Red" } });
      if (this.state.count > this.state.topCount) {
        this.setState({ topCount: this.state.count });
      }
      setTimeout(() => {
        this.setState({ textcolor: { color: "White" } });
      }, 500);
    }
    this.shuffleCard();
    this.delay = setTimeout(() => {
      this.setState({
        message:
          "Click on a card to earn points, but don't click on any more than once!"
      });
    }, 5000);
  };

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <a
          className="source"
          href="https://github.com/2juicy/memorygame"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
        {this.state.display ? <Title>Memory Game!</Title> : null}
        <Board>
          {this.state.cards.map(card => (
            <Card
              scoreCount={this.scoreCount}
              id={card.id}
              key={card.id}
              name={card.name}
            />
          ))}
        </Board>
        <Footer>
          <Score
            count={this.state.count}
            topCount={this.state.topCount}
            message={this.state.message}
            text={this.state.textcolor}
          />
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
