import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";

import store from "./store";
import "./index.css";
import App from "./container/App/App";
import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
