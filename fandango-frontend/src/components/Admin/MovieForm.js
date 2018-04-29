import React from 'react';
import * as API from '../../api/API';
import {Alert, Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import URLRegex from '../Helper/URLRegex';


class MovieForm extends React.Component {
    notify = (msg) => toast(msg);

    constructor(props){
        super(props);
        this.state = {
            trailer: '',
            photos: '',
            movieName: '',
            description: '',
            seeItIn:'',
            cast: '',
            movieLength: 0,
            genres: '',
            releaseDate: '1900-01-01',
            trailerValidation: false
          };
        this.uploadPhotos = this.uploadPhotos.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if (this.props.movieId){
            document.getElementById('submit-button').innerHTML = 'Update Movie';
            document.getElementById('form-header').innerHTML = 'Edit Movie Details';
            API.getMovieById(this.props.movieId).then((result)=> {
                console.log((result.data)[0]);
                let res = (result.data)[0];
                this.setState({
                    trailer: res.trailer,
                    photos: res.photos,
                    movieName: res.movie_name,
                    description: res.description,
                    seeItIn: res.see_it_in,
                    cast: res.cast,
                    movieLength: res.movie_length ,
                    genres: res.genres,
                    releaseDate: res.release_date,
                });
            });
        }
    }

    validateField(fieldType, value){
        let fieldPromise = new Promise(function(resolve, reject){
            let pattern;
            switch (fieldType){
                case 'URL':
                    pattern = URLRegex;
                    break;
            }
            if(pattern.test(value)) {
                resolve(true)
            } else {
                reject(false);
            }
        });
        return fieldPromise;
    }

    uploadPhotos(){
        if(this.state.movieName === '') {
            // document.getElementById('hidden-alert').style.display = 'block'
            this.notify('Please enter the movie name, followed by file upload.');
            return;
        }
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.state.movieName);
        API.uploadFile(data).then((res)=> {
            res.json().then((body)=> {
                console.log(body);
                  this.setState({   
                        photos: `http://localhost:3001${body.file}`
                    });
            });
        })
    }

    handleSubmit(event){
        if(this.state.trailerValidation){
            if(this.props.movieId){
                API.editMovie(this.props.movieId,this.state.movieName, this.state.description, this.state.trailer, this.state.photos, 
                    this.state.seeItIn, this.state.cast, this.state.movieLength, this.state.releaseDate, 
                    this.state.genres).then((data)=> {
                        this.notify('Movie updated successfully');
                    });
            } else {
                API.addMovie(this.state.movieName, this.state.description, this.state.trailer, this.state.photos, 
                    this.state.seeItIn, this.state.cast, this.state.movieLength, this.state.releaseDate, 
                    this.state.genres).then((data)=> {
                        this.notify('Movie saved successfully');
                    }).catch((err)=> {
                        this.notify(err);
                    });
            }
        } else {
            this.notify('Inavlid Trailer Input');
        }
        
        event.preventDefault();
    }

    render() {
      return (
        <div id="movieForm"> 
        <br />
            <h3 id="form-header"> <strong> Add Movie Details </strong> </h3> 
                <br/>
            <form>
                <br /><br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="movieName"
                            className="col-sm-2 col-form-label label-color"><strong> Movie Name </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="movieName"
                                name="movieName"
                                value={this.state.movieName}
                                required 
                                onChange={(event) => {
                                    // document.getElementById("hidden-alert").style.display = "none";
                                    this.setState({
                                        movieName: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms"> 
                    <div className="form-group row">
                        <label htmlFor="description"
                            className="col-sm-2 col-form-label label-color"><strong> Description</strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="description"
                                name="description"
                                value={this.state.description}
                                required
                                onChange={(event) => {
                                    this.setState({
                                        description: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                
                <br />
    
                <div className= "admin-forms">  
                    <div className="form-group row">
                        <label htmlFor="seeItIn"
                            className="col-sm-2 col-form-label label-color"><strong> See It In</strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="seeItIn"
                                name="seeItIn"
                                value={this.state.seeItIn}
                                required
                                onChange={(event) => {
                                    this.setState({
                                        seeItIn: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                
                <br />
                <div className= "admin-forms"> 
                    <div className="form-group row">
                        <label htmlFor="cast"
                            className="col-sm-2 col-form-label label-color"><strong> Cast </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="cast"
                                name="cast"
                                value={this.state.cast}
                                required
                                onChange={(event) => {
                                    this.setState({
                                        cast: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                
                <br />
                <div className= "admin-forms"> 
                    <div className="form-group row">
                        <label htmlFor="movieLength"
                            className="col-sm-2 col-form-label label-color"><strong> Movie Length </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="movieLength"
                                name="movieLength"
                                value={this.state.movieLength}
                                required
                                onChange={(event) => {
                                    this.setState({
                                        movieLength: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="releaseDate"
                            className="col-sm-2 col-form-label label-color"><strong> Release Date </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                type="date"
                                id="releaseDate"
                                name="releaseDate"
                                value={this.state.releaseDate}
                                required
                                onChange={(event) => {
                                    this.setState({
                                        releaseDate: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms"> 
                    <div className="form-group row">
                        <label htmlFor="genres"
                            className="col-sm-2 col-form-label label-color"><strong> Genres </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="genres"
                                name="genres"
                                value={this.state.genres}
                                required
                                onChange={(event) => {
                                    this.setState({
                                        genres: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms"> 
                    <div className="form-group row">
                        <label htmlFor="trailer"
                            className="col-sm-2 col-form-label label-color"><strong> Trailer</strong></label>
                        <div className={'col-sm-9' }>
                        
                        <input className="form-control"
                                type="url"
                                id="trailer"
                                name="trailer"
                                value={this.state.trailer}
                                required
                                onChange={(event) => {
                                    this.setState({
                                        trailer: event.target.value
                                    }), this.validateField('URL', event.target.value)
                                    .then((res)=>{
                                        this.setState({
                                            trailerValidation: res
                                        })
                                    })
                                    .catch((err) => {
                                        this.setState({
                                            trailerValidation: err
                                        })
                                    });
                                }}
                                >
                            </input>
                       
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms"> 
                    <div className="form-group row">
                        <label htmlFor="photos"
                            className="col-sm-2 col-form-label label-color"><strong> Photos</strong></label>
                        <div className={'col-sm-9' }>
                            <div id="photo-upload"> 
                                <input ref={(ref) => {this.uploadInput = ref;}} type="file" accept='image/*'/>
                                {
                                    this.state.photos && 
                                    <img id="pic" src={this.state.photos} alt="img" />
                                }
                            </div>
                            <Button id="upload-button"  className="col-sm-1 btn btn-light" onClick={this.uploadPhotos}> Upload </Button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-sm-8"> </div>        
                <Button id="submit-button"  className="col-sm-1 btn btn-primary" onClick={this.handleSubmit}> Add Movie </Button>
                <ToastContainer />
                <br/> <br/>
            </form> <br/>
        </div>
      );
    }
  }

export default MovieForm;
