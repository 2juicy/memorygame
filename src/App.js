import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    topCount: 0,
    message: "Click on a card to earn points, but don't click on any more than once!",
    guesses: []
  };

  shuffleFriend = () => {
    const friends = this.state.friends.sort(function (a, b) { return 0.5 - Math.random() });;
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  scoreCount = guess => {
    if (this.state.guesses.indexOf(guess) === -1) {
      this.state.guesses.push(guess);
      this.setState({ count: this.state.count + 1 });
      this.setState({ message: "Correct guess!" });
    } else {
      this.setState({ count: 0 });
      this.setState({ guesses: [] });
      this.setState({ message: "Incorrect guess!" });
      if (this.state.count >= this.state.topCount) {
        this.setState({ topCount: this.state.count});
      }
    }
    this.shuffleFriend();
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        <Score
          count={this.state.count}
          topCount={this.state.topCount}
          message={this.state.message}
        />
        {this.state.friends.map(friend => (
          <FriendCard
            scoreCount={this.scoreCount}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
