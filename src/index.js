import React from "react";
import ReactDOM from "react-dom"

import App from "./components/App"

import {createStore} from "redux";
import reducers from "./reducers";
import * as actions from "./actions";

import {Provider} from "react-redux";

const store = createStore(reducers);

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([200, 200, 200]));
unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
