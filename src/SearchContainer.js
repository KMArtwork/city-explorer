import React from "react";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from 'axios';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

class SearchContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      query: '',
      results: [],
      error: null,
    }
  }

  // updates state when search bar is changed
  handleInputChange = (event) => {
    this.setState({query: event.target.value});
  }

  // submits a request to locationiq for using the search term stored in this.state.query
  handleSubmitQuery = async (event) => {
    event.preventDefault();
    this.setState({error: null});
    try {
      let request = {
        url: `https://us1.locationiq.com/v1/search?key=${ACCESS_TOKEN}&q=${this.state.query}&format=json`,
        method: 'GET'
      }

      let response = await axios(request);
      
      this.setState({
        results: response.data
      })

    } catch (err) {
      console.log(err);
      this.setState({
        error: err
      })
    }
  }

  render(){
    return (
      <>
        <Container style={{margin: '3rem 0'}}> 
          <Row>
            <SearchBar handleInputChange={this.handleInputChange} handleSubmitQuery={this.handleSubmitQuery} />
          </Row>
        </Container>
        <Container style={{margin: '3rem 0'}}>
          <Row style={{justifyContent: 'center'}}>
            {this.state.error 
              ? <h6>{this.state.error.message}</h6> 
              : this.state.results.map((result) => <SearchResult 
                name={result.display_name} 
                lat={result.lat} 
                lon={result.lon} 
                icon={result.icon} 
              />
            )}
          </Row>
        </Container>
      </>
    )
  }
}

export default SearchContainer;