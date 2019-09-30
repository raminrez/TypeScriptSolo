import React, { useEffect } from "react";
import { connect } from "react-redux";

import { allPosts } from "./selectors";
import { fetchAllPosts } from "./Posts.actions";

import Post from "../../components/Post/Post";
import "./Posts.css";

type post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Posts = props => {
  useEffect(() => {
    props.getAllPosts(); // eslint-disable-next-line
  }, []);

  return (
    <div className='posts-container'>
      {props.allPosts.map((post: post) => {
        return <Post key={post.id} title={post.title} body={post.body} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  allPosts: allPosts(state)
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
