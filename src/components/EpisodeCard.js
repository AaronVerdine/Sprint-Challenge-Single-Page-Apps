import React from "react";
import { Card } from "semantic-ui-react";

// This card contains the Card styling using semantic-ui

export default function EpisodeCard(props) {
  console.log(props);

  return (
    <div>
      <Card.Group stackable={false} className="character-card">
        <Card color="orange" raised={true}>
          <Card.Content>
            <Card.Header className="card-header">{props.name}</Card.Header>
            <Card.Meta>{props.episode}</Card.Meta>
            {/* <Card.Meta>{props.airdate}</Card.Meta> */}
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
