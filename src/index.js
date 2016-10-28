import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import Layout from './components/Layout';
import HomePage from './components/HomePage';
import NewClient from './components/NewClient';
import ClientsList from './components/ClientsList';
import NewProperty from './components/NewProperty';
import PropertyList from './components/PropertyList';
import RentalList from './components/RentalList';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="newClient" component={NewClient} />
      <Route path="clientList" component={ClientsList} />
      <Route path="newProperty" component={NewProperty} />
      <Route path="propertyList" component={PropertyList} />
      <Route path="rental" component={RentalList} />
    </Route>
  </Router>,
  document.getElementById('root')
);
