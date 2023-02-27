// Use useEffect in order to manage "side Effects" in our React project.

// If use useEffect in a functional component, this method will execute directly after the component is rendered, and every time the component updates.

// A common way useEffect is used is when making a call to an API.
const Example = (props) => {
    const [people, setPeople] = useState([]);
 
    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []);
 
    return (
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
}
export default Example;

// useEffect takes an optional second argument: an array that contains different variables. useEffect will always run on first render. It will also run when a variable in the second argument array changes.
// Example: wanting to run the method when we submit a form (the second argument):
useEffect(()=>{
    alert("When will this run?");
}, [state.isSubmitted]);

// Cleaning Up on Unmounting
// TimeDisplay.js
import React, { useEffect, useState } from 'react';
 
export default () => {
    const [time, setTime] = useState(new Date().toLocaleString());
 
    useEffect(() => {
        const int = setInterval(
            () => setTime(new Date().toLocaleString()),
            1000
        );
 
        return function clearInt() {
            clearInterval(int);
        }
    }, []);
 
    return (
        <div>Current Time: {time}</div>
    );
}
