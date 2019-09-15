import React from "react";

export default function CharacterCard(props) {
  console.log(props);

  return (
    
    <>
      <div>
        <h2>{props.name}</h2>
        {props.gender}
      </div>
    </>
  );
}
