import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import axios from "axios";
import Weather from "./Weather";
import Movies from "./Movies";

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
// const SERVER_URL = process.env.REACT_APP_EXPRESS_SERVER_URL;
const SERVER_URL = 'http://localhost:3001'

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherError: null,
      movieError: null,
      showWeather: false,
      showMovies: false,
      weatherData: null,
      movieData: null,
    }
  }

  // handleTestSlice = () => {
  //   console.log(this.props.name.slice(0, this.props.name.indexOf(',') ));
  // }

  handleDisplayWeather = async () => {
    let cityName = this.props.name.slice(0, this.props.name.indexOf(','));

    try {
      let request = {
        url: `${SERVER_URL}/weather?city=${cityName}&lat=${this.props.lat}&lon=${this.props.lon}`,
        method: 'GET'
      }

      let response = await axios(request);
      console.log(response);
      this.setState({
        weatherData: response.data,
        showWeather: true
      })
    } catch (err) {
      this.setState({
        showWeather: true,
        weatherError: err
      })
    }
  }

  handleHideWeather = () => {
    this.setState({
      showWeather: false
    })
  }

  handleDisplayMovies = async () => {
    let cityName = this.props.name.slice(0, this.props.name.indexOf(','));

    try {
      let request = {
        url: `${SERVER_URL}/movies?city=${cityName}`,
        method: 'GET'
      }

      let response = await axios(request);
      console.log(response);
      this.setState({
        movieData: response.data,
        showMovies: true
      })
    } catch (err) {
      this.setState({
        showMovies: true,
        movieError: err
      })
    }
  }

  handleHideMovies = () => {
    this.setState({
      showMovies: false
    })
  }

  render() {

    return(
      <>
      <Card style={{width: '16rem', height: '25rem', margin: '1rem'}}>
        <Card.Header>
          <h6>{this.props.name}</h6>
        </Card.Header>
        <Card.Body>
          <Card.Img 
            src={`https://maps.locationiq.com/v3/staticmap?key=${ACCESS_TOKEN}&center=${this.props.lat},${this.props.lon}&zoom=18&markers=icon:${this.props.icon}|${this.props.lat},${this.props.lon}`} 
            alt={this.props.name} 
          />
          <Button variant="success" onClick={this.handleDisplayWeather}>Weather</Button>
          <Button variant="success" onClick={this.handleDisplayMovies}>Movies</Button>
        </Card.Body>
        <Card.Footer>
          <h6>Lat: {this.props.lat}</h6>
          <h6>Lon: {this.props.lon}</h6>
        </Card.Footer>
      </Card>

      {this.state.showWeather ? 
        <Weather weatherData={this.state.weatherData} showWeather={this.state.showWeather} handleHideWeather={this.handleHideWeather} weatherError={this.state.weatherError} /> : null }

      {this.state.showMovies ? 
        <Movies movieData={this.state.movieData} showMovies={this.state.showMovies} handleHideMovies={this.handleHideMovies} movieError={this.state.movieError} /> : null }
      </>
      
    )
  }
}

export default SearchResult;