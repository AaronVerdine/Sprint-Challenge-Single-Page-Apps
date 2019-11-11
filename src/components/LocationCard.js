import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function LocationCard(props) {
  // console.log(props);

  return (
    <div>
      <Card.Group stackable={false} className="character-card">
        <Card color="orange" raised={true}>
          <Card.Content>
            <Card.Header className="card-header">{props.name}</Card.Header>
            <Card.Meta>{props.dimension}</Card.Meta>
            <Card.Meta>{props.type}</Card.Meta>
            <Card.Description>
              Residents:{[]}
              {props.residents.map(resident => {})}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
