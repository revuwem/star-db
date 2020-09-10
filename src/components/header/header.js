import React from 'react';

import './header.css';

const Header = ({onServiceChange}) => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="index.html">
                    StarDB
            </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="index.html">People</a>
                </li>
                <li>
                    <a href="index.html">Planets</a>
                </li>
                <li>
                    <a href="index.html">Starships</a>
                </li>
            </ul>

            <button 
                    onClick={onServiceChange}
                    className="btn btn-primary btn-sm">
                Swap service
            </button>
        </div>
    );
}

export default Header;