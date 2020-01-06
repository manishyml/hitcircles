import "./App.css";
import React, { Component } from "react";
class App extends Component {
  state = {
    score: 0,
    isStarted: false,
    random: "",
    circles: [
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false }
    ]
  };
  interval = 0;
  stop = () => {
    clearInterval(this.interval);
    alert(`Your final score is ${this.state.score}`);
    this.setState({ score: 0, random: "", isStarted: false });
  };
  setTimer = () => {
    this.interval = setInterval(this.generateRand, 1000);
  };
  start = () => {
    this.setState({ isStarted: true });
    this.setTimer();
  };
  calculateScore = index => {
    if (this.state.isStarted) {
      if (index === this.state.random) {
        this.setState(prevstate => ({
          score: prevstate.score + 1
        }));
      } else {
        this.setState(prevstate => ({
          score: prevstate.score - 1
        }));
      }
    }
  };
  generateRand = () => {
    const number = Math.floor(Math.random() * 36);
    this.setState({ random: number });
  };
  render() {
    return (
      <div className="App">
        <div className="hit">Hit the circles</div>
        <div className="hit">
          Test your skills how many circles you can hit?
        </div>

        <div className="score_parent">
          <div className="score">SCORE</div>
          <div type="text" className="score_text">
            {this.state.score}
          </div>
        </div>
        <div className="circles_parent">
          {this.state.circles.map((item, index) => {
            return (
              <div
                className="small_circle"
                key={index}
                onClick={e => this.calculateScore(index)}
              >
                {this.state.random === index && (
                  <div className="inner_circle"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="start_stop">
          <div className="start" onClick={this.start}>
            PLAY
          </div>
          <div onClick={this.stop} className="start">
            STOP
          </div>
        </div>
      </div>
    );
  }
}

export default App;
