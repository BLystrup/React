const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const movies = [
    { id: 1, title: "Shrek", year: 2001 },
    { id: 2, title: "Good Will Hunting", year: 1996 },
    { id: 3, title: "Thumbelina", year: 1989 },
    { id: 4, title: "The Little Mermaid", year: 2023 }
];

// localhost:8000/api
// req is shorthand for request. it can be called anything
// res is shorthand for response. it can be called anything
// app.get("/api", (req, res) => {
//     // console.log(req);
//     res.json({ message: "Hello World" });
// });

app.get("/movie/allMovies", (req, res) => {
    res.json(movies);
});

// POST request
app.post("/movie/newMovie", (req, res) => {
    movies.push(req.body);
    res.json({message: "ok"});
});

// Getting data from a URL
// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/movie/:id", (req, res) => {
    const movie = movies.find(movie => movie.id === parseInt(req.params.id));
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json(movie);
});

// UPDATE data
app.put("/movie/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    movies[id] = req.body;
    // we always need to respond with something
    res.json( { status: "ok" } );
    });

// DELETE data
app.delete("/movie/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    movies.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});




// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
