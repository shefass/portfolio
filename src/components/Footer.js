import React from "react";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Image
} from "semantic-ui-react";

const Footer = () => (
  <Segment
    id="contacts"
    inverted
    vertical
    style={{ padding: "5em 0em", backgroundColor: "#207c8c" }}
  >
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List inverted>
              <List.Item>Mob. Phone: +37068047604</List.Item>
              <List.Item>Email: a.vaickelionis@gmail.com</List.Item>
              <List.Item>Country: Lithuania</List.Item>
              <List.Item>City: Vilnius</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Links" />
            <List link inverted>
              <List.Item
                as="a"
                href="https://github.com/shefass"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </List.Item>
              <List.Item
                as="a"
                href="https://codepen.io/shefass/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodePen
              </List.Item>
              <List.Item
                as="a"
                href="https://twitter.com/shefass"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Image
              as="a"
              id="github"
              href="https://github.com/shefass"
              target="_blank"
              rel="noopener noreferrer"
              src="https://github.com/shefass/MyFiles/blob/master/Octocat.png?raw=true"
              size="tiny"
            />

            <Image
              as="a"
              href="https://twitter.com/shefass"
              target="_blank"
              rel="noopener noreferrer"
              src="https://github.com/shefass/MyFiles/blob/master/Twitter_Logo_Blue.png?raw=true"
              size="tiny"
            />
            <Image
              as="a"
              href="shefass@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              size="tiny"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
