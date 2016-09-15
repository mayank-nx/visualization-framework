import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import { reduxReactRouter, routerStateReducer } from "redux-router";
import { createHistory } from "history";

import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

import elasticsearchReducer from "../utils/redux/reducer";
import interfaceReducer from "../components/App/redux/reducer";
import messageBoxReducer from "../components/MessageBox/redux/reducer";
import VSDReducer from "../configs/nuage/redux/reducer"


const loggerMiddleware = createLogger();

const appReducer = combineReducers({
    elasticsearch: elasticsearchReducer,
    interface: interfaceReducer,
    messageBox: messageBoxReducer,
    router: routerStateReducer,
    VSD: VSDReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const createStoreWithRouterAndMiddleware = compose(
    reduxReactRouter({createHistory}),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)(createStore);

let store = createStoreWithRouterAndMiddleware(rootReducer);

export default store;
