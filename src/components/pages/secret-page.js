import React from 'react';
import {Redirect} from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {

    if (isLoggedIn) {
        return (
            <div className="jumbotron">
                <h2>This page is full of secrets...</h2>
                <p className="text-monospace">If you're not with me, than you're my enemy.</p>
            </div>

        );
    };

    return <Redirect to="/login" />;
};

export default SecretPage;