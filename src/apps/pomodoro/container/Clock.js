import React, { Component } from "react";
import { connect } from "react-redux";

import { Clock } from "../presentational/Clock";

const mapStateToProps = state => {
  if (state.showBreak) {
    return {
      minutes: state.breakTimeMinutes,
      seconds: state.breakTimeSeconds,
      showBreak: state.showBreak
    };
  } else {
    return {
      minutes: state.clockTimeMinutes,
      seconds: state.clockTimeSeconds
    };
  }
};
class ClockContainer extends Component {
  render() {
    const name = ["Clock", "Break"];
    const { minutes, seconds, showBreak } = this.props;
    return (
      <Clock
        minutes={minutes < 10 ? "0" + minutes : minutes}
        seconds={seconds < 10 ? "0" + seconds : seconds}
        name={showBreak ? name[1] : name[0]}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(ClockContainer);
