import React, { Component } from "react";
import { connect } from "react-redux";

import { hendleStartPause, hendleReset } from "../redux/actions";

import { Controls } from "../presentational/Controls";

const mapStateToProps = state => {
  return {
    working: state.working
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClickStartPause: function() {
      dispatch(hendleStartPause());
    },
    onClickReset: function() {
      dispatch(hendleReset());
    }
  };
};

class ControlsContainer extends Component {
  render() {
    const { onClickReset, onClickStartPause, working } = this.props;

    return (
      <Controls
        onClickReset={onClickReset}
        onClickStartPause={onClickStartPause}
        working={working}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlsContainer);
