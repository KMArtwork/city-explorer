import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <Navbar>
        <Container>
          <Navbar.Brand>City Explorer</Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>GitHub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavigationBar;