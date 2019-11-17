import React, { Component } from "react";

class MtButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: this.props.action,
      mname: this.props.mtext
    };
  }

  render() {
    return (
      <button onClick={this.state.action} className="button btn-danger btn-sm">
        {this.state.mname}
      </button>
    );
  }
}

export default MtButton;
