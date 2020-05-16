import React, { Component } from "react";

class Ninja extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjasList = ninjas.map((ninja) => {
      return (
        <div key={ninja.id} className="ninja">
          <h2>My Name is : {ninja.name}</h2>
          <p>I come from : {ninja.village} village</p>
          <p>And I'm {ninja.age} years old !</p>
        </div>
      );
    });

    return <div>{ninjasList}</div>;
  }
}

export default Ninja;
