import React, { useEffect } from "react";
import { connect } from "react-redux";
import { allPosts } from "./selectors";
import { fetchAllPosts } from "./Posts.actions";

const Posts = props => {
  useEffect(() => {
    props.getAllPosts();
  }, []);
  return <div>Salam iran</div>;
};

const mapStateToProps = (state: any) => ({
  posts: () => allPosts(state)
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
