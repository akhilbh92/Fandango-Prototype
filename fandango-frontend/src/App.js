import React, {Component} from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import FirstComponent from "./components/FirstComponent";



class App extends Component {
    render() {
        return (
            <div className="App">

                <BrowserRouter>
                    <FirstComponent/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
