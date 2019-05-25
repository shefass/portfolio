import React from "react";
import { Button } from "semantic-ui-react";

export const Controls = ({ onClickReset, onClickStartPause, working }) => (
  <div>
    {working ? (
      <Button
        content="Pause"
        color="google plus"
        icon="pause"
        labelPosition="left"
        onClick={onClickStartPause}
      />
    ) : (
      <Button
        content="Start"
        color="facebook"
        icon="play"
        labelPosition="left"
        onClick={onClickStartPause}
      />
    )}

    <Button content="Reset" onClick={onClickReset} />
  </div>
);
