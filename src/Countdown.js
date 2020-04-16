import React, { Component }  from 'react';
import './style.css';


class Countdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countdownTime: 480000,
      show: "inline-block",
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      const newTime = this.state.countdownTime - 10;
      if (newTime >= 0) {
        this.setState({
          countdownTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({
          show: "none"
        });
        this.props.onTimeout()
      }
    }, 10);
  };

  render() {

    let seconds = ("0" + (Math.floor((this.state.countdownTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((this.state.countdownTime / 60000) % 60)).slice(-2);


    return (
      <div className="countdown-ender" style={{display: this.state.show}}>
      {minutes} : {seconds}
      </div>
    );
  }
}

export default Countdown;
