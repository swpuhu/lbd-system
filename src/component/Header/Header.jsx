import React from 'react';
import './Header.css';
import Welcome from '../Welcome';
import {Link} from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <div className="header">
      <Link to="/" component={Welcome}>
        <h1 className="header-title">{this.props.title}</h1>
      </Link>
      <div className="header-info">
        <div className="right logout">注销</div>
      </div>
    </div>
    )
  }
}

export default Header;