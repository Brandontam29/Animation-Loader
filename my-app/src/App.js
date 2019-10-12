import React, { Component } from "react"
import { MoonLoader } from "react-spinners"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      duration: 2,
      buttonText: { true: "Stop", false: "Play" }, //display button text depending on loading
      buttonCss: { true: "button-disabled", false: "button-enabled" } //manage button css based on loading
    }
  }

  durationChangeHandler = event => {
    this.setState({ duration: event.target.value })
  }

  animationTimeoutHandler = () => {
    this.setState({
      loading: !this.state.loading
    })
    setTimeout(() => {
      this.setState({
        loading: !this.state.loading
      })
    }, this.state.duration * 1000)
  }

  renderAnimation = () => {
    return (
      <div className="animation-wrapper">
        <MoonLoader
          sizeUnit={"px"}
          size={200}
          color={"#7a7d7e"}
          loading={this.state.loading}
          margin="2px"
        />
      </div>
    )
  }

  renderPlayButton = () => {
    return (
      <button
        className={this.state.buttonCss[this.state.loading]}
        onClick={this.animationTimeoutHandler}
        disabled={this.state.loading}
      >
        {this.state.buttonText[this.state.loading]}
      </button>
    )
  }

  renderTimer = () => {
    return (
      <div className="timer-align-right">
        <input
          type="number"
          onChange={this.durationChangeHandler}
          value={this.state.duration}
          min="0"
          max="999"
        />
      </div>
    )
  }

  render = () => {
    return (
      <div className="App">
        <div className="app-intro">
          <h1>Loading Animation Demo</h1>
          <h3>featuring MoonLoader</h3>
        </div>

        <div className="app-demo">
          {this.renderAnimation()}
          <div className="animation-operators">
            {this.renderPlayButton()}
            {this.renderTimer()}
          </div>
        </div>

        <div className="app-outro">
          <h2>Application</h2>
          This website was designed to demonstrate the usage of react-spinners.
          <div className="flex-wrapper">
            <p>
              <h3>More examples</h3>
              <a
                href="https://www.react-spinners.com/"
                target="_blank"
                rel="noopener"
              >
                React-Spinners Website
              </a>
            </p>
            <p>
              <h3>Implementation</h3>
              <a
                href="https://github.com/davidhu2000/react-spinners"
                target="_blank"
                rel="noopener"
              >
                React-Spinners GitHub
              </a>
            </p>
          </div>
        </div>
        <a
          href="https://github.com/Brandontam29/Animation-Loader"
          target="_blank"
          rel="noopener"
          className="github-link"
        >
          <div className="github-link">Source Code: Creator's GitHub</div>
        </a>
      </div>
    )
  }
}

export default App
