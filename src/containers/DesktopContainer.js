import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import { HomepageHeading } from "../components/Heading";
import getWidth from "../constants/getWidth";



export default class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { activeItem } = this.state;

    return (
      
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 1em", backgroundColor: '#207c8c' }}
            vertical
            
                      >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="huge"
              widths={4}
              
            >
              <Container >
                <Menu.Item as='a' href="#home" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item as='a' href="#who" name='about me' active={activeItem === 'about me'} onClick={this.handleItemClick} />
                <Menu.Item as='a' href="#works" name='simple projects' active={activeItem === 'works done'} onClick={this.handleItemClick} />
                <Menu.Item as='a' href="#contacts" name='contact' active={activeItem === 'contacts'} onClick={this.handleItemClick} />
              </Container>
            </Menu>
            <HomepageHeading /> 
          </Segment>
        </Visibility>

        {children}
       
      </Responsive>
      
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};
