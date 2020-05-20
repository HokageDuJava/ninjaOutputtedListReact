import React from "react";
import "./App.css";
import Ninja from "./Ninja";

class App extends React.Component {
  state = {
    ninjas: [
      { name: "Arzad", village: "Konoha", age: 25, id: 1 },
      { name: "Naruto", village: "Konoha", age: 36, id: 2 },
      { name: "Itachi", village: "Unknown", age: 42, id: 3 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome on my first React App :</h1>

        <Ninja ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
