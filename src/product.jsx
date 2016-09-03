import React from 'react';
import {Link} from 'react-router';

export class Product extends React.Component {

    render() {
        const {product} = this.props.params;
        return (
            <div className="jumbotron">
                <h1>Product</h1>
                <Link to={`/product/${product}/reviews`}>Reviews</Link>

                {this.props.children}
            </div>
        );
    }
}
