import React from "react";
import Modal from "react-bootstrap/Modal";
import MovieCarousel from "./MovieCarousel";

class Movies extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <Modal show={this.props.showMovies} onHide={this.props.handleHideMovies} centered >
        <Modal.Header closeButton><h3>Movies</h3></Modal.Header>
        <Modal.Body>
          {this.props.movieError ? 
            <p>{this.props.movieError.message} | {this.props.movieError.response.data}</p> 
            : <MovieCarousel movies={this.props.movieData.movies} /> }
        </Modal.Body>
        <Modal.Footer><h6>Last Updated: {Date(this.props.movieData.timestamp)}</h6></Modal.Footer>
      </Modal>
    )
  }
}

export default Movies;