import React from "react";
import { Progress } from "semantic-ui-react";

export const Progres = ({ procent }) => (
  <Progress percent={procent} indicating />
);
