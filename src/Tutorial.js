import React, { Component }  from 'react';
import './style.css';
import Button from "./Button.js"

class Tutorial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
  }

  handleClick = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  render() {
    return (
      <div className="homepage-ender center-ender spacing-ender">
        <div className="h2">TUTORIAL</div>

        {this.state.step == 1 ?
          <div className="text-ender">
            You should have loaded the Project Ender Chrome extension at this point. Please notify Linda if you have not done so.
            <br></br><br></br>
            Ender allows you to save anything you want on a webpage, and has been specifically tailored for variables in mathematical equations. We will walk you through a couple ways you can use this tool.
            <br></br><br></br>
            Please turn on Ender at this point by clicking on the icon in the top right and toggling the switch.
            <br></br><br></br>
            <img src={require('./imgs/toolbar.png')} className='image-ender'/>
          </div> : null
        }

        {this.state.step == 2 ?
          <div className="text-ender tutorial-txt">
            There are three phases to using Ender: <br/>
            selecting the variable, assigning it a definition, and revisiting the variable.
          </div> : null
        }

        {this.state.step == 3 ?
          <div className="text-ender tutorial-txt">
            <b>PHASE 1: Selecting the variable</b>
            <br></br><br></br>
            To choose the variable you want to select, highlight the text and a gray + button will appear next to it. To deselect it, click anywhere on the page. Please try this now with the word Ender below.
            <br></br><br></br>
            <b>ENDER</b>
          </div> : null
        }

        {this.state.step == 4 ?
          <div className="text-ender tutorial-txt">
            <b>PHASE 2: Assigning a definition</b>
            <br></br><br></br>
              Now select a word you want to save and press the + button.
          </div> : null
        }

        {this.state.step == 5 ?
          <div className="text-ender tutorial-txt">
            <b>PHASE 2: Assigning a definition</b>
            <br></br><br></br>
              There are two ways you can assign a definition: <br/><br/>
              1. The quickest way is to highlight another word or phrase you want to set as the definition, <br/>
              and the field will autopopulate.
              <br/><br/>
              Try this now.
          </div> : null
        }

        {this.state.step == 6 ?
          <div className="text-ender tutorial-txt">
            <b>PHASE 2: Assigning a definition</b>
            <br></br><br></br>
              2. You can also click into the add-definition panel on the top right to manually add, change, edit, or delete values.
              <br/><br/>
              Try this now.
          </div> : null
        }

        {this.state.step == 7 ?
          <div className="text-ender tutorial-txt">
            <b>PHASE 2: Assigning a definition</b>
            <br></br><br></br>
            To save, press [Enter] or click the save button. Please do this now.
          </div> : null
        }

        {this.state.step == 8 ?
          <div className="text-ender tutorial-txt">
            <b>PHASE 3: Revisiting the variable</b>
            <br></br><br></br>
              To view the definition of a variable you have saved, hover over any instances of the variable. Please note that hovering over any instance of this variable will surface the definition – therefore, if the variable you saved is only one letter, hovering over any instance of this letter will surface the definition.
              <br></br><br></br>
              Please note that this tool is case sensitive. The variables Ender saves also reset upon refresh of the page.
          </div> : null
        }

        {this.state.step == 9 ?
          <div className="text-ender tutorial-txt">
            <b>Companion Survey </b>
            <br></br><br></br>
            Before starting the two sessions, please open the link to the Qualtrics survey below and keep it at hand for later on in the study.
            <br></br><br></br>
            <b><a href="https://harvard.az1.qualtrics.com/jfe/form/SV_e5tgaCfrPai94VL" target="_blank">Click here for the accompanying survey</a></b>
          </div> : null
        }

        {this.state.step < 9 ?
          <a className="button-ender tutorial-btn" onClick={this.handleClick}>
            Next &nbsp;&#62;
          </a> : null
        }


        {this.state.step > 8 ?
          <div className='center-ender column-flex-ender'>
            <b className='text-ender'>By clicking on “Start Session,” <br></br>you will be taken to the first study session. </b>
            <br></br><br></br>
            <Button text="Start Session" link="/trial-1"></Button>
          </div>
           : null
        }

      </div>
    );
  }
}

export default Tutorial;
