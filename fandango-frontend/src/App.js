import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import RoutesComponent from "./components/RoutesComponent/RoutesComponent";

class App extends Component {
    render() {
        return (
            <div className="App">

                <BrowserRouter>
                    <RoutesComponent/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
