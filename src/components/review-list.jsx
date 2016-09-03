import React from 'react';
import store from '../store';

export class ReviewList extends React.Component {

    render() {
        const {product, category} = this.props.params;

        const {reviews} = store.getProduct(category, product);

        return (
            <div>
                <h4>{reviews.length} review(s)</h4>
                <hr/>
                <ul className="list-unstyled">
                    {
                        reviews.map(x => {
                            return (
                                <li key={x.id}>
                                    <div className="tag tag-primary">{x.author}</div>
                                    <p>{x.text}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
