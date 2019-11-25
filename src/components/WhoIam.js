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
            learner. You can find all my project code on <a href="https://github.com/shefass">github</a> including this
            portfolio <a href="https://github.com/shefass/portfolio" target="_blank" rel="noopener noreferrer">website</a>.
            Kindly follow me on github to stay up to date
            with projects I work on.
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
          Front-end: JS,React/Redux/Thunk, <a href="https://github.com/shefass/kittensRN" target="_blank" rel="noopener noreferrer"> React Native</a>..
          </p>
          <p style={{ fontSize: "1.33em" }}>
           Back-end: Node.js, Express, Git, Npm, SQL, MangoDb...
          </p>
          <p style={{ fontSize: "1.33em" }}>Blockchain fundamentals, Agile philosophy, Cloud services (AWS, Alibaba...)</p>
          <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
            IT Experience
          </Header>
          <p style={{ fontSize: "1.33em" }}>Created <a href="https://github.com/blockplay-io" target="_blank" rel="noopener noreferrer">(front) </a>
          and managing <a href="https://www.blockplay.io/" target="_blank" rel="noopener noreferrer">www.blockplay.io</a></p>
          <p style={{ fontSize: "1.33em" }}>Full Stack dockerized web app <a href="http://meme.vaickelionis.com/" target="_blank" rel="noopener noreferrer">Meme generator </a>
          Source<a href="https://github.com/shefass/meme-generator" target="_blank" rel="noopener noreferrer"> here</a></p>
        </Grid.Column>
        <Grid.Column width={8} textAlign="center">
          <Calculator />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default WhoIam;
