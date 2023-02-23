import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <section id="searchbar">
        <Form>
          <Form.Label htmlFor='searchLoc'>Search for a Location:</Form.Label>
          <Form.Control 
            type='text' 
            id='searchLoc' 
            name='searchLoc' 
            placeholder='Enter a location...' 
            onChange={(event) => this.props.handleInputChange(event)}
          />
          <Button variant='success' id='searchSubmit' name='searchSubmit' onClick={(event) => this.props.handleSubmitQuery(event)}>Explore!</Button>
        </Form>
      </section>
    )
  }
}

export default SearchBar;