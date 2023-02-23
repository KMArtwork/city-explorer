import React from "react";
import Carousel from 'react-bootstrap/Carousel';

class MovieCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselIndex: 0
    }
  }

  handleCarouselSelect = (selectedIndex, e) => {
    this.setState({
      carouselIndex: selectedIndex
    })
  }

  render() {
    return(
      <Carousel activeIndex={this.state.carouselIndex} onSelect={this.handleCarouselSelect}>
        {this.props.movies.map(movie => {
          return <Carousel.Item>
            <img
              className="w100"
              src={`https://image.tmdb.org/t/p/w500${movie.imageUrl}`}
              alt={`Movie poster for ${movie.title}`}
              style={{alignSelf: 'center'}}
            />
            <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 50%)'}}>
              <h3>{movie.title}</h3>
              <p>{`Released in ${movie.releaseDate} | TMDB Rating: ${movie.rating} | Avg. Votes: ${movie.avgVotes} | Total Votes: ${movie.totalVotes}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
        })}
      </Carousel>
    )
  }
}

export default MovieCarousel;