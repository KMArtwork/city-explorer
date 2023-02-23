import React from "react";
import Card from "react-bootstrap/Card";

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <Card style={{width: '15rem'}}>
        <Card.Header>{this.props.date}</Card.Header>
        <Card.Body>
          <Card.Img src={`https://www.weatherbit.io/static/img/icons/${this.props.icon}.png`} alt={this.props.description}/>
          <h6>{this.props.description}</h6>
        </Card.Body>
        <Card.Footer>
          Low: {this.props.low}
          <br></br>
          High: {this.props.high}
        </Card.Footer>
      </Card>
    )
  }
}

export default WeatherCard;