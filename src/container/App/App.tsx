import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

import Posts from "../Posts/Posts";

const App: React.FC = () => {
  useEffect(() => {
    axios
      .get("posts")
      .then(response => {
        console.log(response);
      })
      .catch(e => console.log("axi error", e.message));
  }, []);

  return (
    <div className='App'>
      <Posts />
    </div>
  );
};

export default App;
