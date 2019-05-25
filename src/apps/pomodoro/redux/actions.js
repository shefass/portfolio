// break and sesion buttons
export const hendleBreakDecrease = () => {
  return {
    type: "breakdecrease"
  };
};

export const hendleBreakIncrease = () => {
  return {
    type: "breakincrease"
  };
};

export const hendleSesionDecrease = () => {
  return {
    type: "sesiondecrease"
  };
};

export const hendleSesionIncrease = () => {
  return {
    type: "sesionincrease"
  };
};

//reset button
const reset = () => {
  return {
    type: "reset"
  };
};

export const hendleReset = () => dispatch => {
  clearInterval(timer);
  dispatch(reset());
};

//stop start button

let timer = null;
export const hendleStartPause = () => (dispatch, getState) => {
  const { showClock, showBreak, working } = getState();
  if (!working && showClock) {
    clearInterval(timer);
    timer = setInterval(() => dispatch(tickSesion()), 1000);
    dispatch(startPause());
    dispatch(tickSesion()); //first tick
  } else if (!working && showBreak) {
    clearInterval(timer);
    timer = setInterval(() => dispatch(tickBreak()), 1000);
    dispatch(startPause());
    dispatch(tickBreak()); //first tick
  } else {
    clearInterval(timer);
    dispatch(startPause());
  }
};
const startPause = () => {
  return {
    type: "startpause"
  };
};

const tickSesion = () => (dispatch, getState) => {   //sesion clocks seconds
  const { clockTimeSeconds, working, clockTimeMinutes } = getState();
  dispatch({
    type: "ticksesion"
  });
  if (working && clockTimeSeconds < 1 && clockTimeMinutes < 1) {
    clearInterval(timer);
    dispatch(stopClock());
    dispatch(resetSesion());
    timer = setInterval(() => dispatch(tickBreak()), 1000);
  }
};
const stopClock = () => {
  return {
    type: "stopclock"
  };
};
const resetSesion = () => {
  return {
    type: "resetsesion"
  }
}

const tickBreak = () => (dispatch, getState) => {      //break clocks seconds
  const { breakTimeMinutes, breakTimeSeconds, working } = getState();
  dispatch({
    type: "tickbreak"
  });
  if (working && breakTimeMinutes < 1 && breakTimeSeconds < 1) {
    clearInterval(timer);
    dispatch(stopBreak());
    dispatch(resetBreak());
    timer = setInterval(() => dispatch(tickSesion()), 1000);
  }
};
const stopBreak = () => {
  return {
    type: "stopbreak"
  };
};
const resetBreak = () => {
  return {
    type: "resetbreak"
  }
}