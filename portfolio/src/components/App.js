import React, { Component } from "react";
import "../App.css";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import illustration from "../assets/Illustration.png";
import Title from "./Title";
import Jokes from "./Jokes";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img
          src={illustration}
          alt="profile illustration"
          className="profile"
        />
        <h1>Hi!</h1>
        <p>My name is Shakila</p>
        <Title />
        <p>I'm always looking for new opportunities to grow.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live and work in Philly</p>
            <p>My favorite language is JavaScript</p>
            <p>I'm learning to love React</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
        <hr />
        <Jokes />
      </div>
    );
  }
}

export default App;
