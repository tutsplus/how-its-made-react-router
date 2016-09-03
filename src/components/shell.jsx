import React from 'react';
import {Link} from 'react-router';

export class Shell extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-inverse navbar-full">
                    <Link className="navbar-brand" to="/">tutsRR</Link>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/" onlyActiveOnIndex={true}>Home</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <div className="container">
                    {this.props.children}
                </div>

                <hr/>
                <div className="text-xs-center">
                    <a href="https://github.com/pixelingene/tuts-react-router">Github Repo</a>
                </div>
            </div>

        );
    }
}
