import React, { Component } from "react";
import { connect } from "react-redux";

import { hendleSesionDecrease, hendleSesionIncrease } from "../redux/actions";

import { Buttons } from "../presentational/Buttons";

const mapDispatchToProps = dispatch => {
  return {
    onClickDecrease: function() {
      dispatch(hendleSesionDecrease());
    },
    onClickIncrease: function() {
      dispatch(hendleSesionIncrease());
    }
  };
};

const mapStateToProps = state => {
  return {
    sesionLength: state.sesionLength
  };
};

class SesionContainer extends Component {
  render() {
    const { onClickDecrease, onClickIncrease, sesionLength } = this.props;
    return (
      <Buttons
        onClickDecrease={onClickDecrease}
        onClickIncrease={onClickIncrease}
        length={sesionLength}
        title={"Sesion Length"}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SesionContainer);
