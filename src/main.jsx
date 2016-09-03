require('bootstrap/dist/css/bootstrap.css');

import React from 'react';
import {ReviewList} from './review-list';
import {About} from './about';
import {Product} from './product';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {Category} from './category';
import {Dashboard} from './dashboard';
import ReactDOM from 'react-dom';
import {Shell} from './shell';

const root = (
    <Router history={browserHistory}>
        <Route path="/" component={Shell}>
            <IndexRoute component={Dashboard}/>
            <Route path="category/:category" component={Category}/>
            <Route path="product/:product" component={Product}>
                <Route path="reviews" component={ReviewList}/>
            </Route>
            <Route path="about" component={About}/>
        </Route>
    </Router>
);

ReactDOM.render(root, document.querySelector('main'));
