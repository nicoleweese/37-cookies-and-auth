import React from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/welcome/signup'>Sign Up</Link></li>
          <li><Link to='/welcome/login'>Sign In</Link></li>
        </ul>
      </nav>
    )
  }
}