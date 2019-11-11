import React from "react";
import { Card, Image } from "semantic-ui-react";

// This card contains the Card styling using semantic-ui

export default function EpisodeCard(props) {
  // console.log(props);

  return (
    <div className="character-card">
      <Card.Group stackable={false}>
        <Card color="blue" raised={true}>
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
    </div>
  );
}
