import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './header.css';
import fandangoLogo from './fandango-logo.jpg';

class CommonHeader extends Component {

  render() {
    return (
      <div>
        <div className="ad-topbanner"></div>
        <div className="brand-bar">
          <div className="col-md-12">
            <div className="col-md-offset-8 col-md-4 float-right header-link">
              <a href="">Gift Cards</a> |
            <a href="">Offers</a> |
            <Link to="/login"
                className="hide-logged-in">Sign In</Link>
            </div>
          </div>
        </div>
        <div>
          <ul className="fandango-nav">
            <li>
              <a href="">
                <img alt="Movie Poster" src={fandangoLogo} className="header-logo" /></a>
            </li>
            <li id="global-search">
              <form action="/search" autoComplete="off" role="search" noValidate="">
                <div className="fan-autocomplete">
                  <div className="fan-autocomplete-results"></div>
                  <input className="fan-input style-search" type="text" name="q" placeholder="Enter City + State, ZIP Code, or Movie" />
                </div>
                <input type="hidden" name="mode" value="general" />
                <button className="fan-btn fan-btn-style-go" type="button">Go</button>
              </form>
            </li>
            <li className="drop-menu"><a href="">MOVIES</a>
              <div className="fulldrop">
                <div className="column">
                  <ul>
                    <li>.</li>
                  </ul>
                </div>
                <div className="column">
                  <h3>NOW PLAYING</h3>
                  <ul>
                    <li><a href="">MOVIES</a></li>
                    <li><a href="">MOVIE TIMES + TICKETS</a></li>
                    <li><a href="">MOVIE NEWS</a></li>
                    <li><a href="">MY VIP ACCOUNT</a></li>
                  </ul>
                </div>
                <div className="column">
                  <h3>OPENING THIS WEEK</h3>
                  <ul>
                    <li><a href="">Tech ANd All</a></li>
                    <li><a href="">Web Designs</a></li>
                    <li><a href="">PSD</a></li>
                    <li><a href="">Scripts</a></li>
                  </ul>
                </div>
                <div className="column">
                  <h3>PRE SALES TICKETS</h3>
                  <ul>
                    <li><a href="">Tech ANd All</a></li>
                    <li><a href="">Web Designs</a></li>
                    <li><a href="">PSD</a></li>
                    <li><a href="">Scripts</a></li>
                  </ul>
                </div>
                <div className="column">
                  <h3>EXPLORE MORE</h3>
                  <ul>
                    <li><a href="">Tech ANd All</a></li>
                    <li><a href="">Web Designs</a></li>
                    <li><a href="">PSD</a></li>
                    <li><a href="">Scripts</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="drop-menu"><a href="">MOVIE TIMES + TICKETS</a>
              <div className="fulldrop">
                <div className="column large-column">
                  <h3>Where are you located? Here are our top cities</h3>
                </div>
                <div className="column">
                  <ul>
                    <li><a href="">New York, NY</a></li>
                    <li><a href="">Los Angeles, CA</a></li>
                    <li><a href="">Atlanta, GA</a></li>
                    <li><a href="">Chicago, IL</a></li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li><a href="">Austin, TX</a></li>
                    <li><a href="">Miami, FL</a></li>
                    <li><a href="">San Francisco, CA</a></li>
                    <li><a href="">Phoenix, AZ</a></li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li><a href="">Washington, DC</a></li>
                    <li><a href="">Boston, MA</a></li>
                    <li><a href="">San Diego, CA</a></li>
                    <li><a href="">Seattle, WA</a></li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li><a href="">Edison, NJ</a></li>
                    <li><a href="">Houston, TX</a></li>
                    <li><a href="">Tampa, FL</a></li>
                    <li><a href="">San Jose, CA</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li><Link to="/signup">JOIN FANDANGO <span className="vip-text">VIP</span></Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CommonHeader;
