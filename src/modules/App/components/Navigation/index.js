import React, { Component } from 'react';
import { Grid, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <Navbar staticTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/'>React App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem href='#'>Link</NavItem>
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
              <NavItem href='login'>Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Grid>
      </Navbar>
    );
  }
}

export default Navigation;
