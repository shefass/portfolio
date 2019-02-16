import PropTypes from "prop-types";
import React from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Grid,
  Placeholder,
  Reveal,
  Image
} from "semantic-ui-react";
import lenin from "../pictures/lenin.jpg";
import leninH from "../pictures/leninFiller.jpg";
import limusine from "../pictures/Limusine.jpg";

export const HomepageHeading = ({ mobile }) => (
  <Container id="home">
    <Grid>
      <Grid.Row>
        <Grid.Column width={mobile ? 1 : 4} style={{ marginTop: "5em" }}>
          <Reveal animated="move">
            <Reveal.Content visible>
              <Image src={leninH} />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={lenin} /> />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
        <Grid.Column width={mobile ? 11 : 8}>
          <Header
            as="h1"
            content="Welcome!!"
            inverted
            style={{
              fontSize: mobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "2em" : "3em"
            }}
          />
          <Header
            as="h2"
            content="I am Algirdas, take a look to my works"
            inverted
            style={{
              fontSize: mobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "1.5em"
            }}
          />
        </Grid.Column>
        <Grid.Column width={mobile ? 1 : 4} style={{ marginTop: "6em" }}>
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
