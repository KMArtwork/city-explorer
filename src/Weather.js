import React from "react";
import Modal from "react-bootstrap/Modal";
import { CardGroup } from "react-bootstrap";
import WeatherCard from "./WeatherCard";

class Weather extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <Modal 
        show={this.props.showWeather} 
        onHide={this.props.handleHideWeather} 
        size='xl'
        centered 
      >
        <Modal.Header closeButton><h3>7 Day Weather Forecast</h3></Modal.Header>
        <Modal.Body>
        {this.props.weatherError ? 
        <p>{this.props.weatherError.message} | {this.props.weatherError.response.data}</p>
        : <CardGroup style={{width: '100%'}}>
            {this.props.weatherData.forecast.map(element => <WeatherCard date={element.date} description={element.description} icon={element.icon} low={element.low} high={element.high} />)}
          </CardGroup>
        }
        </Modal.Body>
        <Modal.Footer><h6>Last Updated: {Date(this.props.weatherData.timestamp)}</h6></Modal.Footer>
      </Modal>
    )
  }
}

export default Weather;