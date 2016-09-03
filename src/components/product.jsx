import React from "react";
import {Link, withRouter} from "react-router";
import store from "../store";

@withRouter
export class Product extends React.Component {

    render() {
        const {router, params: {category, product}} = this.props;
        const p = store.getProduct(category, product);

        const productUrl = `/category/${category}/product/${product}`;
        const productReviewsUrl = `/category/${category}/product/${product}/reviews`;

        const showReviews = !router.isActive(productReviewsUrl);

        return (
            <div>
                <small className="tag tag-default tag-pill">Product</small>
                <h1>{p.name}</h1>

                <Link to={showReviews ? productReviewsUrl : productUrl}>
                    {showReviews ? 'Show Reviews' : 'Hide Reviews'}
                </Link>

                {this.props.children}
            </div>
        );
    }
}
