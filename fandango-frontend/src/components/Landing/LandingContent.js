import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './landing.css';
import moviePicture from './blackpanther.jpg';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';

class LandingContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            direction: null,
            topMovies: []
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }


    render() {
        return (
            <div>
                <div className="col-md-offset-1 col-md-10 mr-top-25">
                    <Carousel
                        activeIndex={this.state.index}
                        direction={this.state.direction}
                        onSelect={this.handleSelect}>
                        <Carousel.Item>
                            <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                            <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                            <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                            <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                            <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                            <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="item row no-gutters">
                                <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                                <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                                <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                                <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                                <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                                <div className="col-md-2 float-left"><img alt="Movie Poster" className="carousel-img" src={moviePicture} /></div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-md-offset-1 col-md-10 mr-top-50 mr-bottom-25">
                    <Carousel>
                        <Carousel.Item>
                            <img className="lg-carousel-img" alt="900x500" src={slide1} />
                            <Carousel.Caption>
                                <h3>Tribeca Film Festival Preview</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="lg-carousel-img" alt="900x500" src={slide2} />
                            <Carousel.Caption>
                                <h3>Get To know Amy Scummer</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="lg-carousel-img" alt="900x500" src={slide3} />
                            <Carousel.Caption>
                                <h3>Protect the world we love</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        )
    }
}

export default LandingContent;