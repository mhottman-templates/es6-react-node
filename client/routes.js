'use strict';
import React, { Component, PropTypes } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import * as Main from './components/template';

export default (
    <Router history={browserHistory}>
        <Route path="/" >
            <IndexRoute component={Main.Welcome}/>
        </Route>
    </Router>
)
