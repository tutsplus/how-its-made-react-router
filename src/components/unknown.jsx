import React from 'react';
import {Link} from 'react-router';

export function Unknown() {
    return (
        <div className="jumbotron">
            <h2>Oops!</h2>

            <div className="alert alert-warning">Doesn't look like we have this route</div>

            <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
    );
}
