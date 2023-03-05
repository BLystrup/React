import React from 'react';
import {Link} from "react-router-dom";
import Form from './Form';

const Contact = () => {
    return (
        <div>
            <h2>How would you like to contact us?</h2>
            <Form/>
            <Link to="/">Back to home</Link>
        </div>
    )
}

export default Contact;