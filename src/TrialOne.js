import React, { Component }  from 'react';
import './style.css';
import Button from "./Button.js";
import Countdown from "./Countdown.js";
import Lemons from "./Lemons.js";
import Caste from "./Caste.js";


class TrialOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      trialOneEnder: Math.round(Math.random()),
      trialOneText: Math.round(Math.random()),
      code: "ZIP"
    }
  }

  componentDidMount() {
    localStorage.setItem('count', 0);
  }

  handleClick = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  handleTimeout = () => {
    // to remove any existing tooltip hotspots
    let ct = localStorage.getItem("count");
    let allTooltips = document.querySelectorAll('[id^="tooltip-span-"]')
    for (let i = 0; i < allTooltips.length; i++) {
      allTooltips[i].remove()
    }

    let codes = ["ALPHA", "BRAVO", "CHARLIE", "DELTA", "ECHO", "FOXTROT", "GOLF", "HOTEL", "INDIA", "JULIETTE",
    "KILO", "LIMA", "MIKE", "NOVEMBER", "OSCAR", "PAPA", "QUEBEC", "ROMEO", "SIERRA", "TANGO", "UNIFORM", "VICTOR",
    "WHISKEY", "X-RAY", "YANKEE", "ZULU", "BETA", "GAMMA", "DELTA", "EPSILON", "ZETA", "ETA", "THETA", "IOTA", "KAPPA", "LAMBDA"]

    let code = codes[ct]

    // console.log("code: ", code)

    // 0 is Caste, 1 is Lemons

    if (!this.state.trialOneText) {
      code += 2
    } else {
      code += 1
    }

    this.setState({
      step: 4,
      code: code
    })
  }

  render() {



    return (
      <div className="homepage-ender center-ender spacing-ender">
        <div className="h2">SESSION 1</div>

      {this.state.step === 1 &&
        <div className="trial-container-small center-ender">

          <div className="text-ender left-align">
            On the following page, you will be given a passage from an academic
            paper. You have eight minutes to read it through and try to understand
            it to the best of your ability. <b>Please focus solely on this passage
            until the clock runs out.</b> At that point, the page will auto-advance and
            redirect you to a couple questions to answer about the passage.
          </div>

        <a><div className="button-ender" onClick={this.handleClick}>Next &nbsp;&#62;</div></a>

        </div>}

        {this.state.step === 2 && this.state.trialOneEnder === 1 &&
          <div className="trial-container-small center-ender">

            <div className="text-ender">
              In this session, you are encouraged to use the Ender tool to help you through
              the passage. <br/><br/>
            <b>Please take this time to switch the tool on</b>, <br/>and press the button when you're
              ready to proceed.
            </div>

          <a><div className="button-ender" onClick={this.handleClick}>Begin passage &nbsp;&#62;</div></a>

          </div>}

      {this.state.step === 2 && this.state.trialOneEnder === 0 &&
        <div className="trial-container-small center-ender">

          <div className="text-ender">
            Please do not use any external tools, such as Ender, to help you through
            the passage. <br/><br/>
          <b>Please take this time to ensure that Ender is switched off</b>, <br/>and press the button when you're
              ready to proceed.
          </div>

        <a><div className="button-ender" onClick={this.handleClick}>Begin passage &nbsp;&#62;</div></a>

        </div>}

      {this.state.step === 3 &&
        <div className="trial-step" id="trial-one-id">
          <Countdown onTimeout={this.handleTimeout}/>

        {this.state.trialOneText ? <Caste/> : <Lemons/>}
        </div>}

        {this.state.step === 4 &&
          <div className="trial-container-small center-ender">

            <div className="text-ender">
              Please reopen the survey tab and fill out the following questions
              regarding the excerpt. Your keyword is:
            </div>
            <div className="code-ender">{this.state.code}</div>

            <div className="text-ender">
              <br/>
              <br/>
              Please do not press the button to advance
              until the proctor gives the signal.
            </div>

          <Button text="End Trial One" link="trial-2" pass={[!this.state.trialOneEnder, !this.state.trialOneText, ]}></Button>

          </div>}


      </div>
    );
  }
}

export default TrialOne;
