import PropTypes from "prop-types";
import React from "react";
import { Container, Header, Grid, Reveal, Image } from "semantic-ui-react";
import lenin from "../pictures/lenin.jpg";
import leninH from "../pictures/leninFiller.jpg";
import limusine from "../pictures/Limusine.jpg";

export const HomepageHeading = ({ mobile }) => (
  <Container id="home">
    <Grid>
      <Grid.Row>
        <Grid.Column width={mobile ? null : 4} style={{ marginTop: "5em" }}>
          <Reveal animated="move">
            <Reveal.Content visible>
              <Image src={leninH} />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={lenin} /> />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
        <Grid.Column width={mobile ? 16 : 8}>
          <Header
            as="h1"
            content="Welcome!!"
            inverted
            style={{
              fontSize: mobile ? "2em" : "3em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "0em" : "1em"
            }}
          />
          <Header
            as="h2"
            content="My name is Algirdas Vaickelionis. I am dreamer and incurable
            optimist. 
            I am familiar with front: JS, React, React Native... and back: Node.js, SQL...
            Please find the projects I have developed so far down below."
            inverted
            style={{
              fontSize: "1.5em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "1.5em",
              marginLeft: mobile ? "-1.5em" : "0em",
              textAlign: "justify",
              textIndent: "1.5em"
            }}
          />
        </Grid.Column>
        <Grid.Column width={mobile ? null : 4} style={{ marginTop: "5em" }}>
          <Reveal animated="move up">
            <Reveal.Content visible>
              <Image src={leninH} />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={limusine} />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};
