import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 1,
    topCount: 0,
    guesses: []
  };

  shuffleFriend = () => {
    const friends = this.state.friends.sort(function(a, b){return 0.5 - Math.random()});;
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  scoreCount = guess => {
    console.log(guess);
    this.setState({ count: this.state.count + 1 });
    this.shuffleFriend();
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
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
