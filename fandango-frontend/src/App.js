import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Landing from "./components/Landing/Landing";

class App extends Component {
    render() {
        return (
            <div className="App">

                <BrowserRouter>
                    <Landing/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
