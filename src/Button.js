import React, { Component }  from 'react';
import './style.css';
import { Link } from 'react-router-dom'

class Button extends Component {

  render() {
    return (
      <Link
        to={{
          pathname: this.props.link,
          state: {
            pass: this.props.pass
          }
        }}>
        <div className="button-ender">
          {this.props.text} &nbsp;&#62;
        </div>
      </Link>
    );
  }
}

export default Button;
