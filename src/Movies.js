import React from "react";
import Modal from "react-bootstrap/Modal";

class Movies extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <Modal show={this.props.showMovies} onHide={this.props.handleHideMovies} centered >
        <Modal.Header closeButton>Movies</Modal.Header>
        <Modal.Body>
          {this.props.movieError ? <p>{this.props.movieError.message} | {this.props.movieError.response.data}</p>: this.props.movies.map(element => <p>{element.title}: {element.overview}</p>) }
          {/* {<p>{this.props.movies[0].title}</p>} */}
        </Modal.Body>
      </Modal>
    )
  }
}

export default Movies;