import React from 'react';
import { Link } from 'react-router';


export default function Layout(props) {
  return (
    <div>
      <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/details">View Details</Link></li>
      </ol>
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object, // eslint-disable-line
};
