import React from "react";
import { Button, Header, Segment } from "semantic-ui-react";

export const Buttons = ({
  length,
  onClickDecrease,
  onClickIncrease,
  title
}) => (
  <Segment>
    <Header as="h3">{title}</Header>
    <Button color="grey" onClick={onClickDecrease} animated>
      <Button.Content visible>Decrease</Button.Content>
      <Button.Content hidden>Min 1 min</Button.Content>
    </Button>
    <span style={{ fontSize: "1.5em" }}>{length + " "}</span>
    <Button color="grey" onClick={onClickIncrease} animated>
      <Button.Content visible>Increase</Button.Content>
      <Button.Content hidden>Max 60 min</Button.Content>
    </Button>
  </Segment>
);
