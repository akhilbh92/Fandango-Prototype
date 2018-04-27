import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css';
import fandangoLogo from './fandango-logo.jpg';
import CommonHeader from '../header/CommonHeader';
import LandingContent from '../Landing/LandingContent';
import ContentHeader from '../Landing/ContentHeader';

class HomeHeader extends Component {

  render() {
    return (
      <div>
        <CommonHeader />
      </div>
    )
  }
}

export default HomeHeader;
