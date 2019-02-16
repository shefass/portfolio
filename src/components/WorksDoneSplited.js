import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import portfolio from "../pictures/portfolio.jpg";

const WorksDoneSplited = () => (
  <Segment
    id='works'
    style={{ padding: "0em", backgroundColor: "hsl(120, 100%, 95%)" }}
    vertical
  >
    <Grid celled="internally" columns="equal" stackable>
      <Grid.Row textAlign="center">
        <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Use your mouse or keyboard
          </Header>
          <a
            href="https://shefass.github.io/drums/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="https://github.com/shefass/drums/blob/master/drums.png?raw=true" />
          </a>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Get random quates
          </Header>
          <a
            href="https://shefass.github.io/quote/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="https://github.com/shefass/quote/blob/gh-pages/quote.png?raw=true" />
          </a>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center">
        <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Vanila HTML/CSS landing page
          </Header>
          <a
            href="https://codepen.io/shefass/full/PdYKXY/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="https://github.com/shefass/MyFiles/blob/master/landingpage.png?raw=true" />
          </a>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Old portfolio page
          </Header>
          <a
            href="https://codepen.io/shefass/pen/EeNmMB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={portfolio} />
          </a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default WorksDoneSplited;
