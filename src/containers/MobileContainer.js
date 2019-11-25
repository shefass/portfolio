import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";
import { HomepageHeading } from "../components/Heading";
import getWidth from "../constants/getWidth";

export default class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" href="#home" onClick={this.handleSidebarHide}>
            Home
          </Menu.Item>
          <Menu.Item as="a" href="#who" onClick={this.handleSidebarHide}>
            About Me
          </Menu.Item>
          <Menu.Item as="a" href="#works" onClick={this.handleSidebarHide}>
            Simple Projects
          </Menu.Item>
          <Menu.Item as="a" href="#contacts" onClick={this.handleSidebarHide}>
            Contact
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ backgroundColor: "#207c8c", minHeight: 300 }}
            vertical
          >
            <Container style={{ float: "left" }} compact>
              <Icon name="sidebar" onClick={this.handleToggle} />
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};
