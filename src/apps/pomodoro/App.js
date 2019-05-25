import React, { Component } from "react";
import { Layout } from "./presentational/Layout";
import { reducer } from "./redux/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
        
      </Provider>
    );
  }
}

export default App;
