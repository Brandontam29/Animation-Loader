# Animation-Loader
Simple minimalist website that showcase a demo of React-Spinners


### Project description ###
Front-end only single webpage that allows the user to visualize loading animations

Features include:
  - Setting a duration for loading
  - Viewing the loading animation
  
  
### View Project ###
Storybook.js is implemented in this project to visualize the UI components better.

Use this link to view: https://brandontam29.github.io/Animation-Loader/?path=/story/full-app--demo


### Notable Feature ###
Some of the text and css is state dependent. This was accomplished through creating objects in the state and nested state references.

Our initial state
``` 
this.state = {
      loading: false,
      duration: 2,
      buttonText: { true: "Stop", false: "Play" }, //display button text depending on loading
      buttonCss: { true: "button-disabled", false: "button-enabled" } //manage button css based on loading
    }
```

Example of nested state reference
``` 
<button
        className={this.state.buttonCss[this.state.loading]}
        onClick={this.animationTimeoutHandler}
        disabled={this.state.loading}
      >
        {this.state.buttonText[this.state.loading]}
      </button>
```
