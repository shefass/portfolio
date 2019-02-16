import React from "react";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";

const WhoIam = () => (
  <Segment
    style={{ padding: "8em 0em", backgroundColor: "hsl(120, 100%, 95%)" }}
    id="who"
    vertical
  >
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            What I can do...
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            I can learn new technologies fast, because I like it. I learn by doing variaus projects, I think it is best way to learn.
            All my code are at Github (this sites code too) and will be at this portfolio site, so bookmark this site and follow my Github.
          </p>
          <Header as="h3" style={{ fontSize: "2em" }}>
            What I want...
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            I want to learn more! I can learn by working on your projects. So contact me and we will cooperate! I am interested 
            to front end development side.
          </p>
          <Header as="h3" style={{ fontSize: "2em" }}>
            What I know...
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            My main programing language: JavaScript.
          </p>
          <p style={{ fontSize: "1.33em" }}>
            My main UI framework: React/Semantic.
          </p>
          <p style={{ fontSize: "1.33em" }}>
            Now main learning focus: Redux (and its 'addons') and ReactNative.
          </p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <iframe
            title="mobile"
            src="//www.appdemostore.com/embed?id=4662195351715840"
            width="289"
            height="580"
            frameborder="0"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default WhoIam;
