import React, { Component } from "react";

class Ninja extends Component {
  state = {
    name: "Naruto",
    village: "Konoha",
    age: 35,
  };

  render() {
    return (
      <div>
        <p>My name is :{this.state.name}</p>
        <p>My village is : {this.state.village}</p>
        <p>And I'm {this.state.age} years old</p>
      </div>
    );
  }
}

export default Ninja;
