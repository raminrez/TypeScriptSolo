import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";
// import { watchAuth } from "./sagas";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose)
    : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run();

export default store;
