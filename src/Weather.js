import React from "react";
import Modal from "react-bootstrap/Modal";

class Weather extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <Modal show={this.props.showWeather} onHide={this.props.handleHideWeather} centered >
        <Modal.Header closeButton>7 Day Weather Forecast</Modal.Header>
        <Modal.Body>
          {this.props.weatherError ? <p>{this.props.weatherError.message} | {this.props.weatherError.response.data}</p>: this.props.weather.map(element => <p>{element.date}: {element.description}</p>) }
        </Modal.Body>
      </Modal>
    )
  }
}

export default Weather;