import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
  useEffect(() => {
    axios
      .get("posts")
      .then(response => {
        console.log(response);
      })
      .catch(e => console.log("axi error", e.message));
  }, []);

  return <div className='App'></div>;
};

export default App;
