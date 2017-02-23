import React, { Component } from 'react';
import { Grid, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <Navbar staticTop collapseOnSelect={true}>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>React App</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to='/'>
                <NavItem>Link</NavItem>
              </LinkContainer>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something Else</MenuItem>
                <MenuItem divider />
                <MenuItem>Separated Link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem disabled>Hello, user!</NavItem>
              <LinkContainer to='login'>
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Grid>
      </Navbar>
    );
  }
}

export default Navigation;
