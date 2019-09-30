import React from "react";

import "./Post.css";

type post = {
  title: string;
  body: string;
};

const Post: React.FC<post> = ({ title, body }) => {
  return (
    <div className='post'>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default Post;
