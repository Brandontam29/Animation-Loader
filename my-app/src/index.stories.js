import React, { Component } from "react"
import { MoonLoader } from "react-spinners"
import { storiesOf } from "@storybook/react"
import App from "./App.js"
import "./App.css"

storiesOf("Full App", module).add("Demo", () => (
  <App
    initialState={{
      loading: false,
      duration: 2,
      buttonText: { true: "Stop", false: "Play" },
      buttonCss: { true: "button-disabled", false: "button-enabled" }
    }}
  />
))
storiesOf("Heading", module)
  .add("Demo", () => (
    <div className="app-intro">
      <h1>Loading Animation Demo</h1>
      <h3>featuring MoonLoader</h3>
    </div>
  ))
  .add("h1", () => <h1>Loading Animation Demo</h1>)
  .add("h3", () => <h3>featuring MoonLoader</h3>)

storiesOf("Animation", module)
  .add("Demo", () => (
    <div className="App">
      <div className="app-demo">
        <div className="animation-wrapper">
          <MoonLoader
            loading={true}
            sizeUnit={"px"}
            size={200}
            color={"#7a7d7e"}
            margin="2px"
          />{" "}
        </div>{" "}
        <div className="animation-operators">
          <button className="button-enabled" disabled={false}>
            Play
          </button>{" "}
          <input
            className="timer-align-right"
            type="number"
            value={2}
            min="0"
            max="999"
          />
        </div>{" "}
      </div>
    </div>
  ))
  .add("Animation", () => (
    <div className="app-demo">
      <div className="animation-wrapper">
        <MoonLoader
          initialState={{
            loading: true
          }}
          sizeUnit={"px"}
          size={200}
          color={"#7a7d7e"}
          margin="2px"
        />
      </div>
    </div>
  ))
  .add("Play Button", () => (
    <div className="App">
      <button className="button-enabled" disabled={false}>
        Play
      </button>
    </div>
  ))
  .add("Timer", () => (
    <div className="App">
      <input type="number" placeholder="" min="0" max="999" />
    </div>
  ))

storiesOf("Footer", module)
  .add("Demo", () => (
    <div>
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
  ))
  .add("Title", () => (
    <div>
      <h2>Application</h2>
      This website was designed to demonstrate the usage of react-spinners.
    </div>
  ))
  .add("Link 1", () => (
    <p>
      <h3>More examples</h3>
      <a href="https://www.react-spinners.com/" target="_blank" rel="noopener">
        React-Spinners Website
      </a>
    </p>
  ))
  .add("Link 2", () => (
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
  ))
  .add("Link to Github", () => (
    <a
      href="https://github.com/Brandontam29/Animation-Loader"
      target="_blank"
      rel="noopener"
      className="github-link"
    >
      <div className="github-link">Source Code: Creator's GitHub</div>
    </a>
  ))
