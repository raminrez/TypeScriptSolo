import { combineReducers } from "redux";

import postsReducer from "../container/Posts/Posts.reducer";

const reducers = {
  posts: postsReducer
  // todos: null,
  // users: null
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
