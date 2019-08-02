import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import configureStore from './reducers';
import getRoutes from './routes';

import 'eventbrite_design_system/css/eds.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.store = configureStore({});
    this.history = syncHistoryWithStore(browserHistory, this.store);

  }

  render() {
    return (
      <Provider store={this.store}>
        <Router history={this.history} routes={getRoutes()} />
      </Provider>
    )
  }
}
