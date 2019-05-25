import React, { Component } from "react";
import { connect } from "react-redux";

import { Progres } from "../presentational/Progress";

const mapStateToProps = state => {
  return {
    breakLength: state.breakLength,
    sesionLength: state.sesionLength,
    clockTimeMinutes: state.clockTimeMinutes,
    clockTimeSeconds: state.clockTimeSeconds,
    breakTimeMinutes: state.breakTimeMinutes,
    breakTimeSeconds: state.breakTimeSeconds,
    showClock: state.showClock,
    showBreak: state.showBreak
    };
};

class ProgresContainer extends Component {
  render() {
    const {
      breakLength,
      sesionLength,
      clockTimeMinutes,
      clockTimeSeconds,
      breakTimeMinutes,
      breakTimeSeconds,
      showClock,
      showBreak
      
    } = this.props;
    
    let procent = 0;
    if (showClock){
        procent = (clockTimeMinutes*60 + clockTimeSeconds)*100 / (sesionLength*60);
    } 
    console.log(showBreak)
    if (showBreak){
        procent = (breakTimeMinutes*60 + breakTimeSeconds)*100 / (breakLength*60);
     
    }
    return <Progres procent={procent} />;
  }
}

export default connect(mapStateToProps, null)(ProgresContainer);
