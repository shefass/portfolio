import React, { Component } from "react";
import { connect } from "react-redux";

import { hendleBreakDecrease, hendleBreakIncrease } from "../redux/actions";
import { Buttons } from "../presentational/Buttons";

const mapDispatchToProps = dispatch => {
  return {
    onClickDecrease: function() {
      dispatch(hendleBreakDecrease());
    },
    onClickIncrease: function() {
      dispatch(hendleBreakIncrease());
    }
  };
};

const mapStateToProps = state => {
  return {
    breakLength: state.breakLength
  };
};

class BreakContainer extends Component {
  render() {
    const { onClickDecrease, onClickIncrease, breakLength } = this.props;
    return (
      <Buttons
        onClickDecrease={onClickDecrease}
        onClickIncrease={onClickIncrease}
        length={breakLength}
        title={"Break Length"}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreakContainer);
