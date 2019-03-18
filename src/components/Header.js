import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='ui secondary pointing menu '>
                <Link to="/" className="item">
                    Streamy
                </Link>
                <div className="left menu">
                    <Link to="/view" className="item" >
                        View Stream
                </Link>
                </div>
                <div className="right menu">
                    <Link to="/" className="item" >
                        All streams
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;