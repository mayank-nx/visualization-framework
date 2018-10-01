import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import store from "./redux/store";

import injectTapEventPlugin from "react-tap-event-plugin";

import App from "./App";

import "./index.css";

injectTapEventPlugin();

ReactDOM.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>,
    document.getElementById("root")
);
