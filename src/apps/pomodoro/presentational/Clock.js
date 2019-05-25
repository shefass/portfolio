import React from "react";
import { Header, Segment } from "semantic-ui-react";
import audio from "../data/pianoNot.mp3";

export const Clock = ({ minutes, seconds, name }) => (
  <Segment
    inverted={minutes < 1 && seconds < 40 ? true : false}
    color={minutes < 1 ? "red" : "green"}
    tertiary={minutes < 1 && seconds < 40 && seconds > 25 ? true : false}
  >
    <Header as="h3">{name}</Header>
    <span style={{ fontSize: "1.5em" }}>
      {minutes} : {seconds}
    </span>
    {minutes < 1 && seconds < 1 ? <audio src={audio} autoPlay /> : null}
  </Segment>
);
