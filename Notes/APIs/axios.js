// Axios is a library that allows us to easily configure API calls in Javascript and our React app. 

// To install a CDN in your NPM project, type "npm install axios" in the terminal

// Using it in your project:
import axios from 'axios';
...
axios.get('http://www.example.com').then(response=>{
    console.log(response);
})

// It looks very similar to fetch, but with axios we can specify the type of request directly, so no extra arguments required to specify a GET or POST request.

// Using useEffect
import React, { useEffect, useState } from 'react';
import axios from 'axios';
...
const someComponent = props => {
    // Note the second argument is an empty array
    const [responseData, setResponseData] = useState(null);
    useEffect(()=>{
        axios.get('http://www.example.com')
            .then(response=>{setResponseData(response.data)})
    }, []);  // This empty array forces useEffect to render ONLY when the component first renders
    return(
        <div>
            {responseData}
        </div>
    )
}

