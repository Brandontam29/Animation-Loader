import React, { Component } from "react"
import { MoonLoader } from "react-spinners"
import { css } from "@emotion/core"
import "./App.css"

const override = css`
  margin: 0 auto;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      duration: 2,
      buttonText: { true: "Stop", false: "Play" } //display button text depending on loading
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
          css={this.override}
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
              <a href="https://www.react-spinners.com/" target="_blank">
                React-Spinners Website
              </a>
            </p>
            <p>
              <h3>Implementation</h3>
              <a
                href="https://github.com/davidhu2000/react-spinners"
                target="_blank"
              >
                React-Spinners GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
