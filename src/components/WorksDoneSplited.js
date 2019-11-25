import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";

import Drums from "../apps/drums/App";
import Quates from "../apps/quates/App";
import Pomodoro from "../apps/pomodoro/App";

const WorksDoneSplited = () => (
  <Segment
    id="works"
    style={{ padding: "0em", backgroundColor: "hsl(120, 100%, 95%)" }}
    vertical
  >
    <Grid.Row textAlign="center">
      <Pomodoro />
    </Grid.Row>
    <Grid celled="internally" columns="equal" stackable>
      <Grid.Row textAlign="center">
        <Grid.Column style={styles.column}>
          <Header as="h3" style={styles.text}>
            Use your mouse or keyboard
          </Header>
          <Drums />
        </Grid.Column>
        <Grid.Column style={styles.column}>
          <Header as="h3" style={styles.text}>
            Get random quates
          </Header>
          <Quates />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

const styles = {
  text: {
    fontSize: "2em"
  }
};

export default WorksDoneSplited;
