import produce from "immer";
import {
  POSTS_FETCH_REQUESTED,
  POSTS_FETCH_SUCCEEDED,
  POSTS_FETCH_FAILED
} from "./Posts.actions";

const initialState = {
  posts: [],
  isFetching: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_FETCH_REQUESTED:
      return produce(state, draft => {
        draft.isFetching = true;
      });

    case POSTS_FETCH_SUCCEEDED:
      return produce(state, draft => {
        draft.posts = action.payload.posts;
        draft.isFetching = false;
        draft.error = null;
      });

    case POSTS_FETCH_FAILED:
      return produce(state, draft => {
        draft.posts = [];
        draft.isFetching = false;
        draft.error = action.payload.error;
      });

    default: {
      return state;
    }
  }
};

export default reducer;
