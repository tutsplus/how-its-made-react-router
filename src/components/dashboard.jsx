import React from 'react';
import {Link} from 'react-router';
import store from '../store';

export class Dashboard extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Dashboard</h1>
                    </div>
                </div>

                <div className="row">
                    {
                        store.categories.map(c=> {
                            return (
                                <div className="col-xs-4" key={c.id}>
                                    <div className="card">
                                        <div className="card-block">
                                            <h4 className="card-title">{c.name}</h4>

                                            <div>{c.products.length} product(s)</div>
                                        </div>

                                        <div className="card-block">
                                            <Link to={`/category/${c.name}`} className="btn btn-primary">View</Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

        );
    }
}
