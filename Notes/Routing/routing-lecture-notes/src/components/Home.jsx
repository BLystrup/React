import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Routing!</h1>
            <Link to="/contact">Contact us</Link>
        </div>
    )
}

export default Home;