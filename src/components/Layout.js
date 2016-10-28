import React, { PropTypes } from 'react';
import { Link } from 'react-router';


export default function Layout(props) {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="/bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="navbar-brand" >BMA</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Go!</button>
                </span>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <Link
                  to="/"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  For Renters
                  <span className="caret" />
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/newClient">New Client</Link></li>
                  <li><Link to="/clientList">Manage Clients</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link
                  to="/"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  For Managers
                  <span className="caret" />
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/newProperty">New Property</Link></li>
                  <li><Link to="/propertyList">Manage Properties</Link></li>
                  <li role="separator" className="divider" />
                  <li><Link to="/">Rental</Link></li>
                  <li><Link to="/">Withdrawal</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object, // eslint-disable-line
};
