import React from 'react';
import {Link} from 'react-router';

export class Shell extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-faded">
                    <Link className="navbar-brand" to="/">tutsRR</Link>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/category/hello">Category</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/product/hello">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
