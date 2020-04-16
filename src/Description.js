import React, { Component }  from 'react';
import './style.css';
import Button from "./Button.js"


class Description extends Component {

  render() {
    return (
      <div className="homepage-ender center-ender spacing-ender">
        <div className="h2">DESCRIPTION</div>
        <div className="text-ender">
          For this study, you will be asked to read and answer a couple questions on two separate selections of famous academic works. You will be allowed access to the Ender tool in various situations; the specifications will be provided to you in the prompts following this tutorial.
          <br></br><br></br>
          The decision to participate is entirely up to you, and you have the right to terminate the study at any time during your participation.
          <br></br><br></br>
          <b>By clicking on “Start Tutorial,” <br></br>you will be taken to the tutorial of the Ender tool. </b>
        </div>
        <Button text="Start Demonstration" link="/tutorial"></Button>
      </div>
    );
  }
}

export default Description;
