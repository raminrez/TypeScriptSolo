import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  POSTS_FETCH_SUCCEEDED,
  POSTS_FETCH_REQUESTED,
  POSTS_FETCH_FAILED
} from "./Posts.actions";
import { getAllPosts } from "../../api";

function* fetchAllPosts() {
  try {
    const posts = yield call(getAllPosts);
    yield put({ type: POSTS_FETCH_SUCCEEDED, payload: { posts } });
  } catch (error) {
    yield put({ type: POSTS_FETCH_FAILED, payload: { error } });
  }
}

function* postsSaga() {
  yield takeLatest(POSTS_FETCH_REQUESTED, fetchAllPosts);
}

export default postsSaga;
