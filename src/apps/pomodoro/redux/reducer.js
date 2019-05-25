const defaultState = {
  breakLength: 5,
  sesionLength: 25,
  clockTimeMinutes: 25,
  clockTimeSeconds: 0,
  breakTimeMinutes: 5,
  breakTimeSeconds: 0,
  working: false,
  showClock: true,
  showBreak: false
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "breakdecrease":
      if (state.breakLength > 1 && state.breakTimeMinutes > 0) {
        return {
          ...state,
          breakLength: state.breakLength - 1,
          breakTimeMinutes: state.breakTimeMinutes - 1
        };
      } else {
        return { ...state };
      }

    case "breakincrease":
      if (state.breakLength < 60) {
        return {
          ...state,
          breakLength: state.breakLength + 1,
          breakTimeMinutes: state.breakTimeMinutes + 1
        };
      } else {
        return { ...state };
      }
    case "sesiondecrease":
      if (state.sesionLength > 1 && state.clockTimeMinutes > 0) {
        return {
          ...state,
          sesionLength: state.sesionLength - 1,
          clockTimeMinutes: state.clockTimeMinutes - 1
        };
      } else {
        return { ...state };
      }

    case "sesionincrease":
      if (state.sesionLength < 60) {
        return {
          ...state,
          sesionLength: state.sesionLength + 1,
          clockTimeMinutes: state.clockTimeMinutes + 1
        };
      } else {
        return { ...state };
      }
    case "startpause":
      return {
        ...state,
        working: !state.working
      };
    case "ticksesion":
      if (state.clockTimeSeconds > 0) {
        return {
          ...state,
          clockTimeSeconds: state.clockTimeSeconds - 1
        };
      } else {
        return {
          ...state,
          clockTimeSeconds: 59,
          clockTimeMinutes: state.clockTimeMinutes - 1
        };
      }

    case "tickbreak":
      if (state.breakTimeSeconds > 0) {
        return {
          ...state,
          breakTimeSeconds: state.breakTimeSeconds - 1
        };
      } else {
        return {
          ...state,
          breakTimeSeconds: 59,
          breakTimeMinutes: state.breakTimeMinutes - 1
        };
      }
    case "stopclock":
      return {
        ...state,
        showClock: false,
        showBreak: true
      };
    case "stopbreak":
      return {
        ...state,
        showClock: true,
        showBreak: false
      };
    case "resetsesion":
      return {
        ...state,
        clockTimeMinutes: state.sesionLength,
        clockTimeSeconds: 0
      };
    case "resetbreak":
      return {
        ...state,
        breakTimeMinutes: state.breakLength,
        breakTimeSeconds: 0
      };
    case "reset":
      return {
        ...defaultState
      };

    default:
      return state;
  }
};
