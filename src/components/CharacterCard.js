import React from "react";
import { Card, Image } from "semantic-ui-react";

// This card contains the Card styling using semantic-ui

export default function CharacterCard(props) {
  console.log(props);

  return (
    <>
      <Card.Group stackable={false} className="character-card">
        <Card color="orange" raised={true}>
          <Image src={props.image} />
          <Card.Content>
            <Card.Header className="card-header">{props.name}</Card.Header>
            <Card.Meta>{props.gender}</Card.Meta>
            <Card.Meta>{props.species}</Card.Meta>
            <Card.Description>Date Created: {props.created}</Card.Description>
            <Card.Description>Status: {props.status}</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
}
