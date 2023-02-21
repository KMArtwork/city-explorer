import React from "react";
import Card from 'react-bootstrap/Card';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    return(
      <Card bg='primary' style={{width: '16rem', height: '25rem', margin: '1rem'}}>
        <Card.Header>
          <h6>{this.props.name}</h6>
        </Card.Header>
        <Card.Body>
          <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${ACCESS_TOKEN}&center=${this.props.lat},${this.props.lon}&zoom=18&markers=icon:${this.props.icon}|${this.props.lat},${this.props.lon}`} alt={this.props.name} />
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