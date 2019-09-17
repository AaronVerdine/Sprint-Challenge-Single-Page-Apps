import React from "react";
import { Card, CardContent, CardHeader, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  console.log(props);

  return (
    <>
      <Card>
        <Image src={props.image} />
        <CardContent>
          <CardHeader>{props.name}</CardHeader>
          <h4>{props.gender}</h4>
          <h4>{props.species}</h4>
        </CardContent>
      </Card>
    </>
  );
}
