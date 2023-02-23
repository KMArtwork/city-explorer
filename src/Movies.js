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
            : <MovieCarousel movies={this.props.movies} /> }
        </Modal.Body>
      </Modal>
    )
  }
}

export default Movies;