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
      <Modal show={this.props.showModal} onHide={this.props.handleHideWeather} centered >
        <Modal.Header closeButton>Weather Forecast</Modal.Header>
        <Modal.Body>
          {console.log(this.props.error)}
          {this.props.error ? <p>{this.props.error.message} | {this.props.error.response.data}</p>: this.props.weather.map(element => <p>{element.date}: {element.description}</p>) }
        </Modal.Body>
      </Modal>
    )
  }
}

export default Weather;