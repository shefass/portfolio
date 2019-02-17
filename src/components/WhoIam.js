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
          I have passion for front-end/web-programming. I am a fast hands-on learner.
           You can find all my project code on github including my portfolio website.
            Kindly follow me on github to stay up to date with projects i work on.
          </p>
          <Header as="h3" style={{ fontSize: "2em" }}>
            What I want...
          </Header>
          <p style={{ fontSize: "1.33em" }}>
          Learning new Front-end  technologies by hands-on application to real world problems is my top priority.
           So contact me and we will cooperate!
          </p>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Skills
          </Header>
          <p style={{ fontSize: "1.33em" }}>
          JS,React/Semantic (Intermediate level)
          </p>
          <p style={{ fontSize: "1.33em" }}>
          React Native/Redux (Beginner level)
          </p>
          <p style={{ fontSize: "1.33em" }}>
          Blockchain fundamentals 
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
