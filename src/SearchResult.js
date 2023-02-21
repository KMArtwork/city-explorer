import React from "react";
import Card from 'react-bootstrap/Card';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <Card bg='primary' style={{width: '16rem', height: '20rem'}}>
        {/* <Card.Header style={{overflowY: 'scroll', height: '20%'}}>
          <h4>{this.props.name}</h4>
        </Card.Header> */}
        <Card.Body>
          <h6>{this.props.name}</h6>
        </Card.Body>
        <Card.Footer>
          <h6>Lat: {this.props.lat}</h6>
          <h6>Lon: {this.props.lon}</h6>
        </Card.Footer>
      </Card>
    )
  }
}

export default SearchResult;