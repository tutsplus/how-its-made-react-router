import React from 'react';
import {Link} from 'react-router';

import store from '../store';

export class Category extends React.Component {

    render() {
        const {category: c, product} = this.props.params;
        const contents = product
            ? this.props.children
            : (<span className="text-muted">Select a product to view its details</span>);

        const category = store.getCategory(c);

        return (
            <div className="jumbotron">
                <small className="tag tag-default tag-pill">Category</small>
                <h1>
                    {category.name.toUpperCase()}
                </h1>

                <div className="row">
                    <div className="col-xs-4">
                        <div className="list-group">
                            {
                                category.products.map(p => {
                                    return (
                                        <Link to={`/category/${category.name}/product/${p.name}`}
                                              className="list-group-item"
                                              key={p.id}
                                              activeClassName="active">
                                            <strong className="pull-xs-right">${p.price}</strong>
                                            <span>{p.name}</span>
                                        </Link>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="col-xs-8">
                        {contents}
                    </div>
                </div>
            </div>
        );
    }
}
