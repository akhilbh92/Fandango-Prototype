import React, { Component} from 'react';
import HomeHeader from './../AfterLogin/HomeHeader'
import './movies.css'
import avengers from './avengers.jpg'
//import {Link} from 'react-router-dom';
import * as API from './../../api/apicall_for_users';

class AllMovies extends Component{

    constructor(props){
        super(props);

        this.state={
            filter: '',
            movies: [],
            movies_tofilter: []

        }
    }

    componentDidMount(){
        API.getMovies({})
            .then((result) => {
                this.setState({
                    movies: result.data,
                    movies_tofilter: result.data
                });
            });
    }


    filterMovies = (filter) => {
        this.setState({
            filter: filter,
            movies_tofilter: this.state.movies.filter(movie => movie.genres.toLocaleLowerCase().includes(filter.toLowerCase()))
        })

        console.log(this.state.movies);
    }


    renderTitle(){
        if(this.state.filter == "") {
            return (
                <div className="page-header-container">
                    <div className="row">
                        <div className="large-12 columns">
                            <h2 className="page-header">SHOWING ALL MOVIES</h2>
                        </div>
                    </div>
                </div>

            )
        }

            else{
                return(
                    <div className="page-header-container">
                        <div className="row">
                            <div className="large-12 columns">
                                <h2 className="page-header">SHOWING <span style={{color: '#F15500'}}>"{this.state.filter}"</span> MOVIES</h2>
                            </div>
                        </div>
                    </div>
                )
            }
        }



    renderMovies(){
        return this.state.movies_tofilter.map((movie) => {
            return(
                <div className="col-md-offset-2 col-md-8 list-moviedetails">
                    <div className="img-style">
                        <img src={movie.photos} className="img-peculiar"  />
                    </div>
                    <div className="movie-heading">
                        <h4>{ movie.movie_name}</h4>
                    </div>
                    <div className="movie-extra-details">
                        <h5 className="gap">Release date: {movie.release_date}</h5>
                        <h5 className="gap">PG13 | {movie.movie_length} min</h5>
                        <h5 calss="gap">{movie.genres}</h5>
                    </div>
                    <div className="cast">
                        <h5>
                            Cast + Crew: {movie.cast}
                        </h5>
                    </div>
                    <div className="see-it-in">
                        <h5>
                            See It in: {movie.see_it_in}
                        </h5>
                    </div>
                    <div className="book-now">
                        <button type="button" className="btn buy-tickets"> BUY TICKETS</button>
                    </div>
                </div>
            )

        })
    }

    render(){
        return(
            <div>
                <div className="site-wrap">
                    <HomeHeader/>

                    <div className="page-header-container">
                        <div className="row">
                            <div className="large-12 columns">
                                <h4 className="page-header">FILTER BY MOVIE GENRES</h4>
                            </div>
                        </div>
                    </div>

                    <div className="genre-list">
                        <ul>
                            <button type="button" className="btn sub-genre" onClick={() => this.filterMovies("")}>ALL MOVIES</button>
                            <button type="button" className="btn sub-genre" onClick={() => this.filterMovies("action")}>ACTION</button>
                            <button type="button" className="btn sub-genre" onClick={() => this.filterMovies("drama")}>DRAMA</button>
                            <button type="button" className="btn sub-genre" onClick={() => this.filterMovies("comedy")}>COMEDY</button>
                            <button type="button" className="btn sub-genre" onClick={() => this.filterMovies("kids")}>KIDS</button>
                            <button type="button" className="btn sub-genre" onClick={() => this.filterMovies("horror")}>HORROR</button>
                            <button type="button" className="btn sub-genre" onClick={() => this.filterMovies("romance")}>ROMANCE</button>
                            <button type="button" className="btn sub-genre" onClick={() => this.filterMovies("sci-fi")}>SCI-FI</button>
                            <button type="button" className="btn sub-genre" onClick={() => this.filterMovies("animated")}>ANIMATED</button>
                        </ul>
                    </div>


                    {this.renderTitle()}

                    <div className="col-md-offset-2 col-md-8 list-header">
                        <h3 className="list-font">MOVIES</h3>
                    </div>

                    {this.renderMovies()}

                </div>



            </div>
        )
    }
}

export default AllMovies;
