import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import Calculator from '../apps/calculator/App';

const WhoIam = () => (
  <Segment
    style={{ padding: "4em 0em", backgroundColor: "hsl(120, 100%, 95%)" }}
    id="who"
    vertical
  >
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
            Abilities
          </Header>
          <p
            style={{
              fontSize: "1.33em",
              textIndent: "1.5em",
              textAlign: "justify"
            }}
          >
            I have passion for coding and open source. I am a fast hands-on
            learner. You can find all my project code on github including this
            portfolio website. Kindly follow me on github to stay up to date
            with projects i work on.
          </p>
          <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
            Goals
          </Header>
          <p
            style={{
              fontSize: "1.33em",
              textIndent: "1.5em",
              textAlign: "justify"
            }}
          >
            To make the world a better place. I believe with the code we can do it. So contact me and we will
            change it together!
          </p>
          <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
            Skills
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            JS,React/Redux/Thunk (Intermediate level)
          </p>
          <p style={{ fontSize: "1.33em" }}>
            React Native, Semantic UI (Beginner level)
          </p>
          <p style={{ fontSize: "1.33em" }}>Blockchain fundamentals</p>
        </Grid.Column>
        <Grid.Column width={8} textAlign="center">
          <Calculator />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default WhoIam;
