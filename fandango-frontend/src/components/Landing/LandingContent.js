import React, { Component } from 'react';
import './landing.css';

class LandingContent extends Component {
    render() {
        return (
            <div className="col-12 mr-top-10">
                <div id="recipeCarousel" className="carousel slide col-10 offset-md-1 " data-ride="carousel">
                    <div className="carousel-inner w-100" role="listbox">
                        <div className="carousel-item row no-gutters active">
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280/222/fff?text=1" /></div>
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280/444?text=2" /></div>
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280/888?text=3" /></div>
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280/111/fff?text=4" /></div>
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280/111/fff?text=4" /></div>
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280/111/fff?text=4" /></div>
                        </div>
                        <div className="carousel-item row no-gutters">
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280?text=5" /></div>
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280/555?text=6" /></div>
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280/333/fff?text=7" /></div>
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280/bbb?text=8" /></div>
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280/111/fff?text=4" /></div>
                            <div className="col-2 float-left"><img alt="Movie Poster" className="carousel-img" src="http://placehold.it/350x280/111/fff?text=4" /></div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default LandingContent;