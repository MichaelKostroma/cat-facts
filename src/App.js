import './App.css';
import Likes from "./components/Likes";
import Title from "./components/Title";
import Comments from "./components/Comments";
import Spin from "./components/Spin";
import React from "react";

function App() {

  return (
    <div className="App">
      <div className="wrap">
        <h1>Cat Facts</h1>
        <Spin/>
        <div className="card">
          <div className="card-image">
            <img src="./cat.jpg" alt="cat"/>
            <Title/>
            <Likes/>
          </div>
          <Comments/>

        </div>
      </div>
    </div>
  );
}

export default App;
