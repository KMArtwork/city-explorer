import React from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import Weather from "./Weather";

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      weather: null,
    }
  }

  handleDisplayWeather = async () => {
    try {
      let request = {
        url: `http://localhost:3001/weather?city=${this.props.name}&lat=${this.props.lat}&lon=${this.props.lon}`,
        method: 'GET'
      }

      let response = await axios(request);

      this.setState({
        weather: response.data,
        showModal: true
      })
    } catch (err) {
      this.setState({
        error: err
      })
    }
  }

  handleHideWeather = () => {
    this.setState({
      showModal: false
    })
  }

  render() {

    return(
      <>
        <Card bg='primary' style={{width: '16rem', height: '25rem', margin: '1rem'}}>
        <Card.Header>
          <h6>{this.props.name}</h6>
        </Card.Header>
        <Card.Body>
          <Card.Img 
          src={`https://maps.locationiq.com/v3/staticmap?key=${ACCESS_TOKEN}&center=${this.props.lat},${this.props.lon}&zoom=18&markers=icon:${this.props.icon}|${this.props.lat},${this.props.lon}`} 
          alt={this.props.name} 
          onClick={this.handleDisplayWeather}
          style={{cursor: 'pointer'}} />
        </Card.Body>
        <Card.Footer>
          <h6>Lat: {this.props.lat}</h6>
          <h6>Lon: {this.props.lon}</h6>
          {/* <h6>Forecast: {this.state.weather[0]}</h6> */}
        </Card.Footer>
      </Card>

      {this.state.showModal ? 
        <Weather weather={this.state.weather} showModal={this.state.showModal} handleHideWeather={this.handleHideWeather} /> : null }
    </>
      
    )
  }
}

export default SearchResult;