import React from "react";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Image,
  Flag
} from "semantic-ui-react";
import codepen from "../pictures/codepen.svg";

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
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Contact" />
            <List inverted>
              <List.Item>Mob. Phone: +37068047604</List.Item>
              <List.Item>Email: a.vaickelionis@gmail.com</List.Item>
              <List.Item>
                Country: Lithuania <Flag name="lt" style={{marginLeft: '0.5em'}} />
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image
              centered
              as="a"
              id="github"
              href="https://github.com/shefass"
              target="_blank"
              rel="noopener noreferrer"
              src="https://github.com/shefass/MyFiles/blob/master/Octocat.png?raw=true"
              size="tiny"
            />
            <p style={{ marginTop: "11px", marginLeft: '1em' }}>GitHub</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image
              centered
              as="a"
              id="github"
              href="https://codepen.io/shefass/"
              target="_blank"
              rel="noopener noreferrer"
              src={codepen}
              size="tiny"
            />
            <p style={{marginLeft: '0.7em'}}>CodePen</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image
              centered
              as="a"
              id="github"
              href="https://twitter.com/shefass"
              target="_blank"
              rel="noopener noreferrer"
              src="https://github.com/shefass/MyFiles/blob/master/Twitter_Logo_Blue.png?raw=true"
              size="tiny"
            />
            <p style={{marginLeft: '1em'}}> Twitter</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
