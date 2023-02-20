import React, { useState } from 'react';

const Form = () => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    
        const newUser = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) }/>
                { firstName && firstName.length < 2 ? <p>First Name must be at least two characters</p> : "" }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) }/>
                { lastName && lastName.length < 2 ? <p>Last Name must be at least two characters</p> : "" }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) }/>
                { email && email.length < 5 ? <p>Email must be at least five characters</p> : "" }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
                { password && password.length < 8 ? <p>Password must be at least five characters</p> : "" }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) }/>
                { confirmPassword != password ? <p>Passwords must match</p> : "" }
            </div>
            <input type="submit" value="Create User" />
            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </form>
    );
};

export default Form;