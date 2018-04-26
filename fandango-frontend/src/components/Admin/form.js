import React from 'react';
import * as API from '../../api/API';
import {Alert, Button} from 'react-bootstrap';


class addMovieForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            trailer: '',
            photos: '',
            imageURL: '',
            movieName: '',
            description: '',
            seeItIn:'',
            cast: '',
            movieLength: '',
            genres: '',
            releaseDate: '',
            isPhotoPresent: false
          };
        this.uploadPhotos = this.uploadPhotos.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    uploadPhotos(){
        if(this.state.movieName === '') {
            document.getElementById('hidden').style.display = 'block';
        }
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.state.movieName);
        API.uploadFile(data).then((res)=> {
            res.json().then((body)=> {
                console.log(body);
                  this.setState({   
                        photos: `http://localhost:3001${body.file}`,
                        isPhotoPresent: true 
                    });
            });
        })
    }

    handleSubmit(){
        API.addMovie(this.state.movieName, this.state.description, this.state.trailer, this.state.photos, 
            this.state.seeItIn, this.state.cast, this.state.movieLength, this.state.releaseDate, 
            this.state.genres).then((data)=> {
                document.getElementById('response-message').innerHTML = data;
            });
    }

    render() {
        console.log(this.state.photos);
        document.addEventListener("click", function(){
            document.getElementById("hidden").style.display = "none";
        });
      return (
        <div id="movieForm"> 
        <Alert bsStyle="warning" id='hidden'>
            <strong>Input Error</strong> Please enter the movie name, followed by file upload.
        </Alert>
            <form>
                <strong> Add Movie </strong>
                <br />
                <div className="form-group row">
                    <label htmlFor="movieName"
                        className="col-sm-2 col-form-label label-color"><strong> Movie Name </strong></label>
                    <div className={'col-sm-9' }>
                        <input className="form-control"
                            id="movieName"
                            name="movieName"
                            required 
                            onChange={(event) => {
                                this.setState({
                                    movieName: event.target.value
                                });
                            }}
                            >
                        </input>
                    </div>
                </div>
                <br />
                <div className="form-group row">
                    <label htmlFor="description"
                        className="col-sm-2 col-form-label label-color"><strong> Description</strong></label>
                    <div className={'col-sm-9' }>
                        <input className="form-control"
                            id="description"
                            name="description"
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
                <br />
                <div className="form-group row">
                    <label htmlFor="seeItIn"
                        className="col-sm-2 col-form-label label-color"><strong> See It In</strong></label>
                    <div className={'col-sm-9' }>
                        <input className="form-control"
                            id="seeItIn"
                            name="seeItIn"
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
                <br />
                <div className="form-group row">
                    <label htmlFor="cast"
                        className="col-sm-2 col-form-label label-color"><strong> Cast </strong></label>
                    <div className={'col-sm-9' }>
                        <input className="form-control"
                            id="cast"
                            name="cast"
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
                <br />
                <div className="form-group row">
                    <label htmlFor="movieLength"
                        className="col-sm-2 col-form-label label-color"><strong> Movie Length </strong></label>
                    <div className={'col-sm-9' }>
                        <input className="form-control"
                            id="movieLength"
                            name="movieLength"
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
                <br />
                <div className="form-group row">
                    <label htmlFor="releaseDate"
                        className="col-sm-2 col-form-label label-color"><strong> Release Date </strong></label>
                    <div className={'col-sm-9' }>
                        <input className="form-control"
                            type="date"
                            id="releaseDate"
                            name="releaseDate"
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
                <br />
                <div className="form-group row">
                    <label htmlFor="genres"
                        className="col-sm-2 col-form-label label-color"><strong> Genres </strong></label>
                    <div className={'col-sm-9' }>
                        <input className="form-control"
                            id="genres"
                            name="genres"
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
                <br />
                <div className="form-group row">
                    <label htmlFor="trailer"
                        className="col-sm-2 col-form-label label-color"><strong> Trailer</strong></label>
                    <div className={'col-sm-9' }>
                        <input className="form-control"
                            id="trailer"
                            name="trailer"
                            required
                            onChange={(event) => {
                                this.setState({
                                    trailer: event.target.value
                                });
                            }}
                            >
                        </input>
                    </div>
                </div>
                <br />
                <div className="form-group row">
                    <label htmlFor="trailer"
                        className="col-sm-2 col-form-label label-color"><strong> Photos</strong></label>
                    <div className={'col-sm-9' }>
                        <div id="photo-upload"> 
                            <input ref={(ref) => {this.uploadInput = ref;}} type="file"/>
                            {
                                this.state.photos && 
                                <img id="pic" src={this.state.photos} alt="img" />
                            }
                        </div>
                        <Button id="upload-button"  className="col-sm-1 btn btn-light" onClick={this.uploadPhotos}> Upload </Button>
                    </div>
                </div>
                <br /> <br />

                <div className="col-sm-4"> </div>
                <Button id="submit-button"  className="col-sm-2 btn btn-primary" onClick={this.handleSubmit}> Add Movie </Button>
            </form>
            <p id='response-message'> </p>
        </div>
      );
    }
  }

export default addMovieForm;
