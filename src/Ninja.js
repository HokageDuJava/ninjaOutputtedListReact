import React from "react";

const Ninja = ({ ninjas }) => {
  const ninjasList = ninjas.map((ninja) => {
    return ninja.age >= 13 ? (
      <div key={ninja.id} className="ninja">
        <h2>My Name is : {ninja.name}</h2>
        <p>I come from : {ninja.village} village</p>
        <p>And I'm {ninja.age} years old !</p>
      </div>
    ) : (
      <div>
        <p>This child is way too young to be a real ninja !</p>
      </div>
    );
  });

  return <div>{ninjasList}</div>;
};

export default Ninja;
